package com.bc115.walletservice.dto;

import com.bc115.walletservice.enums.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class WalletDto {
    private int id;
    private LocalDate date;
    private String transactionCryptoName;
    private String userName;
    private String quantity;
    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
    private String availableBalance;
    private int userId;
}
