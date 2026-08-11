package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.Enum.ORDER_TYPE;
import com.ndgroups.xwin.model.Order;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Wallet;
import com.ndgroups.xwin.repository.WalletRepository;
import com.ndgroups.xwin.service.Interfcae.IWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class WalletService implements IWalletService {
    @Autowired
    private WalletRepository walletRepository;

    @Override
    public Wallet getUserWallet(User user) throws Exception {
        Wallet wallet = walletRepository.findByUserId(user.getId());
        if (wallet == null){
            wallet = new Wallet();
            wallet.setUser(user);
        }
        return wallet;
    }

    @Override
    public Wallet addBalance(Wallet wallet, Long money) {
        BigDecimal balance = wallet.getBalance();
        BigDecimal newBalance = balance.add(BigDecimal.valueOf(money));
        wallet.setBalance(newBalance);

        return walletRepository.save(wallet);
    }


    @Override
    public Wallet getWalletById(Integer id) throws Exception {
        return walletRepository.findById(id)
                .orElseThrow(() -> new Exception("wallet with id not found"));
    }

    @Override
    public Wallet walletToWalletTransfer(User sender, Wallet recieverWallet, Long amount) throws Exception {
        Wallet senderWallet = getUserWallet(sender);

        if (senderWallet.getBalance().compareTo(BigDecimal.valueOf(amount)) < 0){
            throw new Exception("insufficient balance");
        }
        BigDecimal senderBalance = senderWallet.getBalance().subtract(BigDecimal.valueOf(amount));
        senderWallet.setBalance(senderBalance);
        walletRepository.save(senderWallet);

        BigDecimal recieverBalance = recieverWallet.getBalance().add(BigDecimal.valueOf(amount));
        recieverWallet.setBalance(recieverBalance);
        walletRepository.save(recieverWallet);

        return senderWallet;
    }

    @Override
    public Wallet payOrderPayment(Order order, User user) throws Exception {
        Wallet wallet = getUserWallet(user);
        if(order.getOrderType().equals(ORDER_TYPE.BUY)){
            BigDecimal newBalance = wallet.getBalance().subtract(order.getPrice());
            if (newBalance.compareTo(order.getPrice()) < 0){
                throw new Exception("Insufficient fund for this transaction");
            }
            wallet.setBalance(newBalance);
        } else {
            BigDecimal newBalance = wallet.getBalance().add(order.getPrice());
            wallet.setBalance(newBalance);
        }

        walletRepository.save(wallet);
        return wallet;
    }
}
