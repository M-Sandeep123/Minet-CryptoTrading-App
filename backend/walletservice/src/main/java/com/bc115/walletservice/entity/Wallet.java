package com.bc115.walletservice.entity;

import com.bc115.walletservice.enums.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;
import javax.persistence.Column;

import java.time.LocalDate;

@Entity
@Table(name = "wallet")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private LocalDate date;
    private String transactionCryptoName;
    private String userName;
    private String quantity;

    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
    private String availableBalance;
    @Column(name = "userId")
    private int userId;
}
