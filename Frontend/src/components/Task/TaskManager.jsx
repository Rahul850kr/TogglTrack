import { Box } from '@chakra-ui/react'
import React from 'react'
import Calenders from './calender'

import Sidebar from './sideBar'

const Taskmanage= () => {
  return (
   <Box display="flex" flexDirection="row" >
    <Box w="20%"> <Sidebar /></Box>
    <Box  w="80%"> <Calenders /></Box>
   
   </Box>
  )
    
  
}

export default Taskmanage