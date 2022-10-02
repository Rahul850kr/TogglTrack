import { Box, Flex, Icon, Input, Button, Text } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { BsCurrencyDollar, BsFillPauseCircleFill, BsFillPauseFill, BsPlayCircleFill, BsTagFill } from "react-icons/bs";
import StopWatch from "./hook/timerHook";

import React from 'react'
import { FormControl, FormLabel, Select, Spacer, Stack, Switch, useDisclosure } from '@chakra-ui/react'
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
import { useDispatch, useSelector } from "react-redux"
import { getClient, getProject, PostProject } from '../../Redux/AppReducer/action'
import { useEffect } from 'react'
// import ShowProject from './ShowProject'



export default function TimerHeader() {
    return (
        <Flex ml='-2' boxShadow='lg' bg='white' verticalAlign={"center"} >
            <Input p='6' fontWeight={"bold"} color="black" fontSize={"md"} w='70%' variant={'unstyled'} placeholder="What are you working on?" />
            <Flex justifyContent={"center"} verticalAlign={"center"} mt='7'>
                <NewProject />
                <Icon as={BsTagFill} mt='1' fontSize={"20px"} color="gray" />
                <Box ml='3'></Box>
                <Icon as={BsCurrencyDollar} mt='1' fontSize={"20px"} color="gray" />
                <Box ml='5'></Box>

                <StopWatch />

                <Box ml='5'></Box>

            </Flex>
        </Flex>
    )
}


//  Model to add project --- 
function NewProject() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();

    const client = useSelector((state) => state.AppReducer.client)
    const [datas, setdatas] = useState({
        NAME: "",
        TEMPLATE: "",
        Client: "",
        VISIBILITY: false
    })

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target
        value = type === "checkbox" ? checked : value;
        setdatas((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = () => {

        const { NAME, TEMPLATE, VISIBILITY, Client } = datas
        dispatch(PostProject({ NAME, TEMPLATE, VISIBILITY, Client }))
        dispatch(getProject())
    }
    useEffect(() => {
        dispatch(getClient())
        dispatch(getProject())
    }, [])

     const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Box  >
            <Button bgColor={"white"} mt="-2" mr='3' onClick={onOpen}>
                <AddIcon mr='4' color="pink" fontSize='xs' />
                <Text fontSize='sm'>Create a project</Text>
            </Button>
            {/* <Button onClick={onOpen} bgColor="#dd6fd1" color="white">+ New Project</Button> */}
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
                            <Input ref={initialRef} placeholder='Project Name' name="NAME" onChange={handleChange} value={datas.NAME} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Client</FormLabel>

                            <Select placeholder='Select option' value={datas.Client} onChange={handleChange} name="Client">
                                {client?.map((e) => (
                                    <option key={e._id} value={e._id}>{e.name}</option>
                                ))}

                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>TEMPLATE</FormLabel>
                            <Input placeholder='Add Template' onChange={handleChange} value={datas.TEMPLATE} name="TEMPLATE" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>VISIBILITY</FormLabel>
                            <Stack align='center' direction='row'>
                                <Switch size='sm' type="checked" onChange={handleChange} name="VISIBILITY" />
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
    )
}

{/* <button style={{ marginTop: "-23px", marginLeft: "30px" }} data-dom-element-id="timer-button" data-heap-id="start-te-timer-mode" tabIndex="0">
<svg xmlns="http://www.w3.org/2000/svg"
    width="36" height="36" viewBox="0 0 36 36"><g fill="none" fillRule="evenodd"><rect width="36"
        height="36" fill="#D164C5" rx="18"></rect><path fill="#FEFEFF"
            d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z">
        </path></g></svg><span></span></button>

<div style={{ marginLeft: "35px", marginTop: "-6px", marginRight: "10px" }}><div ><svg xmlns="http://www.w3.org/2000/svg"
width="16" height="16" viewBox="0 0 36 36"><g fill="none" fillRule="evenodd">
    <rect width="36" height="36" fill="#2C1338" rx="18"></rect><path fill="#f3f3f3"
        d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z">
    </path></g></svg></div><div tabIndex="0" >

    <div style={{ marginBottom: "5px" }}></div>

    <BsFillPauseCircleFill /></div></div> */}