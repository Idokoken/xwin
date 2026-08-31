import { createContext, useReducer } from "react";
import axios from "axios";
import { api, BASE_URL } from "../../config/API";
import {
  FETCH_COIN_LIST_REQUEST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_TOP_50_COINS_REQUEST,
  FETCH_TOP_50_COINS_SUCCESS,
  FETCH_TOP_50_COINS_FAILURE,
  FETCH_MARKET_CHART_REQUEST,
  FETCH_MARKET_CHART_SUCCESS,
  FETCH_MARKET_CHART_FAILURE,
  FETCH_COIN_DETAILS_REQUEST,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_DETAILS_FAILURE,
  FETCH_COIN_BY_ID_REQUEST,
  FETCH_COIN_BY_ID_SUCCESS,
  FETCH_COIN_BY_ID_FAILURE,
  SEARCH_COIN_REQUEST,
  SEARCH_COIN_SUCCESS,
  SEARCH_COIN_FAILURE,
} from "./CoinAction";
import { coinReducer, initialState } from "./CoinReducer";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [state, dispatch] = useReducer(coinReducer, initialState);

  //   -----Get Coins List ----
  const getCoinList = async (page) => {
    dispatch({ type: FETCH_COIN_LIST_REQUEST });
    try {
      const { data } = await axios.get(`${BASE_URL}/coins?page=${page}`);

      dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
      console.log("Coin list successfully fetched", data);
    } catch (error) {
      dispatch({
        type: FETCH_COIN_LIST_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   -----Get Top 50 Coins List ----
  const getTo50CoinsList = async (page) => {
    dispatch({ type: FETCH_TOP_50_COINS_REQUEST });
    try {
      const { data } = await axios.get(`${BASE_URL}/coins/top50`);

      dispatch({ type: FETCH_TOP_50_COINS_SUCCESS, payload: data });
      console.log(" Top 50 Coin Successfully Fetched", data);
    } catch (error) {
      dispatch({
        type: FETCH_TOP_50_COINS_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ---- Fetch Market Chart ----
  const fetchMarketChart = async ({ coinId, days, jwt }) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const { data } = await api.get(`/coins/${coinId}/chart?days=${days}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: data });
      console.log("Market Chart Successfully Fetched", data);
    } catch (error) {
      dispatch({
        type: FETCH_MARKET_CHART_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   -----Get Coins By Id ----
  const getCoinById = async (coinId) => {
    dispatch({ type: FETCH_COIN_BY_ID_REQUEST });
    try {
      const { data } = await axios.get(`${BASE_URL}/coins/${coinId}`);

      dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: data });
      console.log("Coin Successfully Fetched", data);
    } catch (error) {
      dispatch({
        type: FETCH_COIN_BY_ID_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ---- Fetch Coin Details ----
  const fetchCoinDetails = async ({ coinId, jwt }) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const { data } = await api.get(`/coins/${coinId}/chart`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: data });
      console.log("Market Chart Successfully Fetched", data);
    } catch (error) {
      dispatch({
        type: FETCH_MARKET_CHART_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  const value = {
    ...state,
    getCoinList,
  };

  return (
    <CoinContext.Provider value={value}>{props.children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;
