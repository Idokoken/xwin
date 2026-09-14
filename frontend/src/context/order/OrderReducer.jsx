import {
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILURE,
} from "./OrderAction";

export const initialState = {
  loading: false,
  error: null,
  success: null,
  order: null,
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
    case GET_ORDER_REQUEST:
    case GET_ALL_ORDER_REQUEST:
      return { ...state, loading: true, error: null, success: null };

    case PAY_ORDER_SUCCESS:
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        order: action.payload,
      };

    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        orders: action.payload,
      };

    case PAY_ORDER_FAILURE:
    case GET_ORDER_FAILURE:
    case GET_ALL_ORDER_FAILURE:
      return { ...state, loading: false, error: action.error, success: null };

    default:
      return state;
  }
};
