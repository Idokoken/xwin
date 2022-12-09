package com.ndgroups.xwin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.Duration;
import java.util.Objects;

@Entity
public class LoanApplication {
    @Id
    @GeneratedValue
    private Long id;
    private final Integer amount;
    private final User borrower;
    private final Duration repaymentTerm;
    private final Double interestRate;

    public LoanApplication(Integer amount, User borrower, Duration repaymentTerm, Double interestRate) {
        this.amount = amount;
        this.borrower = borrower;
        this.repaymentTerm = repaymentTerm;
        this.interestRate = interestRate;
    }

    public Integer getAmount() {
        return amount;
    }

    public User getBorrower() {
        return borrower;
    }

    public Duration getRepaymentTerm() {
        return repaymentTerm;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoanApplication that = (LoanApplication) o;
        return Objects.equals(amount, that.amount) && Objects.equals(borrower, that.borrower) && Objects.equals(repaymentTerm, that.repaymentTerm) && Objects.equals(interestRate, that.interestRate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amount, borrower, repaymentTerm, interestRate);
    }

    @Override
    public String toString() {
        return "LoanRequest{" +
                "amoumt=" + amount +
                ", borrower=" + borrower +
                ", repaymentTerm=" + repaymentTerm +
                ", interestRate=" + interestRate +
                '}';
    }
}
