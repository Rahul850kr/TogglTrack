import React from 'react'
import {Box,Text,Stack,Button,Image,Wrap,WrapItem,Center} from "@chakra-ui/react";
import timesheet from "./Images/timesheet.png";
import user1 from "./Images/user1.PNG";
import user2 from "./Images/user2.PNG";
import user3 from "./Images/user3.PNG";
import user4 from "./Images/user4.PNG";
import user5 from "./Images/user5.PNG";
import user6 from "./Images/user6.PNG";
import user7 from "./Images/user7.PNG";
import user8 from "./Images/user8.PNG";
import user9 from "./Images/user9.PNG";

import {ChevronRightIcon} from "@chakra-ui/icons";


const TimeTaking = () => {
  return (
    <>
     <Box bg='#fef6f3' p='5rem' width={["100%"]}>        
        <Box>
        <Text as='b' mt={'2rem'} fontSize={{ base: '24px', md: '30px', lg: '38px' }}>Time tracking for all your productivity and</Text>
        <br></br>
        <Text as='b' mb={'2rem'} fontSize={{ base: '24px', md: '30px', lg: '38px' }}>profitability needs</Text>
         </Box>


        <Stack direction={{base:"column",md:"row",lg:"row"}} spacing={8} ml={['2rem']} p={10}
           marginBottom={["30px"]}  justifyContent={["center"]} >

          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
            <Text fontSize={{ base: '9px', md: '16px', lg: '16px' }}>Employee Time Tracking</Text>
          </Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
          <Text fontSize={{ base: '9px', md: '16px', lg: '16px' }}>Billing & invoicing</Text>
          </Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
          <Text fontSize={{ base: '10px', md: '16px', lg: '16px' }}>Project budgeting</Text>
          </Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
          <Text fontSize={{ base: '10px', md: '16px', lg: '16px' }}>Reporting</Text>
          </Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
          <Text fontSize={{ base: '10px', md: '16px', lg: '16px' }}>Payroll</Text>
          </Button>

        </Stack>

      
         <Box>
        <Wrap justify='center' spacing={4}>
            <WrapItem w={[400, 800, 1000]} >
              <Center><Image src={timesheet} alt="img"></Image></Center>
            </WrapItem>
            </Wrap>
        </Box>

     </Box>

       {/* Section */}

        <Box bg="#2c1338">
          <Text fontSize={{ base: '20px', md: '20px', lg: '40px' }} py={10} color='#fff'>Why do teams love Toggl Track?</Text>
          <Wrap justify='center' spacing={4}>
            <WrapItem w={[200, 500, 500]} >
              <Center><Image src={user1} alt="img"></Image></Center>
            </WrapItem>
            <WrapItem w={[200, 500, 500]} >
              <Center><Image src={user2} alt="img"></Image></Center>
            </WrapItem>  
            <WrapItem w={[200, 500, 500]} >
              <Center><Image src={user3} alt="img"></Image></Center>
            </WrapItem> 
             <WrapItem w={[200, 500, 500]} >
              <Center><Image src={user4} alt="img"></Image></Center>
            </WrapItem>
            <WrapItem w={[200, 500, 1000]}>
              <Center><Image src={user5} alt="img"></Image></Center>
            </WrapItem>
          </Wrap>

          <Text fontSize={{ base: '20px', md: '20px', lg: '32px' }} py={10} color='#fff'>
          Join 5 million users tracking their time to get results</Text>
          
          <Text fontSize={{ base: '20px', md: '20px', lg: '20px' }} color='#ab9593'>
          All plans come with a free, 30-day trial of Toggl Track Premium.Upgrade</Text>
          <Text fontSize={{ base: '20px', md: '20px', lg: '20px' }}  color='#ab9593'> 
           at the end of the trial or continue using Track for free.</Text>
          
          <Stack direction={{base:"column",md:"row",lg:"row"}} justify={['center']} mt={8}>
                <Button bg="#e57cd8" color='#fff' borderRadius={30} w={[200,200,200]}>
                <Text fontSize={{ base: '12px', md: '12px', lg: '16px' }}>
                 Starting tracking for free </Text>
                  </Button>
                <Button bg="#2c1338" color='#fff' borderRadius={30} w={[200,200,200]} > 
                <Text fontSize={{ base: '12px', md: '12px', lg: '16px' }}  py={2}
                color='#fff'>Or explore pricing plans <ChevronRightIcon/></Text>
               </Button>

          </Stack>
           
           <Box h={40}></Box>
         </Box>

         {/* Section */}

         <Box bg='#fdf1ec'>
          <br/>
          <br/>
          <br/>
          <Text as='b' justify='center' fontSize={{ base: '20px', md: '20px', lg: '40px' }} p={2} color='#412a4c'>
          Companies that use Toggl Track see</Text>
          <br></br>
          <Text as='b' justify='center' fontSize={{ base: '20px', md: '20px', lg: '38px' }}  color='#412a4c'>
          <i>results</i> in profit and productivity</Text>
        
        
          <Stack justify='center' direction={{base:"column",md:"row",lg:"row"}} spacing={4}>
            <Box w={[200, 300, 300]} >
                <Text color='#e57cd8' textAlign='left' as='b' fontSize={{ base: '10px', md: '20px', lg: '22px' }} >
                  20% increase in profitability</Text>
                <Text color='#7f7582' textAlign='left' fontSize={{ base: '12px', md: '20px', lg: '20px' }} ml={['8','0','0']}>
                  at sweat + Co PR agency, with accurate billable hours tracking</Text>
                <Button mt={6} w={[150,200,300]}  justifyContent='left'> 
                <Text fontSize="16px" py={2} color='#614471'> Read case study <ChevronRightIcon/></Text>
               </Button>
                <Box mt={['0','0','10']}>
                  <Image borderRadius={10} ml={['6','0','0']}  mt={['4','0','0']}
                  src="https://public-assets.toggl.com/b/static/688b536c11e2e2d366240687a2e83c1a/80f52/cs-team-sweatandco.avif"
                  alt=""/>
                </Box>
                <br/>
                <br/>
            </Box>

            <Box w={[200, 300, 300]} >
                <Text color='#e57cd8' as='b' textAlign='left' fontSize={{ base: '10px', md: '20px', lg: '22px' }} mr={4}>
                100%  time taking  adoption</Text>
                <Text color='#7f7582' textAlign='left' fontSize={{ base: '10px', md: '20px', lg: '20px' }} ml={['8','0','0']}>
                  at software consultancy Newlogic for accurate posting</Text>
                <Button mt={6} w={[150,200,300]}  justifyContent='left'> 
                <Text fontSize="16px" py={2} color='#614471'> Read case study <ChevronRightIcon/></Text>
                
               </Button>
                <Box mt={10}>
                  <Image borderRadius={10} ml={['6','0','0']}  mt={['4','0','0']}
                  src="https://public-assets.toggl.com/b/static/23cc7d4553237da72a6cd3f8f3aef5f5/80f52/cs-newlogic.avif"
                  alt=""/>
                </Box>
                <br/>
                <br/>
            </Box>

            <Box w={[200, 300, 300]} >
                <Text color='#e57cd8' as='b' fontSize={{ base: '10px', md: '20px', lg: '22px' }} textAlign='left' mr={4}>
                  40+ hours saved per week</Text>
                <Text color='#7f7582' noOfLines={2} textAlign='left' fontSize={{ base: '10px', md: '20px', lg: '20px' }} 
                  ml={['8','0','0']}>at Perception Engineering with simple, one click time tracking and invoicing</Text>
                <Button mt={6} w={[150,200,300]}  justifyContent='left'> 
                <Text fontSize="16px" py={2} color='#614471'> Read case study <ChevronRightIcon/></Text>
                
               </Button>
                <Box mt={10}>
                  <Image borderRadius={10} ml={['6','0','0']}  mt={['4','0','0']}
                  src="https://public-assets.toggl.com/b/static/52ecd2ee94b3c4b931b6cee0c7dab0e3/80f52/case-study-perception-engineering.avif"
                  alt=""/>
                </Box>
                <br/>
                <br/>
            </Box>
          </Stack>
        

        <Box>
        <Wrap justify='center' spacing={4}>
            <WrapItem w={[300, 500, 950]} >
              <Center><Image src={user6} alt="img"></Image></Center>
            </WrapItem>
            </Wrap>
        </Box>
          <br/>
          <br/>

         
         <Box bg='#fefbfa'>

          <Stack>
          <Text as='b' color='#2c1338' fontSize={{ base: '10px', md: '20px', lg: '38px' }} ml={['10','5','12rem']} 
          textAlign='left' mt='4%'>
            The right feature set for <i>every</i> team</Text>
          </Stack>

           
          <Stack direction={{base:"column",md:"row",lg:"row"}} spacing={8} ml={['2','5','10rem']} p={10}
           marginBottom={["30px"]}  justifyContent={["left"]} >
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
            <Text fontSize={{ base: '9px', md: '16px', lg: '16px' }}>Freelancers</Text>
          </Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
          <Text fontSize={{ base: '9px', md: '16px', lg: '16px' }}>Agencies & Professional Services</Text>
          </Button>
          <Button  bg='#ffebbd' color='#5f2a4c' borderRadius='30'>
          <Text fontSize={{ base: '10px', md: '16px', lg: '16px' }}>Enterprise teams</Text>
          </Button>
          </Stack>


          <Wrap justify='center' spacing={4}>
            <WrapItem w={[200, 500, 500]} >
              <Center><Image src={user8} alt="img"></Image></Center>
            </WrapItem>
            <WrapItem w={[200, 500, 500]} >
              <Center><Image src={user7} alt="img"></Image></Center>
            </WrapItem> 
          </Wrap>
          <br></br>
          <br></br>
          <br></br>
         </Box>
         
         <Box bg='#412a4c'>
         <br></br>
         <br></br>
        <Text fontSize={{ base: '24px', md: '30px', lg: '48px' }} color='#fff'>
          Switch to the time tracking tool </Text>
         <Text fontSize={{ base: '24px', md: '30px', lg: '48px' }} color='#fff'>
            <i>70,000+</i> teams across the world </Text> 
         <Text  fontSize={{ base: '24px', md: '30px', lg: '48px' }} color="#fff" mb={["20"]}> swear by</Text> 
         <Wrap justify='center' spacing={4}>
            <WrapItem w={[400, 800, 1000]} ml={['10','10','0']}>
              <Center><Image justify="center"
              src={user9} alt="img"></Image></Center>
            </WrapItem>
         </Wrap>
         <br></br>
         <br></br>
         <br></br>
         </Box>

         </Box>

    </>
  )
}

export default TimeTaking