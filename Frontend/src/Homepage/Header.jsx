import React from 'react'
import {Box,Flex,Stack,Text,Image} from "@chakra-ui/react"

const Header = () => {
  return (
    <>
    <Stack direction={['column', 'row']} h={[400]}
     spacing='24px' border={"1px solid red"} bg='rgb(252, 229, 216)'>
   <Box border="1px solid yellow" w={500} h={'30px'}>

   </Box>
   <Box border="1px solid yellow" w={500} h={'30px'}></Box>
    <Flex border={"1px solid black"} h={[350]} ml={[6]} w={[900]}>
      <Box height={[360]} width='50%' border={"1px solid red"}>
      <Text as='b' alignItems='left' justifyContent={'left'} fontSize={16} color='#817187' py={50}>FOR EVERY NEED</Text>    
        
        <Flex>
          <Image mr={[5]} w={'4rem'}
           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI0RENkZEMSIgZD0iTTAgMGgyMi44M3YyMi44M0gweiIvPjxwYXRoIGZpbGw9IiM0MTJBNEMiIGQ9Ik0yNi45ODEgNS4xODloMjIuODN2MjIuODNoLTIyLjgzek0wIDI2Ljk4aDIyLjgzdjIyLjgzSDB6Ii8+PHBhdGggZmlsbD0iI0RENkZEMSIgZD0iTTI2Ljk4MSAzMi4xN2gyMi44M1Y1NWgtMjIuODN6Ii8+PC9zdmc+" 
          alt=""></Image>
          <Box w={300}>
            <Text>Key Features</Text>
            <Text>View features by need, from time tracking to project annd team
              management</Text>
          </Box>
        </Flex>
      </Box>

      <Box height={[360]} width='50%' border={"1px solid red"}></Box>

      <Box></Box>
    </Flex>

    <Box  border={"1px solid pink"} w={[400]} h={[100]}></Box>
    
    </Stack>
    </>
  )
}

export default Header