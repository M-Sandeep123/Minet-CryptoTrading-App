package com.bc115.walletservice.controller;

import com.bc115.walletservice.dto.WalletDto;
import com.bc115.walletservice.exceptions.WalletException;
import com.bc115.walletservice.service.WalletServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@RestController
@RequestMapping("/wallet")
public class WalletController {

    @Autowired
    private WalletServiceImpl walletService;

    @GetMapping
    public ResponseEntity<List<WalletDto>> getWalletDetails() throws WalletException {
        try{
            List<WalletDto> walletDtoList = walletService.getWalletDetails();
            return new ResponseEntity<>(walletDtoList, HttpStatus.OK);
        }
        catch (WalletException exception){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<WalletDto> addWalletDetails(@RequestBody WalletDto walletDto) throws WalletException {
        try{
            WalletDto newWalletDto = walletService.addWalletDetails(walletDto);
            return new ResponseEntity<>(newWalletDto, HttpStatus.CREATED);
        }
        catch (WalletException exception){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}
