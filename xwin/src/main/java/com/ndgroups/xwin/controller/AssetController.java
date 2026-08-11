package com.ndgroups.xwin.controller;

import com.ndgroups.xwin.Enum.ORDER_TYPE;
import com.ndgroups.xwin.model.*;
import com.ndgroups.xwin.response.ApiResponseDto;
import com.ndgroups.xwin.service.Interfcae.IAssetService;
import com.ndgroups.xwin.service.Interfcae.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/${api.prefix}/assets")
public class AssetController {
    @Autowired
    private IAssetService assetService;
    @Autowired
    private IUserService userService;

    @PostMapping
    public ResponseEntity<ApiResponseDto> createAsset(@RequestHeader("Authorization") String jwt,
                                                      @RequestBody Coin coin,
                                                      @RequestParam double quantity){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Asset asset = assetService.createAsset(user, coin, quantity);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), asset,
                            "Asset successfully created"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDto> getAssetById(@PathVariable Integer id){
        try {
            Asset asset = assetService.getAssetById(id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), asset,
                            "Asset successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @GetMapping("/user")
    public ResponseEntity<ApiResponseDto> getUsersAssets(@RequestHeader("Authorization") String jwt){
        try {
            User user = userService.findUserByJwtToken(jwt);
            List<Asset> asset = assetService.getUsersAsset(user.getId());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), asset,
                            "User Assets successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }
    @GetMapping("/user/coin/{coinId}")
    public ResponseEntity<ApiResponseDto> getAssetByUserIdAndCoinId(@RequestHeader("Authorization") String jwt,
                                                                    @PathVariable String coinId){
        try {
            User user = userService.findUserByJwtToken(jwt);
            Asset asset = assetService.findAssetByUserIdAndCoinId(user.getId(), coinId);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), asset,
                            "Asset successfully fetched"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }

    @PutMapping("/{userId}")
    public ResponseEntity<ApiResponseDto> updateAsset(@PathVariable Integer assetId,
                                                      @RequestParam double quantity){
        try {
            Asset asset = assetService.updateAsset(assetId, quantity);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), asset,
                            "Assets successfully updated"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto<>(false, HttpStatus.INTERNAL_SERVER_ERROR.value(),
                            null, e.getMessage()));
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponseDto> deleteAsset(@PathVariable Integer assetId){
        try {
            assetService.deleteAsset(assetId);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponseDto<>(true, HttpStatus.OK.value(), null,
                            "Assets successfully deleted"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponseDto<>(false, HttpStatus.NOT_FOUND.value(),
                            null, e.getMessage()));
        }
    }


}
