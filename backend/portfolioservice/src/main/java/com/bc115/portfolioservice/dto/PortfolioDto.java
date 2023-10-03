package com.bc115.portfolioservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioDto {
    private int userId;
    private String id;
    private String coinName;
    private String coinSrc;
    private String coinCaption;
    private String coinPrice;
    private String coinChange;
    private String coinMarketCap;
    private boolean isCoinWatchListed;

}
