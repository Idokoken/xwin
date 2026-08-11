package com.ndgroups.xwin.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private BigDecimal balance;
    @OneToOne
    private User user;
//    @OneToMany(mappedBy = "wallet")
//    private List<WalletTransaction> walletTransactions;
}
