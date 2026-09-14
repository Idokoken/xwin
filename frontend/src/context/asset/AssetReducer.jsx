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

export const initialState = {
  loading: false,
  error: null,
  success: null,
  asset: null,
  userAssets: [],
  assertDetails: null,
};

export const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSET_REQUEST:
    case GET_USER_ASSETS_REQUEST:
    case GET_ASSET_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case GET_ASSET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        asset: action.payload,
      };

    case GET_ASSET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        assertDetails: action.payload,
      };

    case GET_USER_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        userAssets: action.payload,
      };

    case GET_ASSET_FAILURE:
    case GET_USER_ASSETS_FAILURE:
    case GET_ASSET_DETAILS_FAILURE:
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
