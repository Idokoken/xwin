package com.ndgroups.xwin.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double quantity;
    @ManyToOne
    private Coin coin;
    private double buyPrice;
    private double sellPrice;

    @JsonIgnore
    @OneToOne
    private Order order;
}
