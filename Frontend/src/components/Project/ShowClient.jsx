import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Box
  } from '@chakra-ui/react'
  import {GoKebabVertical} from "react-icons/go"
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
  import { deleteClient, getClient, PostClient } from '../../Redux/AppReducer/action'
  import { useDispatch, useSelector } from 'react-redux'
  import { useEffect } from 'react'
const ShowClient = () => {
    const client =useSelector((state) => state.AppReducer.client)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getClient())
    },[])

    const handleDelete=(id)=>{
        dispatch(deleteClient(id)).then(()=>dispatch(getClient()))
   }




  return (
    <Box>
    <TableContainer>
  <Table variant='simple' marginLeft="300px" w="78%">
    <TableCaption>List of Client</TableCaption>
    <Thead>
      <Tr>
        <Th>Name of Client</Th>
        <Th >Name of user</Th>
      </Tr>
    </Thead>
    <Tbody>
     
        {client.map((e)=>(
             <Tr>
             <Td>{e.name}</Td>
              <Td>{e.clientofuser.name}</Td>
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

export default ShowClient