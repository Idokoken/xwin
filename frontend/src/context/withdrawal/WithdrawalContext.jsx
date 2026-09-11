import { createContext, useReducer } from "react";
import { initialState, WithDrawalReducer } from "./WithdrawalReducer";
import {
  WITHDRAWAL_REQUEST,
  WITHDRAWAL_SUCCESS,
  WITHDRAWAL_FAILURE,
  WITHDRAWAL_PROCEED_REQUEST,
  WITHDRAWAL_PROCEED_SUCCESS,
  WITHDRAWAL_PROCEED_FAILURE,
  GET_WITHDRAWAL_HISTORY_REQUEST,
  GET_WITHDRAWAL_HISTORY_SUCCESS,
  GET_WITHDRAWAL_HISTORY_FAILURE,
  ADD_PAYMENT_DETAILS_SUCCESS,
  ADD_PAYMENT_DETAILS_FAILURE,
  GET_PAYMENT_DETAILS_REQUEST,
  GET_PAYMENT_DETAILS_SUCCESS,
  GET_PAYMENT_DETAILS_FAILURE,
  GET_WITHDRAWAL_REQUEST_REQUEST,
  GET_WITHDRAWAL_REQUEST_SUCCESS,
  GET_WITHDRAWAL_REQUEST_FAILURE,
} from "./WithdrawalAction";

export const WithdrawalContext = createContext();

const WithdrawalContextProvider = (props) => {
  const [state, dispatch] = useReducer(WithDrawalReducer, initialState);

  //   ------Withdrawal Request-----
  const withdrawalRequest = async ({ amount, jwt }) => {
    dispatch({ type: WITHDRAWAL_REQUEST });
    try {
      const { data } = await api.post(`/api/withdrawal/${amount}`, null, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: WITHDRAWAL_SUCCESS, payload: data });
      console.log("withdrawal-----", data);
    } catch (error) {
      dispatch({
        type: WITHDRAWAL_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Process Withdrawal-----
  const processWithdrawal = async ({ id, jwt, accept }) => {
    dispatch({ type: WITHDRAWAL_PROCEED_REQUEST });
    try {
      const { data } = await api.patch(
        `/api/admin/withdrawal/${id}/proceed/${accept}`,
        null,
        {
          Headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      dispatch({ type: WITHDRAWAL_PROCEED_SUCCESS, payload: data });
      console.log("proceed withdrawal-----", data);
    } catch (error) {
      dispatch({
        type: WITHDRAWAL_PROCEED_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Get Withdrawal History-----
  const getWithdrawalHistory = async (jwt) => {
    dispatch({ type: GET_WITHDRAWAL_HISTORY_REQUEST });
    try {
      const { data } = await api.get(`/api/withdrawal`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_WITHDRAWAL_HISTORY_SUCCESS, payload: data });
      console.log("Withdrawal History Successfully Fetched", data);
    } catch (error) {
      dispatch({
        type: GET_WITHDRAWAL_HISTORY_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Get All Withdrawal History-----
  const getAllWithdrawalHistory = async (jwt) => {
    dispatch({ type: GET_WITHDRAWAL_HISTORY_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/withdrawal`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_WITHDRAWAL_HISTORY_SUCCESS, payload: data });
      console.log("All Withdrawal History Successfully Fetched", data);
    } catch (error) {
      dispatch({
        type: GET_WITHDRAWAL_HISTORY_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Add Payment Details-----
  const addPaymentDetails = async ({ PaymentDetails, jwt }) => {
    dispatch({ type: ADD_PAYMENT_DETAILS_REQUEST });
    try {
      const { data } = await api.post(`/api/payment-details`, PaymentDetails, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: ADD_PAYMENT_DETAILS_SUCCESS, payload: data });
      console.log("payment detail successfully added", data);
    } catch (error) {
      dispatch({
        type: ADD_PAYMENT_DETAILS_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Get Payment Details-----
  const getPaymentDetails = async (jwt) => {
    dispatch({ type: GET_PAYMENT_DETAILS_REQUEST });
    try {
      const { data } = await api.get(`/api/payment-details`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_PAYMENT_DETAILS_SUCCESS, payload: data });
      console.log("Get Payment Details", data);
    } catch (error) {
      dispatch({
        type: GET_PAYMENT_DETAILS_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  const value = {
    ...state,
    withdrawalRequest,
    processWithdrawal,
    getWithdrawalHistory,
    getAllWithdrawalHistory,
    addPaymentDetails,
    getPaymentDetails,
  };

  return (
    <WithdrawalContext.Provider value={value}>
      {props.children}
    </WithdrawalContext.Provider>
  );
};

export default WithdrawalContextProvider;
