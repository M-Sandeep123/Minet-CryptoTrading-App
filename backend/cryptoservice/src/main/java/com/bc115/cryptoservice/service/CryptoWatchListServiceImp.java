package com.bc115.cryptoservice.service;

import com.bc115.cryptoservice.dto.CryptoWatchListDto;
import com.bc115.cryptoservice.entity.CryptoWatchList;
import com.bc115.cryptoservice.repository.CryptoWatchListRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CryptoWatchListServiceImp implements CryptoWatchListService {

    private final CryptoWatchListRepository cryptoWatchListRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CryptoWatchListServiceImp(CryptoWatchListRepository cryptoWatchListRepository, ModelMapper modelMapper) {
        this.cryptoWatchListRepository = cryptoWatchListRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CryptoWatchListDto createData(CryptoWatchListDto reqBody) {
        CryptoWatchList watchList = modelMapper.map(reqBody, CryptoWatchList.class);
        CryptoWatchList savedWatchList = cryptoWatchListRepository.save(watchList);
        return modelMapper.map(savedWatchList, CryptoWatchListDto.class);
    }

    @Override
    public List<CryptoWatchList> getWatchlistByUserId(int userId) {
        return cryptoWatchListRepository.findByUserId(userId);
    }

    @Override
    public void deleteWatchListData(int watchListId) {
        cryptoWatchListRepository.deleteById(watchListId);
    }
}
