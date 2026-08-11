package com.ndgroups.xwin.model;

import com.ndgroups.xwin.Enum.WITHDRAWAL_STATUS;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ManyToAny;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Withdrawal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private WITHDRAWAL_STATUS withdrawalStatus;
    private long amount;
    @ManyToOne
    private User user;
    private LocalDateTime date = LocalDateTime.now();
}
