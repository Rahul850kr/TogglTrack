import axios from "axios"
// import { TbToolsKitchenOff } from "react-icons/tb"
import { ADDCLIENT, ADDPROJECT, DELETECLIENT, DELETEPROJECT, GETCLIENT, GETPROJECT } from "./actionTypes"

const url = "https://toggltrack521.herokuapp.com"
const token = JSON.parse(localStorage.getItem("token"))
export const getProject = () => async (dispatch) => {


   const res = await axios.get(`${url}/task/todo`, {
      headers: {
         Authorization: 'Bearer ' + token
      }
   })
   dispatch({
      type: GETPROJECT,
      payload: res.data
   })
   return res.data
}
export const PostProject = (data) => async (dispatch) => {
   try {
      const headers = {
         'Authorization': 'Bearer ' + token
      }
      const res = await axios.post(`${url}/task/todo`, data, { headers: headers })

      dispatch({ type: ADDPROJECT, payload: res.data })
      return res.data
   } catch (e) {
      console.log(e.message)
   }

}

export const DeleteProject = (id) => async (dispatch) => {
   try {
      const headers = {
         'Authorization': 'Bearer ' + token
      }
      const res = await axios.delete(`${url}/task/todo/${id}`, { headers: headers })

      dispatch({ type: DELETEPROJECT, payload: res.data })
      return res.data
   } catch (e) {
      console.log(e.message)
   }

}


export const getClient = () => async (dispatch) => {
   const res = await axios.get(`${url}/client`, {
      headers: {
         Authorization: 'Bearer ' + token
      }
   })

   dispatch({
      type: GETCLIENT,
      payload: res.data
   })
   return res.data
}
export const PostClient = (data) => async (dispatch) => {
   const res = await axios.post(`${url}/client`, data, {
      headers: {
         Authorization: 'Bearer ' + token
      }
   })

   dispatch({
      type: ADDCLIENT,
      payload: res.data
   })
   return res.data
}
export const deleteClient = (id) => async (dispatch) => {

   const res = await axios.delete(`${url}/client/${id}`, {
      headers: {
         Authorization: 'Bearer ' + token
      }
   })

   dispatch({
      type: DELETECLIENT,
      payload: res.data
   })
   return res.data
}