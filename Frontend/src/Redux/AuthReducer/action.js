import axios from "axios";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import * as types from "./actionTypes";

export const login = (logdata) => (dispatch) => {

  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post(`https://rocky-ocean-46720.herokuapp.com/user/login`, logdata)
    .then((res) => {
      if (res.data.token) {
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
        Navigate("/timer")
      }
      else 
      {
        alert("Invalid Credentials")
      }
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const signUp = (signupdata) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post(`https://rocky-ocean-46720.herokuapp.com/user/signup`, signupdata)
    .then((res) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.SIGNUP_FAILURE });
    });
};
