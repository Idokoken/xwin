package com.ndgroups.xwin.repository;

import com.ndgroups.xwin.model.Withdrawal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WithdrawalRepository extends JpaRepository<Withdrawal, Integer> {
    List<Withdrawal> findByUserId(Integer id);
}
