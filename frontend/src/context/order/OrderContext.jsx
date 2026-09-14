import { createContext, useReducer } from "react";
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
import { initialState, orderReducer } from "./OrderReducer";
import { BASE_URL, api } from "@/config/API";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  //   ------Pay Order-----
  const payOrder = async ({ jwt, orderData, amount }) => {
    dispatch({ type: PAY_ORDER_REQUEST });
    try {
      const { data } = await api.post(
        `/api/orders/pay`,
        { orderData },
        {
          Headers: { Authorization: `Bearer ${jwt}` },
        },
      );
      dispatch({ type: PAY_ORDER_SUCCESS, payload: data });
      console.log("Pay Order", data);
    } catch (error) {
      dispatch({
        type: PAY_ORDER_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Get Order By Id-----
  const getOrderById = async (jwt, orderId) => {
    dispatch({ type: GET_ORDER_REQUEST });
    try {
      const { data } = await api.get(`/api/orders/${orderId}`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
      console.log("Get Order request", data);
    } catch (error) {
      dispatch({
        type: GET_ORDER_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   ------Get All Order Request-----
  const getAllOrdersForUsers = async ({ jwt, orderType, assetSymbol }) => {
    dispatch({ type: GET_ALL_ORDER_REQUEST });
    try {
      const { data } = await api.get(
        `/api/orders`,
        { params: { order_type: orderType, asset_symbol: assetSymbol } },
        {
          Headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      dispatch({ type: GET_ALL_ORDER_SUCCESS, payload: data });
      console.log("Get All Order request", data);
    } catch (error) {
      dispatch({
        type: GET_ALL_ORDER_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  const value = { ...state, payOrder, getOrderById, getAllOrdersForUsers };

  return (
    <OrderContext.Provider value={value}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
