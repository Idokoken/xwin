package com.ndgroups.xwin.repository;

import com.ndgroups.xwin.model.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Integer> {
    PaymentDetails findByUserId(Integer userId);
}
