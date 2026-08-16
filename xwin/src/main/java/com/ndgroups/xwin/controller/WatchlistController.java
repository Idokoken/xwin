package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.ICoinService;
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
    @Autowired
    private ICoinService coinService;

    @GetMapping("/user")
    public ResponseEntity<ApiResponseDto> getUserWatchlist(@RequestHeader("Authorization") String jwt){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Watchlist watchlist = watchlistService.getUserWatchlist(user.getId());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), watchlist,
                            "user watchlist successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }
//
//    @PostMapping("/create")
//    public ResponseEntity<ApiResponseDto> createWatchlist(@RequestHeader("Authorization") String jwt){
//        try {
//            User user = userService.findUserByJwtToken(jwt);
//            Watchlist watchlist = watchlistService.createWatchlist(user);
//            return ResponseEntity.status(HttpStatus.OK)
//                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), watchlist,
//                            "watchlist successfully created"));
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
//                            null, e.getMessage()));
//        }
//    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDto> getWatchlistById(@RequestHeader("Authorization") String jwt,
                                                           @PathVariable Integer id){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Watchlist watchlist = watchlistService.getById(id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), watchlist,
                            "user watchlist successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @PostMapping("/add/coin/{coinId}")
    public ResponseEntity<ApiResponseDto> addItemToWatchlist(@RequestHeader("Authorization") String jwt,
                                                             @PathVariable String coinId){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Coin coin = coinService.getCoinById(coinId);
            Coin addCoin = watchlistService.addItemToWatchlist(coin, user);
            return ResponseEntity.status(HttpStatus.OK).body(new ApiResponseDto<>(true,
                    HttpStatus.OK.value(), addCoin,
                            "watchlist successfully created"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

}
