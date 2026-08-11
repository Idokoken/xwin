package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.Order;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Wallet;

public interface IWalletService {
    Wallet getUserWallet(User user) throws Exception;
    Wallet addBalance(Wallet wallet, Long money);
    Wallet getWalletById(Integer id) throws Exception;
    Wallet walletToWalletTransfer(User sender, Wallet recieveWallet, Long amount) throws Exception;
    Wallet payOrderPayment(Order order, User user) throws Exception;
}
