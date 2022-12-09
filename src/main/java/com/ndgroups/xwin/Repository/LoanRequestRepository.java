package com.ndgroups.xwin.Repository;

import com.ndgroups.xwin.model.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRequestRepository extends JpaRepository<LoanApplication, Long> {

}
