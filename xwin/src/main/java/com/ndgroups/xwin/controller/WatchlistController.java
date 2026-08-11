package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Wallet;
import com.ndgroups.xwin.model.Withdrawal;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import com.ndgroups.xwin.service.Interfcae.IWatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/${api.prefix}/watchlist")
public class WatchlistController {
    @Autowired
    private IWatchlistService watchlistService;
    @Autowired
    private IUserService userService;

    @PostMapping("/request/{amount}")
    public ResponseEntity<ApiResponseDto> requestWithdrawal(@RequestHeader("Authorization") String jwt,
                                                            @PathVariable Long amount){
        try {
            User user = userService.findUserByJwtToken(jwt);
//            Wallet userWallet = walletService.getUserWallet(user);
//            Withdrawal withdrawal = withdrawalService.requestWithdrawal(amount, user);
//            walletService.addBalance(userWallet, -withdrawal.getAmount());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), null,
                            "withdrawal request successfully created"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }
}
