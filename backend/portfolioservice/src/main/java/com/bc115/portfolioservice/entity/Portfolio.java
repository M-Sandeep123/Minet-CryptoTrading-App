package com.bc115.portfolioservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(schema = "portfolio")
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;
    @Column(name="userId")
    private int userId;
    @Column(name = "portfolio_name")
    private String coinName;
    @Column(name ="portfolio_image")
    private String coinSrc;
    @Column(name ="portfolio_description")
    private String coinCaption;
    @Column(name ="portfolio_price")
    private String coinPrice;
    @Column(name ="portfolio_percentage_change")
    private String coinChange;
    @Column(name ="portfolio_market_cap")
    private String coinMarketCap;
    @Column(name="portfolio_watchList")
    private boolean isCoinWatchListed;
}
