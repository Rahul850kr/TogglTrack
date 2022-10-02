import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../../comp/Login'
import Signup from '../../comp/Signup'
// import MainHome from '../../Homepage/MainHome'
import Clientofproject from '../Project/Clientofproject'
import NavofProject from '../Project/NavofProject'
import Taskmanage from '../Task/TaskManager'
import MainHome from '../Homepage/MainHome';
import BillingInvoicing from '../Billing-invoicing/Billing'
import Reporting from '../ReportingAndTrans/Reporting'
import EmployeeTime from '../Employe-time/EmployeeTime'
import ProjectBudget from '../Project_Budget/ProjectsBudget'
import Payroll from '../Payroll/Payroll'


const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MainHome/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element= {<Signup/>} />
        <Route path="/project" element={<NavofProject/>}/>
        <Route path="/client" element={<Clientofproject/>}/>
        <Route  path="/timer" element={<Taskmanage/>}/>
    </Routes>
  )
}

export default AllRoutes


//"react-remove-scroll": "^2.5.4"