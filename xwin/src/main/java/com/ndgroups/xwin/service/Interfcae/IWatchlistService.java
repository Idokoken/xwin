package com.ndgroups.xwin.service.Interfcae;

import com.ndgroups.xwin.model.Coin;
import com.ndgroups.xwin.model.User;
import com.ndgroups.xwin.model.Watchlist;

public interface IWatchlistService {
    Watchlist getUserWatchlist(Integer userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist getById(Integer id) throws Exception;
    Coin addItemToWatchlist(Coin coin, User user) throws Exception;

}
