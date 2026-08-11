package com.ndgroups.xwin.repository;

import com.ndgroups.xwin.model.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatchlistRepository extends JpaRepository<Watchlist, Integer> {
    Watchlist findByUserId(Integer userId);
}
