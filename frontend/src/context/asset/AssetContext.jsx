import { createContext, useReducer } from "react";
import {
  GET_ASSET_REQUEST,
  GET_ASSET_SUCCESS,
  GET_ASSET_FAILURE,
  GET_USER_ASSETS_REQUEST,
  GET_USER_ASSETS_SUCCESS,
  GET_USER_ASSETS_FAILURE,
  GET_ASSET_DETAILS_REQUEST,
  GET_ASSET_DETAILS_SUCCESS,
  GET_ASSET_DETAILS_FAILURE,
} from "./AssetAction";
import { assetReducer, initialState } from "./AssetReducer";
import { api } from "@/config/API";

export const AssetContext = createContext();

const AssetContextProvider = (props) => {
  const [state, dispatch] = useReducer(assetReducer, initialState);

  //   ..... Get Asset By ID .....
  const getAssetById = async ({ jwt, assetId }) => {
    dispatch({ type: GET_ASSET_REQUEST });
    try {
      const { data } = await api.get(`/api/assets/${assetId}`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_ASSET_SUCCESS, payload: data });
      console.log("Get Asset by Id", data);
    } catch (error) {
      dispatch({
        type: GET_ASSET_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   .....Get Asset Details.....
  const getAssetDetails = async ({ jwt, coinId }) => {
    dispatch({ type: GET_ASSET_DETAILS_REQUEST });
    try {
      const { data } = await api.get(`/api/assets/coin/${coinId}/user`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_ASSET_DETAILS_SUCCESS, payload: data });
      console.log("Get Asset Detaails", data);
    } catch (error) {
      dispatch({
        type: GET_ASSET_DETAILS_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  //   .....Get User Asset.....
  const getUserAssets = async (jwt) => {
    dispatch({ type: GET_USER_ASSETS_REQUEST });
    try {
      const { data } = await api.get(`/api/assets`, {
        Headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_USER_ASSETS_SUCCESS, payload: data });
      console.log("User Assets", data);
    } catch (error) {
      dispatch({
        type: GET_USER_ASSETS_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };

  const value = { ...state, getAssetById, getAssetDetails, getUserAssets };

  return (
    <AssetContext.Provider value={value}>
      {props.children}
    </AssetContext.Provider>
  );
};

export default AssetContextProvider;
