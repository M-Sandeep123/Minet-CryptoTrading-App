package com.bc115.cryptoservice.repository;

import com.bc115.cryptoservice.entity.CryptoWatchList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CryptoWatchListRepository extends JpaRepository<com.bc115.cryptoservice.entity.CryptoWatchList, Integer> {
    List<CryptoWatchList> findByUserId(int userId);
}
