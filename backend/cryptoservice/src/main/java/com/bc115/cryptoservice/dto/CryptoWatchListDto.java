package com.bc115.cryptoservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CryptoWatchListDto {

    private int id;

    private int userId;

    private String cryptoName;

    private String cryptoSrc;

    private String cryptoLabel;

    private Double cryptoPrice;

    private String cryptoMarketCap;

    private String cryptoChange;

    private String cryptoVolume;

    private String cryptoCirculatingSupply;

    private boolean cryptoWatchList;

}
