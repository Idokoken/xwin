package com.ndgroups.xwin.repository;

import com.ndgroups.xwin.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Integer> {
    List<Asset> findByUserId(Integer userId);
    Asset findByUserIdAndCoinId(Integer userId, String coinId);
}
