package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Wallet;
import com.ndgroups.xwin.model.Withdrawal;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import com.ndgroups.xwin.service.Interfcae.IWalletService;
import com.ndgroups.xwin.service.Interfcae.IWithdrawalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/${api.prefix}/withdrawal")
public class WithdrawalController {
    @Autowired
    private IWithdrawalService withdrawalService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IWalletService walletService;

    @PostMapping("/request/{amount}")
    public ResponseEntity<ApiResponseDto> requestWithdrawal(@RequestHeader("Authorization") String jwt,
                                                      @PathVariable Long amount){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Wallet userWallet = walletService.getUserWallet(user);
            Withdrawal withdrawal = withdrawalService.requestWithdrawal(amount, user);
            walletService.addBalance(userWallet, -withdrawal.getAmount());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), withdrawal,
                            "withdrawal request successfully created"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

    @PatchMapping("/admin/{id}/proceed/{accept}")
    public ResponseEntity<ApiResponseDto> proceedWithWithdrawal(@RequestHeader("Authorization") String jwt,
                                                                @PathVariable Integer id,
                                                                @PathVariable boolean accept){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Wallet userWallet = walletService.getUserWallet(user);
            Withdrawal withdrawal = withdrawalService.proceedWithWithdrawal(id, accept);
            if (!accept){
                walletService.addBalance(userWallet, withdrawal.getAmount());
            }
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), withdrawal,
                            "withdrawal request successfully created"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/user")
    public ResponseEntity<ApiResponseDto> getUserWithdrawalHistory(@RequestHeader("Authorization") String jwt){
        try {
            User user = userService.findUserByJwtToken(jwt);
            List<Withdrawal> withdrawals = withdrawalService.getUserWithdrawalHistory(user);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), withdrawals,
                            "user withdrawal history successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/admin")
    public ResponseEntity<ApiResponseDto> getAllWithdrawalRequest(@RequestHeader("Authorization") String jwt){
        try {
            User user = userService.findUserByJwtToken(jwt);
            List<Withdrawal> withdrawals = withdrawalService.getAllWithdrawalRequest();
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), withdrawals,
                            "all withdrawal request successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }



}
