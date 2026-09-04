package com.ndgroups.xwin.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ndgroups.xwin.model.Coin;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.ICoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/coins")
public class CoinController {
    @Autowired
    private ICoinService coinService;
    private final ObjectMapper objectMapper;

    @GetMapping
    public ResponseEntity<ApiResponseDto> getCoinList(@RequestParam("page") int page){
        try {
            List<Coin> coins = coinService.getCoinList(page);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), coins,
                            "coin list successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/chart/{coinId}")
    public ResponseEntity<ApiResponseDto> getMarketChat(@PathVariable String coinId,
                                                        @RequestParam("days")  int days){
        try {
            String marketChart = coinService.getMarketChat(coinId, days);
            JsonNode jsonNode = objectMapper.readTree(marketChart);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), jsonNode,
                            "coin market chart successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/details/{coinId}")
    public ResponseEntity<ApiResponseDto> getCoinDetails(@PathVariable String coinId){
        try {
            String coin = coinService.getCoinDetails(coinId);
            JsonNode jsonNode = objectMapper.readTree(coin);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), jsonNode,
                            "coin Details successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

//    @GetMapping("/{coinId}")
//    public ResponseEntity<ApiResponseDto> getCoinById(@PathVariable String coinId){
//        try {
//            Coin coin = coinService.getCoinById(coinId);
////            JsonNode jsonNode = objectMapper.readTree(coin);
//            return ResponseEntity.status(HttpStatus.OK)
//                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), coin,
//                            "coin successfully fetched"));
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
//                            null, e.getMessage()));
//        }
//    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponseDto> searchCoin(@RequestParam String keyword){
        try {
            String coin = coinService.searchCoin(keyword);
            JsonNode jsonNode = objectMapper.readTree(coin);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), jsonNode,
                            "coin successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/top50")
    public ResponseEntity<ApiResponseDto> getTop50CoinByMarketTopRank(){
        try {
            String coins = coinService.getTop50CoinByMarketTopRank();
            JsonNode jsonNode = objectMapper.readTree(coins);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), jsonNode,
                            "Top 50 coins successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/trading")
    public ResponseEntity<ApiResponseDto> getTreadingCoins(){
        try {
            String coins = coinService.getTreadingCoins();
            JsonNode jsonNode = objectMapper.readTree(coins);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), jsonNode,
                            "Top Trading coins successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }



}
