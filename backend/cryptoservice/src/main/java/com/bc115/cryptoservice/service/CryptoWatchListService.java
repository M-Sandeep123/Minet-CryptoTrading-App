package com.bc115.cryptoservice.service;

import com.bc115.cryptoservice.dto.CryptoWatchListDto;
import com.bc115.cryptoservice.entity.CryptoWatchList;

import java.util.List;

public interface CryptoWatchListService {

    CryptoWatchListDto createData(CryptoWatchListDto reqBody);

     List<CryptoWatchList> getWatchlistByUserId(int userId);

     void deleteWatchListData(int watchListId);
}
