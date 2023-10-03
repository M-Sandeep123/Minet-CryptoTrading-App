package com.bc115.cryptoservice.service;

import com.bc115.cryptoservice.dto.CryptoCurrencyDto;
import com.bc115.cryptoservice.entity.CryptoCurrency;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class CryptoServiceTest {

    private static final String API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    private CryptoService cryptoService;

    @Mock
    private RestTemplate restTemplate;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        cryptoService = new CryptoService(restTemplate);
    }

    @Test
    void testGetCryptoData() {
        CryptoCurrency[] mockCryptoCurrencies = new CryptoCurrency[]{
                new CryptoCurrency("bitcoin", "btc", "Bitcoin", "image-url", 10000.0, "1000000", "10%", "1000", "500", true),
                new CryptoCurrency("ethereum", "eth", "Ethereum", "image-url", 3000.0, "500000", "5%", "200", "100", false)
        };
        when(restTemplate.getForObject(API_URL, CryptoCurrency[].class)).thenReturn(mockCryptoCurrencies);
        List<CryptoCurrencyDto> result = cryptoService.getCryptoData();
        assertEquals(2, result.size());
        assertEquals("bitcoin", result.get(0).getId());
        assertEquals("ethereum", result.get(1).getId());
    }

    @Test
    void testGetCryptoDataEmptyResponse() {
        when(restTemplate.getForObject(API_URL, CryptoCurrency[].class)).thenReturn(null);

        List<CryptoCurrencyDto> result = cryptoService.getCryptoData();

        assertEquals(Collections.emptyList(), result);
    }
}
