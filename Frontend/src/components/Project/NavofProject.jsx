import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Spacer, Stack, Switch, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../Task/sideBar'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getClient, getProject, PostProject } from '../../Redux/AppReducer/action'
import { useEffect } from 'react'
import ShowProject from './ShowProject'

const NavofProject = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
  
    const client =useSelector((state) => state.AppReducer.client)
    const data =useSelector((state) => state.AppReducer.data)
    const [datas,setdatas] = useState({
        NAME:"",
        TEMPLATE:"",
        Client:"",
        VISIBILITY:false
    })
 
    const handleChange =(e)=>{
       let {name,value,checked,type} =e.target
        value = type === "checkbox" ? checked : value;
        setdatas((prev) => ({ ...prev, [name]: value }))
    }

    // console.log(data)
   
    const handleSave =()=>{
      
    const {NAME,TEMPLATE,VISIBILITY,Client} = datas
    dispatch(PostProject({NAME,TEMPLATE,VISIBILITY,Client})).then(()=> dispatch(getProject())).then(()=>onClose())
   
    
    }
    useEffect(()=>{
        dispatch(getClient())
        dispatch(getProject())
    },[])
    
 

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Box >
            <Box>
                <Sidebar />
              
                <Flex w="70%" margin="auto" justifyContent="space-between" bgColor="whiteAlpha.300">
                    <Box p='4'  >
                        Projects
                    </Box>
                    <Spacer />
                    <Box p='4' >
                        <Button onClick={onOpen} bgColor="#dd6fd1" color="white">+ New Project</Button>


                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Create your project</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input ref={initialRef} placeholder='Project Name' name="NAME" onChange={handleChange} value={datas.NAME}/>
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Client</FormLabel>
                                      
                                        <Select placeholder='Select option' value={datas.Client} onChange={handleChange} name="Client">
                                            {client?.map((e)=>(
                                                <option key={e._id} value={e._id}>{e.name}</option>
                                            ))}
                    
                                        </Select>
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>TEMPLATE</FormLabel>
                                        <Input placeholder='Add Template' onChange={handleChange} value={datas.TEMPLATE} name="TEMPLATE"/>
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>VISIBILITY</FormLabel>
                                        <Stack align='center' direction='row'>
                                           <Switch size='sm' type="checked" onChange={handleChange} name="VISIBILITY"/>
                                         </Stack>
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSave}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Flex>
                <ShowProject />
            </Box>
          
        </Box>
    )
}

export default NavofProject