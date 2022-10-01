import React from 'react'
import {Box,Text,Stack,Button} from "@chakra-ui/react";
import timesheet from "./Images/timesheet.png";

const TimeTaking = () => {
  return (
    <>
     <Box bg='#fef6f3' border='1px solid red' p='5rem'>
        
        <Box>
        <Text as='b' mt={'2rem'} fontSize={{ base: '24px', md: '30px', lg: '38px' }}>Time tracking for all your productivity and</Text>
        <br></br>
        <Text as='b' mb={'2rem'} fontSize={{ base: '24px', md: '30px', lg: '38px' }}>profitability needs</Text>
         </Box>
        <Stack direction={{base:"column",md:"row",lg:"row"}} spacing={8} ml={['2rem']} p={10}
           marginBottom={["30px"]}  justifyContent={["center"]} >
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>Employee Time Tracking</Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>Billing & invoicing</Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>Project budgeting</Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>Reporting</Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>Payroll</Button>

        </Stack>

         <div styles={{border:'1px solid red', width:"100%"}}>
            <img src='./Images/timesheet.png' alt=''></img>
         </div>
     </Box>

    </>
  )
}

export default TimeTaking