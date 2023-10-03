package com.bc115.walletservice.controller;

import com.bc115.walletservice.dto.WalletDto;
import com.bc115.walletservice.enums.TransactionType;
import com.bc115.walletservice.exceptions.WalletException;
import com.bc115.walletservice.service.WalletServiceImpl;
import java.time.LocalDate;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
class WalletControllerTest {

    @MockBean
    private WalletServiceImpl walletService;

    private MockMvc mockMvc;

    @InjectMocks
    private WalletController walletController;
    @Autowired
    ObjectMapper objectMapper;


    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(walletController).build();
    }

    @Test
    void testGetAllWalletDetails() throws Exception {
        WalletDto wallet1 = new WalletDto(1,LocalDate.of(2023,9,19), "Bitcoin", "From Oshin Gupta", "+0.009395 BTC", TransactionType.PURCHASED, "+$8000.86", 1 );
        WalletDto wallet2= new WalletDto(2,LocalDate.of(2023,9,19), "Bitcoin", "From Oshin Gupta", "+0.009395 BTC",TransactionType.SOLD, "+$8000.86", 1 );
        List<WalletDto> walletDtoList = Arrays.asList(wallet1, wallet2);

        when(walletService.getWalletDetails()).thenReturn(walletDtoList);

        mockMvc.perform(MockMvcRequestBuilders.get("/wallet"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].transactionCryptoName").value("Bitcoin"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].transactionType").value("SOLD"));
    }

    @Test
    void testGetAllWalletDetailsThrowsException() throws Exception {

        Mockito.when(walletService.getWalletDetails()).thenThrow(new WalletException("No data found"));

        mockMvc.perform(MockMvcRequestBuilders.get("/wallet"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    void testAddWalletDetails() throws Exception {
        WalletDto wallet1 = new WalletDto(1,LocalDate.of(2023,9,19), "Bitcoin", "From Oshin Gupta","+0.009395 BTC", TransactionType.PURCHASED, "+$8000.86", 1 );

        when(walletService.addWalletDetails(any(WalletDto.class))).thenReturn(wallet1);

        mockMvc.perform(MockMvcRequestBuilders.post("/wallet")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(wallet1)))
                .andExpect(MockMvcResultMatchers.status().isCreated());

    }
    @Test
    void testAddWalletDetailsThrowsException() throws Exception {

        when(walletService.addWalletDetails(any(WalletDto.class))).thenThrow(WalletException.class);

        mockMvc.perform(post("/wallet")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{}"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }
}
