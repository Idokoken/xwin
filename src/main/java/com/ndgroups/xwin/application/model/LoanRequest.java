package com.ndgroups.xwin.application.model;

import com.ndgroups.xwin.model.User;

import java.time.Duration;
import java.util.Objects;

public class LoanRequest {
    private final Integer amount;
    private final Long borrowerId;
    private final Integer daysToRepay;
    private final Double interestRate;

    public LoanRequest(Integer amount, Long borrowerId, Integer daysToRepay, Double interestRate) {
        this.amount = amount;
        this.borrowerId = borrowerId;
        this.daysToRepay = daysToRepay;
        this.interestRate = interestRate;
    }

    public Integer getAmount() {
        return amount;
    }

    public Long getBorrowerId() {
        return borrowerId;
    }

    public Integer getDaysToRepay() {
        return daysToRepay;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoanRequest that = (LoanRequest) o;
        return Objects.equals(getAmount(), that.getAmount()) && Objects.equals(getBorrowerId(), that.getBorrowerId()) && Objects.equals(getDaysToRepay(), that.getDaysToRepay()) && Objects.equals(getInterestRate(), that.getInterestRate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAmount(), getBorrowerId(), getDaysToRepay(), getInterestRate());
    }

    @Override
    public String toString() {
        return "LoanRequest{" +
                "amount=" + amount +
                ", borrowerId=" + borrowerId +
                ", daysToRepay=" + daysToRepay +
                ", interestRate=" + interestRate +
                '}';
    }
}
