import {
  GET_USER_WATCHLIST_REQUEST,
  GET_USER_WATCHLIST_SUCCESS,
  GET_USER_WATCHLIST_FAILURE,
  ADD_COIN_TO_WATCHLIST_REQUEST,
  ADD_COIN_TO_WATCHLIST_SUCCESS,
  ADD_COIN_TO_WATCHLIST_FAILURE,
} from "./WatchlistAction";
import { existInWatchlist } from "@/utils/existInWatchlist";

export const initialState = {
  loading: false,
  error: null,
  success: null,
  watchlist: null,
  items: [],
};

export const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_WATCHLIST_REQUEST:
    case ADD_COIN_TO_WATCHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case GET_USER_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        watchlist: action.payload,
        items: action.payload.coins,
      };

    case ADD_COIN_TO_WATCHLIST_SUCCESS:
      let updatedItems = existInWatchlist(
        state.items,
        action.payload
          ? state.items.filter((item) => item.id !== action.payload.id)
          : [action.payload, ...state.items],
      );

      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        items: updatedItems,
      };

    case GET_USER_WATCHLIST_FAILURE:
    case ADD_COIN_TO_WATCHLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    default:
      return state;
  }
};
