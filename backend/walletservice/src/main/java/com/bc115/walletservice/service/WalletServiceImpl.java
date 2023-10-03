package com.bc115.walletservice.service;

import com.bc115.walletservice.dto.WalletDto;
import com.bc115.walletservice.entity.Wallet;
import com.bc115.walletservice.repository.WalletRepository;
import com.bc115.walletservice.utils.MappingUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WalletServiceImpl implements WalletService{

    private WalletRepository walletRepository;

    @Autowired
    public WalletServiceImpl(WalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }

    @Override
    public List<WalletDto> getWalletDetails() {

        List<Wallet> walletList = walletRepository.findAll();
        return walletList.stream().map(MappingUtils::mapEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public WalletDto addWalletDetails(WalletDto walletDto) {
            return MappingUtils.mapEntityToDto(
                    this.walletRepository.save(
                            MappingUtils.mapDtoToEntity(walletDto)));

    }
}
