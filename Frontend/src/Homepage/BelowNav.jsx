import { Box, Heading,Text,Stack } from "@chakra-ui/react";
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";

const BelowNav = () => {
  return (
    
    <Box bg={"#2C1338"}  border={"1px solid red"}>
      <Heading maxWidth={["65%"]} fontSize={"60px"} fontFamily={["GT Haptik Medium","sans-serif"]} 
      wordBreak={"break-word"}>
        {" "}
        <Text color={"white"} textAlign={"justify"} marginLeft={"10%"} paddingTop={"5%"}>
          Simple time tracking to save{" "}
          you, 
          <span style={{ color: "rgb(229, 124, 216)" }}>
            <i>time</i>
          </span>{" "}
          and
          <span style={{ color: "rgb(229, 124, 216)" }}>
            <i> money.</i>
          </span>{" "}
        </Text>
    </Heading>
   
      <Stack direction={{lg:"row",md:"column",base:"column"}}  >
        <Box> <Signup /></Box>
      
     <Box border={"1px solid red"}>  
      <Timer />
     </Box>
   
      </Stack>
      </Box>
  );
};

export default BelowNav;
