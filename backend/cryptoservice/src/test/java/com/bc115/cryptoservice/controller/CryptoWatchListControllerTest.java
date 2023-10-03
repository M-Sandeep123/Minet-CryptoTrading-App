package com.bc115.cryptoservice.controller;

import com.bc115.cryptoservice.dto.CryptoWatchListDto;
import com.bc115.cryptoservice.entity.CryptoWatchList;
import com.bc115.cryptoservice.exception.CustomException;
import com.bc115.cryptoservice.service.CryptoWatchListService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;




class CryptoWatchListControllerTest {

    @Mock
    private CryptoWatchListService cryptoWatchListService;

    @InjectMocks
    private CryptoWatchListController cryptoWatchListController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
     void testAddToWatchlist() {
        CryptoWatchListDto requestDto = new CryptoWatchListDto();
        CryptoWatchListDto responseDto = new CryptoWatchListDto();
        when(cryptoWatchListService.createData(requestDto)).thenReturn(responseDto);
        CryptoWatchListDto result = cryptoWatchListController.addToWatchlist(requestDto);
        assertEquals(responseDto, result);
        verify(cryptoWatchListService).createData(requestDto);
    }

    @Test
     void testGetWatchListByUserId() {
        int userId = 1;
        List<CryptoWatchList> watchList = Collections.singletonList(new CryptoWatchList());
        when(cryptoWatchListService.getWatchlistByUserId(userId)).thenReturn(watchList);
        List<CryptoWatchList> result = cryptoWatchListController.getWatchListByUserId(userId);
        assertEquals(watchList, result);
        verify(cryptoWatchListService).getWatchlistByUserId(userId);
    }

    @Test
     void testRemoveFromWatchlist() {
        int watchListId = 1;
        ResponseEntity<Object> expectedResponse = ResponseEntity.ok().build();
        doNothing().when(cryptoWatchListService).deleteWatchListData(watchListId);

        ResponseEntity<?> result = cryptoWatchListController.removeFromWatchlist(watchListId);

        assertEquals(expectedResponse, result);
        verify(cryptoWatchListService).deleteWatchListData(watchListId);
    }

    @Test
     void testAddToWatchlistWithException() {
        CryptoWatchListDto requestDto = new CryptoWatchListDto();
        when(cryptoWatchListService.createData(requestDto)).thenThrow(new RuntimeException("Test Exception"));

        try {
            cryptoWatchListController.addToWatchlist(requestDto);
        } catch (CustomException e) {
            assertEquals("Error while adding to watchlist", e.getMessage());
            assertEquals("Test Exception", e.getCause().getMessage());
        }
    }

    @Test
     void testGetWatchListByUserIdWithException() {
        int userId = 1;
        when(cryptoWatchListService.getWatchlistByUserId(userId)).thenThrow(new RuntimeException("Test Exception"));

        try {
            cryptoWatchListController.getWatchListByUserId(userId);
        } catch (CustomException e) {
            assertEquals("Error while fetching watchlist data", e.getMessage());
            assertEquals("Test Exception", e.getCause().getMessage());
        }
    }

    @Test
     void testRemoveFromWatchlistWithException() {
        int watchListId = 1;
        doThrow(new RuntimeException("Test Exception")).when(cryptoWatchListService).deleteWatchListData(watchListId);
        try {
            cryptoWatchListController.removeFromWatchlist(watchListId);
        } catch (CustomException e) {
            assertEquals("Error while removing from watchlist", e.getMessage());
            assertEquals("Test Exception", e.getCause().getMessage());
        }
    }
}

