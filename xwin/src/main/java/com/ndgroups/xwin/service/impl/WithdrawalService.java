package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Enum.WITHDRAWAL_STATUS;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Withdrawal;
import com.ndgroups.xwin.repository.WithdrawalRepository;
import com.ndgroups.xwin.service.Interfcae.IWithdrawalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class WithdrawalService implements IWithdrawalService {
    @Autowired
    private WithdrawalRepository withdrawalRepository;

    @Override
    public Withdrawal requestWithdrawal(Long amount, User user) {
        Withdrawal withdrawal = new Withdrawal();
        withdrawal.setAmount(amount);
        withdrawal.setUser(user);
        withdrawal.setWithdrawalStatus(WITHDRAWAL_STATUS.PENDING);
        return withdrawalRepository.save(withdrawal);
    }

    @Override
    public Withdrawal proceedWithWithdrawal(Integer withdrawalId, boolean accept) throws Exception {
        Optional<Withdrawal>withdrawal = withdrawalRepository.findById(withdrawalId);
        if(withdrawal.isEmpty()){
            throw new Exception("withdrawal not found");
        }
        Withdrawal withdrawal1 = withdrawal.get();
        withdrawal1.setDate(LocalDateTime.now());
        if (accept){
            withdrawal1.setWithdrawalStatus(WITHDRAWAL_STATUS.SUCCESS);
        } else {
            withdrawal1.setWithdrawalStatus(WITHDRAWAL_STATUS.PENDING);
        }
        return withdrawalRepository.save(withdrawal1);
    }

    @Override
    public List<Withdrawal> getUserWithdrawalHistory(User user) {
        return withdrawalRepository.findByUserId(user.getId());
    }

    @Override
    public List<Withdrawal> getAllWithdrawalRequest() {
        return withdrawalRepository.findAll();
    }
}
