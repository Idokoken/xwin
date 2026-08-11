package com.ndgroups.xwin.repository;

import com.ndgroups.xwin.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {
    Wallet findByUserId(Integer userId);
}
