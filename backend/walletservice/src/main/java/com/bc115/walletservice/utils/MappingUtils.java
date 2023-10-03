package com.bc115.walletservice.utils;

import com.bc115.walletservice.dto.WalletDto;
import com.bc115.walletservice.entity.Wallet;
import org.modelmapper.ModelMapper;

public class MappingUtils {
private MappingUtils(){

}
    private static final ModelMapper modelMapper = new ModelMapper();
    public static Wallet mapDtoToEntity(WalletDto walletDto) {
        return modelMapper.map(walletDto, Wallet.class);
    }

    public static WalletDto mapEntityToDto(Wallet wallet) {
        return modelMapper.map(wallet, WalletDto.class);
    }
}
