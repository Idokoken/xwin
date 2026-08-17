package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.response.PaymentResponse;
import com.ndgroups.xwin.service.Interfcae.IOrderService;
import com.ndgroups.xwin.service.Interfcae.IPaymentOrderService;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import com.ndgroups.xwin.service.Interfcae.IWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/${api.prefix}/wallet")
public class WalletController {
    @Autowired
    private IWalletService walletService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IPaymentOrderService paymentOrderService;

    @GetMapping("/user")
    public ResponseEntity<ApiResponseDto> getUserWallet(@RequestHeader("Authorization") String jwt){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Wallet wallet = walletService.getUserWallet(user);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), wallet,
                            "user wallet successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/add")
    public ResponseEntity<ApiResponseDto> addBalance(@RequestBody Wallet wallet,
                                                     @RequestParam Long amount){
        try {
            Wallet updatedWallet = walletService.addBalance(wallet, amount);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), updatedWallet,
                            "fund successfully added to wallet"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDto> getWalletById(@PathVariable Integer id){
        try {
            Wallet wallet = walletService.getWalletById(id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), wallet,
                            "wallet successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @PutMapping("/transfer/{walletId}")
    public ResponseEntity<ApiResponseDto> walletToWalletTransfer(@RequestHeader("Authorization")
                                                                     String jwt,
                                                                 @RequestBody WalletTransaction req,
                                                                 @PathVariable Integer walletId){
        try {
            User sender = userService.findUserByJwtToken(jwt);
            Wallet recieverWallet = walletService.getWalletById(walletId);
            Wallet wallet = walletService.walletToWalletTransfer(sender, recieverWallet, req.getAmount());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), wallet,
                            "funds successfully transferred to another wallet"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @PutMapping("/order/{orderId}/pay")
    public ResponseEntity<ApiResponseDto> payOrderPayment(@RequestHeader("Authorization") String jwt,
                                                          @PathVariable Integer orderId){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Order order = orderService.getOrderById(orderId);
            Wallet wallet = walletService.payOrderPayment(order, user);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), wallet,
                            "order successfully placed from wallet"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }


    @PutMapping("/deposit")
    public ResponseEntity<ApiResponseDto> addBalanceToWallet(@RequestHeader("Authorization") String jwt,
                                                             @RequestParam(name = "order_id") Integer orderId,
                                                             @RequestParam(name = "payment_id") String paymentId){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Wallet wallet = walletService.getUserWallet(user);

            PaymentOrder order = paymentOrderService.getPaymentOrderById(orderId);
            Boolean status = paymentOrderService.proceedPaymentOrder(order, paymentId);

            if(status){
                wallet = walletService.addBalance(wallet, order.getAmount());
            }
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), wallet,
                            "fund successfully added to wallet"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

}
