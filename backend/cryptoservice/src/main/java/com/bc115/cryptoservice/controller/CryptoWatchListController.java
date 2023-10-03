package com.bc115.cryptoservice.controller;

import com.bc115.cryptoservice.dto.CryptoWatchListDto;
import com.bc115.cryptoservice.entity.CryptoWatchList;
import com.bc115.cryptoservice.service.CryptoWatchListService;
import com.bc115.cryptoservice.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

@RestController
@RequestMapping("/watchlist")
public class CryptoWatchListController {

    private final CryptoWatchListService cryptoWatchListService;

    @Autowired
    public CryptoWatchListController(CryptoWatchListService cryptoWatchListService) {
        this.cryptoWatchListService = cryptoWatchListService;
    }

    @PostMapping("/add")
    public CryptoWatchListDto addToWatchlist(@RequestBody CryptoWatchListDto reqBody) {
        try {
            return cryptoWatchListService.createData(reqBody);
        } catch (Exception e) {
            throw new CustomException("Error while adding to watchlist", e);
        }
    }

    @GetMapping("/{userId}")
    public List<CryptoWatchList> getWatchListByUserId(@PathVariable int userId) {
        try {
            return cryptoWatchListService.getWatchlistByUserId(userId);
        } catch (Exception e) {
            throw new CustomException("Error while fetching watchlist data", e);
        }
    }

    @DeleteMapping("/remove/{watchListId}")
    public ResponseEntity<Object> removeFromWatchlist(@PathVariable int watchListId) {
        try {
            cryptoWatchListService.deleteWatchListData(watchListId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            throw new CustomException("Error while removing from watchlist", e);
        }
    }
}
