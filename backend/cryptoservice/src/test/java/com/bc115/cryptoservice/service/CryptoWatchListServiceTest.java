package com.bc115.cryptoservice.service;

import com.bc115.cryptoservice.dto.CryptoWatchListDto;
import com.bc115.cryptoservice.entity.CryptoWatchList;
import com.bc115.cryptoservice.repository.CryptoWatchListRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CryptoWatchListServiceTest {

    @Mock
    private CryptoWatchListRepository cryptoWatchListRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private CryptoWatchListServiceImp cryptoWatchListService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCreateData() {
        CryptoWatchListDto requestDto = new CryptoWatchListDto();
        CryptoWatchList cryptoWatchList = new CryptoWatchList();
        when(modelMapper.map(requestDto, CryptoWatchList.class)).thenReturn(cryptoWatchList);
        when(cryptoWatchListRepository.save(cryptoWatchList)).thenReturn(cryptoWatchList);

        CryptoWatchListDto resultDto = cryptoWatchListService.createData(requestDto);

        assertEquals(null, resultDto);
        verify(modelMapper).map(requestDto, CryptoWatchList.class);
        verify(cryptoWatchListRepository).save(cryptoWatchList);
    }

    @Test
    void testDeleteWatchListData() {
        cryptoWatchListService.deleteWatchListData(1);

        verify(cryptoWatchListRepository).deleteById(1);
    }

    @Test
    void testGetWatchlistByUserId() {
        int userId = 1;
        List<CryptoWatchList> watchList = Collections.singletonList(new CryptoWatchList());
        when(cryptoWatchListRepository.findByUserId(userId)).thenReturn(watchList);

        List<CryptoWatchList> result = cryptoWatchListService.getWatchlistByUserId(userId);
        assertEquals(watchList, result);
        verify(cryptoWatchListRepository).findByUserId(userId);
    }

}
