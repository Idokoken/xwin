package com.ndgroups.xwin.model;

import com.ndgroups.xwin.Enum.WALLET_TRANSACTION_TYPE;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ManyToAny;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class WalletTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
//    @JoinColumn(name = "wallet_id")
    private Wallet wallet;
    private WALLET_TRANSACTION_TYPE type;
    private LocalDate date;
    private String transferId;
    private String purpose;
    private Long amount;


}
