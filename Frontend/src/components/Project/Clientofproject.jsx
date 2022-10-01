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

const Clientofproject = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  return (
    <Box>
    <Box>
        <Sidebar />
        <Flex w="100%" margin="auto" justifyContent="space-between" bgColor="whiteAlpha.300">
            <Box p='4'  >
                Clients
            </Box>
            <Spacer />
            <Box p='4' >
                <Button onClick={onOpen} bgColor="#dd6fd1" color="white">+ New Client</Button>
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
                                <FormLabel>Name  of client</FormLabel>
                                <Input ref={initialRef} placeholder='Nameof Client' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Flex>
    </Box>
</Box>
  )
}

export default Clientofproject