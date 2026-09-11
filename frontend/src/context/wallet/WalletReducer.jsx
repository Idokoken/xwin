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

export const initialState = {
  userWallet: {},
  loading: false,
  error: null,
  success: null,
  transactions: [],
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_WALLET_REQUEST:
    case GET_WALLET_TRANSACTION_REQUEST:
    case DEPOSIT_MONEY_REQUEST:
    case TRANSFER_MONEY_REQUEST:
      return { ...state, loading: true, error: null, success: null };

    case GET_WALLET_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        transactions: action.payload,
      };

    case GET_USER_WALLET_SUCCESS:
    case TRANSFER_MONEY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        userWallet: action.payload,
      };

    case DEPOSIT_MONEY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        userWallet: action.payload,
      };

    case GET_USER_WALLET_FAILURE:
    case DEPOSIT_MONEY_FAILURE:
    case TRANSFER_MONEY_FAILURE:
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
