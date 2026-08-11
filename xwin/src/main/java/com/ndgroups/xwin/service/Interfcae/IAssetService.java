package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.Asset;
import com.ndgroups.xwin.model.Coin;
import com.ndgroups.xwin.model.User;

import java.util.List;

public interface IAssetService {
    Asset createAsset(User user, Coin coin, double quantity);
    Asset getAssetById(Integer id) throws Exception;
    Asset getAssetByUserIdAndId(Integer userId, Integer assetId);
    List<Asset> getUsersAsset(Integer userId);
    Asset updateAsset(Integer assetId, double quantity) throws Exception;
    Asset findAssetByUserIdAndCoinId(Integer userId, String coinId);
    void  deleteAsset(Integer assetId) throws Exception;
}
