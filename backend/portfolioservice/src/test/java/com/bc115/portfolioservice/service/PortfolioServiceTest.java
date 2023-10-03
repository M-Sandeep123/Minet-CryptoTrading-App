package com.bc115.portfolioservice.service;

import com.bc115.portfolioservice.dto.PortfolioDto;
import com.bc115.portfolioservice.entity.Portfolio;
import com.bc115.portfolioservice.exception.PortfolioException;
import com.bc115.portfolioservice.repository.PortfolioRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.eq;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.any;

class PortfolioServiceTest {

    @InjectMocks
    private PortfolioServiceImpl portfolioService;

    @Mock
    private PortfolioRepository portfolioRepository;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetPortfolioData_Success() {

        Portfolio entity1 = new Portfolio();
        Portfolio entity2 = new Portfolio();
        List<Portfolio> mockEntities = Arrays.asList(entity1, entity2);

        List<PortfolioDto> mockDtos = Arrays.asList(
                new PortfolioDto(),
                new PortfolioDto()
        );

        when(portfolioRepository.findAll()).thenReturn(mockEntities);
        when(modelMapper.map(any(Portfolio.class), eq(PortfolioDto.class)))
                .thenReturn(mockDtos.get(0), mockDtos.get(1));

        List<PortfolioDto> result = portfolioService.getPortfolioData();


        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals(mockDtos, result);
    }

    @Test
    void testGetPortfolioData_Exception() {

        when(portfolioRepository.findAll()).thenThrow(new RuntimeException("Test Exception"));
        PortfolioException exception = assertThrows(PortfolioException.class, () -> portfolioService.getPortfolioData());
        assertEquals("Error fetching data", exception.getMessage());
    }
}

