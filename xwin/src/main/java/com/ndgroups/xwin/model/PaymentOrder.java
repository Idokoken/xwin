package com.ndgroups.xwin.model;

import com.ndgroups.xwin.Enum.PAYMENT_METHOD;
import com.ndgroups.xwin.Enum.PAYMENT_ORDER_STATUS;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class PaymentOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Long amount;
    private PAYMENT_ORDER_STATUS status;
    private PAYMENT_METHOD paymentMethod;
    @ManyToOne
    private User user;
}
