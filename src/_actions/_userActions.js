import { LOGIN_SUCCESS, LOGIN_ERROR } from "./types";


import { postLogin } from "../_services/authService";

export const login = (credentials) => async (dispatch) => {
  const tokenKey = "";

  try {
    const response = await postLogin(credentials);
    console.log(response);
    console.log(response.headers["x-auth-token"]);
    localStorage.setItem(tokenKey, response.headers["x-auth-token"]);
    // history.push('/');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: true,
    });
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      console.log(ex.response.data);
      dispatch({
        type: LOGIN_ERROR,
        payload: ex.response.data,
      });
    }
  }
};

export const userAction = {
    login
};