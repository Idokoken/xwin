import { createContext, useReducer } from "react";
import { api } from "@/config/API";
import { initialState, watchlistReducer } from "./WatchlistReducer";
import {
  GET_USER_WATCHLIST_REQUEST,
  GET_USER_WATCHLIST_SUCCESS,
  GET_USER_WATCHLIST_FAILURE,
  ADD_COIN_TO_WATCHLIST_REQUEST,
  ADD_COIN_TO_WATCHLIST_SUCCESS,
  ADD_COIN_TO_WATCHLIST_FAILURE,
} from "./WatchlistAction";

export const WatchlistContext = createContext();

const WatchlistContextProvider = (props) => {
  const [state, dispatch] = useReducer(watchlistReducer, initialState);

  //   .....Get User Watchlist.....
  const getUserWatchlist = async (jwt) => {
    dispatch({ type: GET_USER_WATCHLIST_REQUEST });
    try {
      const { data } = await api.get(`/api/watchlist/user`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_USER_WATCHLIST_SUCCESS, payload: data });
      console.log("User watchlist", data);
    } catch (error) {
      dispatch({
        type: GET_USER_WATCHLIST_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   .....Add Item Item Watchlist.....
  const addItemToWatchlist = async ({ coinId, jwt }) => {
    dispatch({ type: ADD_COIN_TO_WATCHLIST_REQUEST });
    try {
      const { data } = await api.patch(
        `/api/watchlist/add/coin/${coinId}`,
        {},
        {
          Headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      dispatch({ type: ADD_COIN_TO_WATCHLIST_SUCCESS, payload: data });
      console.log("coin successfully added to watchlist", data);
    } catch (error) {
      dispatch({
        type: ADD_COIN_TO_WATCHLIST_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  const value = { ...state, getUserWatchlist, addItemToWatchlist };

  return (
    <WatchlistContext.Provider value={value}>
      {props.children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
