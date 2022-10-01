import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Clientofproject from '../Project/Clientofproject'
import NavofProject from '../Project/NavofProject'
import Taskmanage from '../Task/TaskManager'
import MainHome from '../Homepage/MainHome';
import Prices from '../Homepage/prices/Prices';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainHome/>}></Route>
        <Route path="/pricing" element={<Prices/>}></Route>

        <Route path="/project" element={<NavofProject/>}/>
        <Route path="/client" element={<Clientofproject/>}/>
        <Route  path="/timer" element={<Taskmanage/>}/>
    </Routes>
  )
}

export default AllRoutes