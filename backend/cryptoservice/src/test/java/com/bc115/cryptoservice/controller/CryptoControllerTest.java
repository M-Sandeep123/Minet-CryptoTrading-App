package com.bc115.cryptoservice.controller;

import com.bc115.cryptoservice.dto.CryptoCurrencyDto;
import com.bc115.cryptoservice.exception.CustomException;
import com.bc115.cryptoservice.service.CryptoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class CryptoControllerTest {

    private CryptoController cryptoController;

    @Mock
    private CryptoService cryptoService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        cryptoController = new CryptoController(cryptoService);
    }

    @Test
    void testGetCryptoData() {
        List<CryptoCurrencyDto> mockCryptoData = Collections.singletonList(
                new CryptoCurrencyDto("bitcoin", "Bitcoin", "image-url", "BTC", 10000.0, "1000000", "10%", "1000", "500", true)
        );

        when(cryptoService.getCryptoData()).thenReturn(mockCryptoData);

        List<CryptoCurrencyDto> result = cryptoController.getCryptoData();

        assertEquals(1, result.size());
        assertEquals("bitcoin", result.get(0).getId());
    }

     @Test
     void testGetCryptoDataWithException() {
         when(cryptoService.getCryptoData()).thenThrow(new CustomException("Test exception"));

         try {
             cryptoController.getCryptoData();
         } catch (CustomException e) {
             assertEquals("Error while fetching the crypto currency data", e.getMessage());
         }
     }
}
