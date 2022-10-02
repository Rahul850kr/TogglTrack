import React from 'react'
import {Navigate, useNavigate} from "react-router-dom";
const PrivateRoute = ({children}) => {
    
    const token=localStorage.getItem('token') 
    console.log(token)
if(!token){
    return  <Navigate to="/login"></Navigate>
   
}
else{
    return children
}

}

export default PrivateRoute