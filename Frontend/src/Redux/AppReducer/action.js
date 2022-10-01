import axios from "axios"
import { ADDCLIENT, ADDPROJECT, DELETECLIENT, DELETEPROJECT, GETCLIENT, GETPROJECT } from "./actionTypes"

const url = "http://localhost:8080"

export const getProject =()=>async(dispatch)=>{
  
   const res= await axios.get(`${url}/task/todo`,{
    headers: {
                Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3YzJiMmQ3YWNlOGFmY2Q2NWQwOGIiLCJpYXQiOjE2NjQ1OTg3MTh9.SO6LTsOIFqozL3WKlCDXzkBz5m1XJtx5rYtUUCdhcFs"
               }
   })
 
   dispatch({
      type: GETPROJECT,
      payload: res.data}) 
      return res.data   
}

export const PostProject =(data)=>async(dispatch)=>{
    try{
        const headers = {
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3YzJiMmQ3YWNlOGFmY2Q2NWQwOGIiLCJpYXQiOjE2NjQ1OTg3MTh9.SO6LTsOIFqozL3WKlCDXzkBz5m1XJtx5rYtUUCdhcFs"
          }
        const res= await axios.post(`${url}/task/todo`,data,{headers:headers})

        dispatch({type: ADDPROJECT,payload: res.data}) 
           return res.data   
    }catch(e){
        console.log(e.message)
    }
 
 }

 export const DeleteProject =(id)=>async(dispatch)=>{
    try{
        const headers = {
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3YzJiMmQ3YWNlOGFmY2Q2NWQwOGIiLCJpYXQiOjE2NjQ1OTg3MTh9.SO6LTsOIFqozL3WKlCDXzkBz5m1XJtx5rYtUUCdhcFs"
          }
        const res= await axios.delete(`${url}/task/todo/${id}`,{headers:headers})

        dispatch({type: DELETEPROJECT,payload: res.data}) 
           return res.data   
    }catch(e){
        console.log(e.message)
    }
 
 } 


 export const getClient=()=>async(dispatch)=>{
    const res= await axios.get(`${url}/client`,{
     headers: {
                 Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3YzJiMmQ3YWNlOGFmY2Q2NWQwOGIiLCJpYXQiOjE2NjQ1OTg3MTh9.SO6LTsOIFqozL3WKlCDXzkBz5m1XJtx5rYtUUCdhcFs"
                }
    })
   
    dispatch({
       type: GETCLIENT,
       payload: res.data}) 
       return res.data   
 }
 export const PostClient=(data)=>async(dispatch)=>{
    const res= await axios.post(`${url}/client`,data,{
     headers: {
                 Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3YzJiMmQ3YWNlOGFmY2Q2NWQwOGIiLCJpYXQiOjE2NjQ1OTg3MTh9.SO6LTsOIFqozL3WKlCDXzkBz5m1XJtx5rYtUUCdhcFs"
                }
    })

    dispatch({
       type: ADDCLIENT,
       payload: res.data}) 
       return res.data   
 }
 export const deleteClient=(id)=>async(dispatch)=>{
  
    const res= await axios.delete(`${url}/client/${id}`,{
     headers: {
                 Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3YzJiMmQ3YWNlOGFmY2Q2NWQwOGIiLCJpYXQiOjE2NjQ1OTg3MTh9.SO6LTsOIFqozL3WKlCDXzkBz5m1XJtx5rYtUUCdhcFs"
                }
    })
   
    dispatch({
       type: DELETECLIENT,
       payload: res.data}) 
       return res.data   
 }