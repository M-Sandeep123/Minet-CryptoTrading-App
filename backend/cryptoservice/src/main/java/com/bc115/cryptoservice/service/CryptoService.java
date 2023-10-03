package com.bc115.cryptoservice.service;

import com.bc115.cryptoservice.dto.CryptoCurrencyDto;
import com.bc115.cryptoservice.entity.CryptoCurrency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class CryptoService {

    private static final String API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    @Autowired
    private RestTemplate restTemplate;

    public CryptoService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    static final long TRILLION = 10000000000L;
    public static String truncateNumber(double x) {
        return  "$"+ Math.round((x / TRILLION)*100.0)/100.0 + "T";
    }

    @Cacheable("cryptoData")
    public List<CryptoCurrencyDto> getCryptoData() {
        CryptoCurrency[] cryptoCurrencies = restTemplate.getForObject(API_URL, CryptoCurrency[].class);

        if (cryptoCurrencies != null) {
            List<CryptoCurrencyDto> cryptoDtos = new ArrayList<>();
            for (CryptoCurrency cryptoCurrency : cryptoCurrencies) {
                CryptoCurrencyDto dto = mapToDto(cryptoCurrency);
                cryptoDtos.add(dto);
            }
            return cryptoDtos;
        } else {
            return Collections.emptyList();
        }
    }

    private CryptoCurrencyDto mapToDto(CryptoCurrency cryptoCurrency) {
        CryptoCurrencyDto dto = new CryptoCurrencyDto();
        dto.setId(cryptoCurrency.getId());
        dto.setCryptoName(cryptoCurrency.getCryptoName());
        dto.setCryptoSrc(cryptoCurrency.getCryptoSrc());
        dto.setCryptoLabel(cryptoCurrency.getCryptoLabel().toUpperCase());
        dto.setCryptoPrice(cryptoCurrency.getCryptoPrice());
        dto.setCryptoMarketCap(truncateNumber(Double.parseDouble(cryptoCurrency.getCryptoMarketCap())));
        dto.setCryptoChange(cryptoCurrency.getCryptoChange());
        dto.setCryptoVolume(cryptoCurrency.getCryptoVolume());
        dto.setCryptoCirculatingSupply(cryptoCurrency.getCryptoCirculatingSupply());
        dto.setCryptoWatchlisted(cryptoCurrency.isCryptoWatchlisted());
        return dto;
    }
}
