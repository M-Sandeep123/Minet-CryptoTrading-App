package com.bc115.cryptoservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CryptoCurrencyDto {
    private String id;
    private String cryptoName;
    private String cryptoSrc;
    private String cryptoLabel;
    private double cryptoPrice;
    private String cryptoMarketCap;
    private String cryptoChange;
    private String cryptoVolume;
    private String cryptoCirculatingSupply;
    private boolean cryptoWatchlisted;
}