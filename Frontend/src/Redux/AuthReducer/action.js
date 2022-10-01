import axios from "axios";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import * as types from "./actionTypes";

export const login = (logdata) => async (dispatch) => {
  try{

//   const x ={
//     "email":"rahul@gmail.com",
//     "password":"rahul123"
// }
console.log(logdata)
  dispatch({ type: types.LOGIN_REQUEST });
  const res = await axios.post(`http://localhost:8080/user/login`,logdata);
  dispatch({type:types.LOGIN_SUCCESS,payload:res.data.token})
  return res.data
  }
  catch(err){
    return err
  }
};

export const signUp = (signupdata) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post(`http://localhost:8080/user/signup`, signupdata)
    .then((res) => {
      // console.log(res)
   
        dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return err.message;
      dispatch({ type: types.SIGNUP_FAILURE });
    });
};
