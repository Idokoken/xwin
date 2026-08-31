import { createContext, useReducer } from "react";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./action";
import { Data } from "../config/data";
import axios from "axios";
import { api, BASE_URL } from "../config/API";
import { reducer, initialState } from "./Reducer";

// export const user = localStorage.getItem("user");
// const token = localStorage.getItem("token");

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const addUserToLocalStorage = ({ user, token }) => {
  //     localStorage.setItem("user", JSON.stringify(user));
  //     localStorage.setItem("token", token);
  //   };

  //   const removeUserRemoveLocalStorage = () => {
  //     localStorage.removeItem("user");
  //     localStorage.removeItem("token");
  //   };

  //   ------Register User-----
  const registerUser = async (reqData) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/signup`, reqData);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      //   reqData.navigate("/");
      dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
      console.log("registeration successful", data);
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };
  //   -----Login User ----
  const loginUser = async (reqData) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/signin`,
        reqData.userData,
      );
      if (data.jwt) localStorage.setItem("jwt", data.jwt);

      reqData.navigate("/");
      dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
      console.log("user logged in", data);
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Get User Profile -----
  const getUser = async (jwt) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await api.get(`/api/users/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      // const { data } = await axios.get(`${BASE_URL}/api/users/profile`, {
      //   headers: { Authorization: `Bearer ${jwt}` },
      // });

      dispatch({ type: GET_USER_SUCCESS, payload: data });
      // console.log("user profile", data);
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  // -----Logout User-----
  const logoutUser = () => {
    dispatch({ type: LOGOUT });
    // localStorage.removeItem("jwt");
    localStorage.clear();
    console.log("user logged out");
  };

  const value = {
    ...state,
    products: Data,
    registerUser,
    loginUser,
    logoutUser,
    getUser,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
