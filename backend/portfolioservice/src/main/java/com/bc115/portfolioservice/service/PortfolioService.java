package com.bc115.portfolioservice.service;

import com.bc115.portfolioservice.dto.PortfolioDto;

import java.util.List;

public interface PortfolioService {
    List<PortfolioDto> getPortfolioData();
}
