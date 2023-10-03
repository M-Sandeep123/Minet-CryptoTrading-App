package com.bc115.cryptoservice.controller;

import com.bc115.cryptoservice.dto.CryptoCurrencyDto;
import com.bc115.cryptoservice.exception.CustomException;
import com.bc115.cryptoservice.service.CryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/crypto")
public class CryptoController {

    @Autowired
    private CryptoService cryptoService;

    public CryptoController(CryptoService cryptoService){
        this.cryptoService = cryptoService;
    }

    @GetMapping("/data")
    public List<CryptoCurrencyDto> getCryptoData() {
        try{
            return cryptoService.getCryptoData();
        }catch (Exception e){
            throw new CustomException("Error while fetching the crypto currency data", e);
        }

    }
}

