import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../../comp/Login'
import Signup from '../../comp/Signup'
// import MainHome from '../../Homepage/MainHome'
import Clientofproject from '../Project/Clientofproject'
import NavofProject from '../Project/NavofProject'
import Taskmanage from '../Task/TaskManager'
import MainHome from '../Homepage/MainHome';
import PrivateRoute from "./PrivateRoute"

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MainHome/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element= {<Signup/>} />
        <Route path="/project" element={<NavofProject/>}/>
        <Route path="/client" element={<Clientofproject/>}/>
        <Route  path="/timer" element={ <PrivateRoute ><Taskmanage/></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes