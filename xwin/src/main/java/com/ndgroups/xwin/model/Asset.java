package com.ndgroups.xwin.model;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double quantity;
    private double buyPrice;
    @ManyToOne
    private Coin coin;
    @ManyToOne
    private User user;
}
