package com.bc115.portfolioservice.service;

import com.bc115.portfolioservice.dto.PortfolioDto;
import com.bc115.portfolioservice.entity.Portfolio;
import com.bc115.portfolioservice.exception.PortfolioException;
import com.bc115.portfolioservice.repository.PortfolioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    private final PortfolioRepository portfolioRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public PortfolioServiceImpl(PortfolioRepository portfolioRepository, ModelMapper modelMapper) {
        this.portfolioRepository = portfolioRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<PortfolioDto> getPortfolioData() {
        try {
            List<Portfolio> portfolioEntities = portfolioRepository.findAll();
            return portfolioEntities.stream()
                    .map(this::convertEntityToDto)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new PortfolioException("Error fetching data", e);
        }
    }

    private PortfolioDto convertEntityToDto(Portfolio entity) {
        return modelMapper.map(entity, PortfolioDto.class);
    }
}
