import React, { createContext, useReducer } from "react";
import { initialState, walletReducer } from "./WalletReducer";
import { api, BASE_URL } from "../../config/API";

import {
  GET_USER_WALLET_REQUEST,
  GET_USER_WALLET_SUCCESS,
  GET_USER_WALLET_FAILURE,
  GET_WALLET_TRANSACTION_REQUEST,
  GET_WALLET_TRANSACTION_SUCCESS,
  GET_WALLET_TRANSACTION_FAILURE,
  DEPOSIT_MONEY_REQUEST,
  DEPOSIT_MONEY_SUCCESS,
  DEPOSIT_MONEY_FAILURE,
  TRANSFER_MONEY_REQUEST,
  TRANSFER_MONEY_SUCCESS,
  TRANSFER_MONEY_FAILURE,
} from "./WalletAction";

export const WalletContext = createContext();

const WalletContextProvider = (props) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  // -----Get User Wallet ----
  const getUserWallet = async (jwt) => {
    dispatch({ type: GET_USER_WALLET_REQUEST });
    try {
      const { data } = await api.get(`${BASE_URL}/api/wallet`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_USER_WALLET_SUCCESS, payload: data });
      console.log("user wallet successfully fetched", data);
    } catch (error) {
      dispatch({
        type: GET_USER_WALLET_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  // -----Get Wallet Transactions ----
  const getWalletTransactions = async (jwt) => {
    dispatch({ type: GET_WALLET_TRANSACTION_REQUEST });
    try {
      const { data } = await api.get(`${BASE_URL}/api/wallet/transactions`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_WALLET_TRANSACTION_SUCCESS, payload: data });
      console.log("Wallet Transaction", data);
    } catch (error) {
      dispatch({
        type: GET_WALLET_TRANSACTION_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  // ----- Deposit Money ----
  const depositMoney = async ({ jwt, orderId, paymentId, navigate }) => {
    dispatch({ type: DEPOSIT_MONEY_REQUEST });
    try {
      const { data } = await api.put(
        `${BASE_URL}/api/wallet/deposit`,
        null,
        { params: { order_id: orderId, payment_id: paymentId } },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      dispatch({ type: DEPOSIT_MONEY_SUCCESS, payload: data });
      navigate("/wallet");
      console.log("Money successfully deposited", data);
    } catch (error) {
      dispatch({
        type: DEPOSIT_MONEY_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  // ----- Payment Handler ----
  const paymentHandler = async ({ jwt, amount, paymentMethod }) => {
    dispatch({ type: DEPOSIT_MONEY_REQUEST });
    try {
      const { data } = await api.post(
        `${BASE_URL}/api/payment/${paymentMethod}/amount/${amount}`,
        null,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      window.location.href = data.payment_url;

      // dispatch({ type: DEPOSIT_MONEY_SUCCESS, payload: data });
      // console.log("money successfully deposited", data);
    } catch (error) {
      dispatch({
        type: DEPOSIT_MONEY_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  // ----- Transfer Money ----
  const transferMoney = async ({ jwt, walletId, reqData }) => {
    dispatch({ type: TRANSFER_MONEY_REQUEST });
    try {
      const { data } = await api.put(
        `${BASE_URL}/api/wallet/${walletId}/transfer`,
        reqData,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      dispatch({ type: TRANSFER_MONEY_SUCCESS, payload: data });
      console.log("transfer successful", data);
    } catch (error) {
      dispatch({
        type: TRANSFER_MONEY_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  const value = {
    ...state,
    getUserWallet,
    getWalletTransactions,
    depositMoney,
    paymentHandler,
    transferMoney,
  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
