import { Box, Heading,Text,Stack,Image} from "@chakra-ui/react";
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";

const BelowNav = () => {
  return (
    
    <Box bg={"#2C1338"}  >
      <Heading maxWidth={["65%"]} fontSize={"60px"} fontFamily={["GT Haptik Medium","sans-serif"]} 
      wordBreak={"break-word"}>
        {" "}
        <Text color={"white"} textAlign={"justify"} marginLeft={"10%"} paddingTop={"5%"}>
          Simple time tracking to save{" "}
          you, 
          <span style={{ color: "rgb(229, 124, 216)",fontStyle: 'italic', fontFamily:'GT Haptik Medium Rotalic' }}>
            <Text as='em'> time</Text>
          </span>{" "}
          and
          <span style={{ color: "rgb(229, 124, 216)",fontFamily:'GT Haptik Medium Rotalic' }} >
            <Text as='em'> money.</Text>
          </span>{" "}
        </Text>
    </Heading>
   
      <Stack direction={{lg:"row",md:"column",base:"column"}}>
        <Box> <Signup /></Box>
        <Box > <Timer /> </Box>
      </Stack>
      
       <Stack direction={['column', 'row']} ml={16} >
       <Text as='b' fontSize={{ base: '12px', md: '18px', lg: '18px' }} 
        color='#fff'>TRUSTED BY OVER 6 MILLION USERS ACROSS 120 COUNTRIES</Text>
       </Stack>
      
      <Stack direction={['column', 'row']} ml={[16]} mt={'1rem'} >
        
        <Box w={[300, 800, 900]} h="5rem">
            <Image 
            src='https://public-assets.toggl.com/b/static/21b44745982a70f8f66a90507e5f6ee1/66a3b/brands-mixed-desktop-light.avif'
             alt=''></Image>
        </Box>
      </Stack>
      </Box>
  );
};

export default BelowNav;
