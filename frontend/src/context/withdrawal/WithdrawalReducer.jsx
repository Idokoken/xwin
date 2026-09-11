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

export const initialState = {
  loading: false,
  error: null,
  success: null,
  withdrawal: null,
  history: [],
  paymentDetails: null,
  requests: [],
};

export const WithDrawalReducer = (state = initialState, action) => {
  switch (Action.type) {
    case WITHDRAWAL_REQUEST:
    case WITHDRAWAL_PROCEED_REQUEST:
    case GET_WITHDRAWAL_HISTORY_REQUEST:
    case GET_WITHDRAWAL_REQUEST_REQUEST:
      return { ...state, loading: true, error: null, success: null };

    case WITHDRAWAL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        withdrawal: action.payload,
      };

    case ADD_PAYMENT_DETAILS_SUCCESS:
    case GET_PAYMENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        paymentDetails: action.payload,
      };

    case WITHDRAWAL_PROCEED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        requests: state.requests.map((item) =>
          item.id == action.payload.id ? action.payload : item,
        ),
      };

    case GET_WITHDRAWAL_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        history: action.payload,
      };

    case GET_WITHDRAWAL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        requests: action.payload,
      };

    case WITHDRAWAL_FAILURE:
    case WITHDRAWAL_PROCEED_FAILURE:
    case GET_WITHDRAWAL_HISTORY_FAILURE:
    case GET_WITHDRAWAL_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload, success: null };

    default:
      return state;
  }
};
