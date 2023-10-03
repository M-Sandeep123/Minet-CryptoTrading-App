package com.bc115.cryptoservice.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import javax.persistence.Column;

@Entity
@Table(schema = "watchList")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CryptoWatchList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "userid")
    private int userId;
    @Column(name = "crypto_name")
    private String cryptoName;
    @Column(name = "crypto_src")
    private String cryptoSrc;
    @Column(name = "crypto_label")
    private String cryptoLabel;
    @Column(name = "crypto_price")
    private Double cryptoPrice;
    @Column(name = "market_cap")
    private String cryptoMarketCap;
    @Column(name = "crypto_change")
    private String cryptoChange;
    @Column(name = "crypto_volume")
    private String cryptoVolume;
    @Column(name = "crypto_circulating_supply")
    private String cryptoCirculatingSupply;
    @Column(name = "crypto_watchlist")
    private boolean cryptoWatchList;

}
