package com.bc115.portfolioservice.controller;

import com.bc115.portfolioservice.dto.PortfolioDto;
import com.bc115.portfolioservice.exception.PortfolioException;
import com.bc115.portfolioservice.service.PortfolioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class PortfolioControllerTest {

    private PortfolioController portfolioController;

    @Mock
    private PortfolioService portfolioService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        portfolioController = new PortfolioController(portfolioService);
    }

    @Test
    void testGetPortfolioData() {
        List<PortfolioDto> mockPortfolioData = Collections.singletonList(
                new PortfolioDto(1, "bitcoin", "BitCoin", "10000.0",  "BTC", "328553.73", "+1.06%", "$60.1T", true)
        );

        when(portfolioService.getPortfolioData()).thenReturn(mockPortfolioData);

        List<PortfolioDto> result = portfolioController.getPortfolioData();

        assertEquals(1, result.size());
        assertEquals("bitcoin", result.get(0).getId());
    }

    @Test
    void testGetPortfolioDataWithException() {
        when(portfolioService.getPortfolioData()).thenThrow(new PortfolioException("Test exception"));

        try {
            portfolioController.getPortfolioData();
        } catch (PortfolioException e) {
            assertEquals("Error fetching data", e.getMessage());
        }
    }

}
