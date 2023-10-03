package com.bc115.portfolioservice.controller;

import com.bc115.portfolioservice.dto.PortfolioDto;
import com.bc115.portfolioservice.exception.PortfolioException;
import com.bc115.portfolioservice.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    private final PortfolioService portfolioService;

    @Autowired
    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public List<PortfolioDto> getPortfolioData() {
        try {
            return portfolioService.getPortfolioData();
        } catch (Exception e) {
            throw new PortfolioException("Error fetching data", e);
        }
    }
}
