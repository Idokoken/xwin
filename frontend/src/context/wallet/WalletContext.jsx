import React, { useContext, useReducer } from "react";
import { initialState, walletReducer } from "./WalletReducer";

export const WalletContext = createContext();

const WalletContextProvider = (props) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  //   -----Get Coins List ----
  //   const getWallet = async (page) => {
  //     dispatch({ type: FETCH_COIN_LIST_REQUEST });
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}/coins?page=${page}`);

  //       dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
  //       // console.log("Coin list successfully fetched", data.data);
  //     } catch (error) {
  //       dispatch({
  //         type: FETCH_COIN_LIST_FAILURE,
  //         payload: error.message,
  //       });
  //       console.log(error);
  //     }
  //   };

  const value = { ...state, getWallet };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
