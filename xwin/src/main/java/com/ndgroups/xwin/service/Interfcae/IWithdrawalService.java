package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Withdrawal;

import java.util.List;

public interface IWithdrawalService {
    Withdrawal requestWithdrawal(Long amount, User user);
    Withdrawal proceedWithWithdrawal(Integer withdrawalId, boolean accept) throws Exception;
    List<Withdrawal>getUserWithdrawalHistory(User user);
    List<Withdrawal>getAllWithdrawalRequest();
}
