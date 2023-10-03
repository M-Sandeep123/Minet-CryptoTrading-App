package com.bc115.walletservice.service;

import com.bc115.walletservice.dto.WalletDto;

import java.util.List;

public interface WalletService {

    List<WalletDto> getWalletDetails();


    WalletDto addWalletDetails(WalletDto walletDto);
}
