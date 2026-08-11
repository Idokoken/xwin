package com.ndgroups.xwin.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ndgroups.xwin.Enum.ORDER_STATUS;
import com.ndgroups.xwin.Enum.ORDER_TYPE;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column(nullable = false)
    private ORDER_TYPE orderType;
    @Column(nullable = false)
    private BigDecimal price;
    private LocalDateTime timestamp = LocalDateTime.now();
    @Column(nullable = false)
    private ORDER_STATUS orderStatus;
    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    private OrderItem orderItem;
}
