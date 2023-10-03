package com.bc115.cryptoservice.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CryptoCurrency {

    private String id;
    @JsonProperty("name")
    private String cryptoName;
    @JsonProperty("image")
    private String cryptoSrc;
    @JsonProperty("symbol")
    private String cryptoLabel;
    @JsonProperty("current_price")
    private double cryptoPrice;
    @JsonProperty("market_cap")
    private String cryptoMarketCap;
    @JsonProperty("price_change_percentage_24h")
    private String cryptoChange;
    @JsonProperty("total_volume")
    private String cryptoVolume;
    @JsonProperty("circulating_supply")
    private String cryptoCirculatingSupply;
    private boolean cryptoWatchlisted;
}

