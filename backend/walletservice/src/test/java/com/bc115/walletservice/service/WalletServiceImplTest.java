package com.bc115.walletservice.service;

import com.bc115.walletservice.dto.WalletDto;
import com.bc115.walletservice.entity.Wallet;
import com.bc115.walletservice.enums.TransactionType;
import com.bc115.walletservice.repository.WalletRepository;
import com.bc115.walletservice.utils.MappingUtils;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class WalletServiceImplTest {

    @InjectMocks
    private WalletServiceImpl walletService;

    @Mock
    private WalletRepository walletRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllWalletDetails() {
        Wallet wallet1 = new Wallet(1, LocalDate.of(2023,9,19),"Bitcoin", "From Oshin Gupta", "+0.009395 BTC",TransactionType.PURCHASED, "+$8000.86", 1 );
        Wallet wallet2= new Wallet(2, LocalDate.of(2023,9,19),"Bitcoin", "From Oshin Gupta", "+0.009395 BTC",TransactionType.SOLD, "+$8000.86", 1 );
        List<Wallet> walletList = Arrays.asList(wallet1, wallet2);
        when(walletRepository.findAll()).thenReturn(walletList);

        List<WalletDto> walletDTOs = walletService.getWalletDetails();

        assertEquals(2, walletDTOs.size());
        assertEquals("Bitcoin", walletDTOs.get(0).getTransactionCryptoName());
        assertEquals(TransactionType.SOLD, walletDTOs.get(1).getTransactionType());
    }

    @Test
    void testAddWalletDetails() throws Exception {

        WalletDto walletDto = new WalletDto(1,LocalDate.of(2023,9,19), "Bitcoin", "From Oshin Gupta","+0.009395 BTC", TransactionType.PURCHASED, "+$8000.86", 1);

        Wallet wallet = MappingUtils.mapDtoToEntity(walletDto);

        when(walletRepository.save(Mockito.any(Wallet.class))).thenReturn(wallet); // Mock the repository save method

        WalletDto createdWalletDTO = walletService.addWalletDetails(walletDto);

        assertEquals(walletDto.getId(), createdWalletDTO.getId());
    }
}
