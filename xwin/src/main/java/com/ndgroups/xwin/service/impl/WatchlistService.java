package com.ndgroups.xwin.service.impl;

import com.ndgroups.xwin.model.Coin;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Watchlist;
import com.ndgroups.xwin.repository.WatchlistRepository;
import com.ndgroups.xwin.service.Interfcae.IWatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WatchlistService implements IWatchlistService {
    @Autowired
    private WatchlistRepository watchlistRepository;

    @Override
    public Watchlist getUserWatchlist(Integer userId) throws Exception {
        Watchlist watchlist = watchlistRepository.findByUserId(userId);
        if (watchlist == null){
            throw new Exception("watchlist not found");
        }
        return watchlist;
    }

    @Override
    public Watchlist createWatchlist(User user) {
        Watchlist watchlist = new Watchlist();
        watchlist.setUser(user);
        return watchlistRepository.save(watchlist);
    }

    @Override
    public Watchlist getById(Integer id) throws Exception {
        return watchlistRepository.findById(id)
                .orElseThrow(() -> new Exception("watchlist with Id not found"));
    }

    @Override
    public Coin addItemToWatchlist(Coin coin, User user) throws Exception {
        Watchlist watchlist = getUserWatchlist(user.getId());
        if (watchlist.getCoins().contains(coin)){
            watchlist.getCoins().remove(coin);
        }
        watchlist.getCoins().add(coin);
        watchlistRepository.save(watchlist);

        return coin;
    }


}
