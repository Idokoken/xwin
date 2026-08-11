package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.Asset;
import com.ndgroups.xwin.model.Coin;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService implements IAssetService {
    @Autowired
    private AssetRepository assetRepository;

    @Override
    public Asset createAsset(User user, Coin coin, double quantity) {
        Asset asset = new Asset();
        asset.setUser(user);
        asset.setCoin(coin);
        asset.setQuantity(quantity);
        asset.setBuyPrice(coin.getCurrentPrice());
        return assetRepository.save(asset);
    }

    @Override
    public Asset getAssetById(Integer id) throws Exception {
        return assetRepository.findById(id)
                .orElseThrow(() -> new Exception("asset with given Id not found"));
    }

    @Override
    public Asset getAssetByUserIdAndId(Integer userId, Integer assetId) {
        return null;
    }

    @Override
    public List<Asset> getUsersAsset(Integer userId) {
        return assetRepository.findByUserId(userId);
    }

    @Override
    public Asset updateAsset(Integer assetId, double quantity) throws Exception {
        Asset oldAsset = getAssetById(assetId);
        oldAsset.setQuantity(quantity + oldAsset.getQuantity());
        return assetRepository.save(oldAsset);
    }

    @Override
    public Asset findAssetByUserIdAndCoinId(Integer userId, String coinId) {
        return assetRepository.findByUserIdAndCoinId(userId, coinId);
    }

    @Override
    public void deleteAsset(Integer assetId) throws Exception {
        if(!assetRepository.existsById(assetId)){
            throw new Exception("asset with id not found");
        }
        assetRepository.deleteById(assetId);
    }


}
