import { Box } from '@chakra-ui/react'
import React from 'react'
import {GoKebabVertical} from "react-icons/go"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import { DeleteProject, getProject } from '../../Redux/AppReducer/action'
import { useDispatch, useSelector } from 'react-redux'

const ShowProject = () => {
    const dispatch = useDispatch()
    const data =useSelector((state) => state.AppReducer.data)
    // console.log(data)
    useEffect(()=>{
       dispatch(getProject())
    },[])


    const handleDelete=(id)=>{
         dispatch(DeleteProject(id)).then(()=>dispatch(getProject()))
    }




  return (
   <Box>
    <TableContainer>
  <Table variant='simple' marginLeft="300px" w="78%">
    <TableCaption>ALL Your Projects Are Mentioned Above</TableCaption>
    <Thead>
      <Tr>
        <Th>Project</Th>
        <Th >Template</Th>
        <Th >Client</Th>
      </Tr>
    </Thead>
    <Tbody>
     
        {data?.map((e,i)=>(
             <Tr key={i}>
             <Td>{e.NAME}</Td>
             <Td>{e.TEMPLATE}</Td>
             <Td>{e.Client?.name}</Td>
             <Td>
             <Menu>
  <MenuButton

    px={4}
    py={2}
    transition='all 0.2s'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
  ><GoKebabVertical/></MenuButton>
  <MenuList>
    <MenuItem onClick={()=>handleDelete(e._id)}>Delete</MenuItem>
    <MenuItem>Update</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
             
             </Td>
             </Tr>
        ))}
     
    
    </Tbody>
    
  </Table>
</TableContainer>
   </Box>
  )
}

export default ShowProject