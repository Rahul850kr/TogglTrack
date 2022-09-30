import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { BsApple, BsGoogle } from "react-icons/bs";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading,setIsloading] = useState(false)
  const toast = useToast()
  
 const nav =useNavigate()
  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
      setPassword(e.target.value)
  }

  const handleSubmit = async () => {
      const payload = {
          email,
          password
      }
       await fetch("https://desolate-temple-28731.herokuapp.com/user/signup"  
       , {
          method : "POST",
          body : JSON.stringify(payload),
          headers: {
              'Content-Type': 'application/json'   
            },
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
         if(res.message === "required fields are email,password")
         {
          toast({
            title: 'Please fill the details.',
            description: "Input Feilds are required .",
            status: 'error',
            duration: 1500,
            isClosable: true,
            position:"top"
          })
         }
        else if (res.message === "Register Successfull")
        {
          toast({
            title: 'Account created.',
            description: "We've created your account for you. Please Login",
            status: 'success',
            duration: 2500,
            isClosable: true,
            position:"top"
          })
          setTimeout(()=>{ nav("/login",{replace:true})},1000)
        }
      })
      
     
  }

  return (
    <Box bg={"rgb(44, 19, 56)"} color={"white"} maxWidth={"100%"} mr={"10rem"} border={"1px solid white"}>

      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6} >
      <Stack pt={6}>
              <Text p={"0px"} align={'justify'} fontSize={"20"} marginRight={"40px"} ml={8}>
               Bill accurately, measure profitability,manage workloads-and spend less time on it all.
              </Text>
            </Stack>
        <Box  
          rounded={'lg'}
          bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
          p={8}>
          <Stack spacing={4} >
            
            <FormControl id="email" isRequired>
              <Input width={"100%"} type="email" placeholder="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" isRequired>
      
              <InputGroup>
                <Input  type={showPassword ? 'text' : 'password'}
                 placeholder="password" 
                 value={password}
                  onChange={handlePasswordChange}/>
                <InputRightElement h={'full'}>
                  <Button 
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            
            <Stack direction={['column','row']} pt={2} width={[100,200,490]}
            //  border={"1px solid red"}
             >
              <Button 
                loadingText="Submitting"
                borderRadius={[20,50]}
                size="lg"
                 width={[50,200,200]}
                 marginRight={"6%"}
                bg={'rgb(229, 124, 216)'}
                color={'white'}
                _hover={{bg: 'rgb(86, 66, 96)'}}
                onClick={()=>{setIsloading(true)
                         setTimeout(() => {
                         setIsloading(false)
                         handleSubmit()
                    },1000)  
                  }
                }
                isLoading={isLoading}
                >
                <Text fontSize={{ base: '4px', md: '16px', lg: '18px' }} >Sign up with email</Text>
              </Button>

             <Text fontSize={{ base: '8px', md: '16px', lg: '18px' }} py={2}>or signup with : </Text>
             <a href="/"> 
             <Button bg={'#2c1338'} border={["1px solid white"]} h={[5,14,14]}  borderRadius={[50,100,100]}>
              <BsGoogle size={[20]} _hover={{bg:"#2c1338"}}/>
              </Button></a>
              <a href="/">
              <Button bg={'#2c1338'} border={["1px solid white"]} h={[5,14,14]} borderRadius={[50,100,100]} >
              <BsApple size={[20]} _hover={{bg:"#2c1338"}}/>
              </Button>
              </a>
            </Stack>
            
            <Stack pt={6}>
              <Text align={'justify'} fontSize={{ base: '6px', md: '12px', lg: '12px' }}>
              By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
     
   
   </Box>
  );
}