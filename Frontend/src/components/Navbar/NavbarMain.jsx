import { Box, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { useScreenWidth } from "../hooks/useScreenWidth";

export default function NavbarMain() {
  const { screen } = useScreenWidth();
  return (
    <div style={{ position: "relative", top: "0", width: "100%" }}>
      <Box>
        <Box
          as="header"
          bg={
            screen > 800 ? mode("#2c1438", "white") : mode("#fce4d8", "black")
          }
        >
          <Box
            as="nav"
            aria-label="Main navigation"
            mx="auto"
            position="relative"
            zIndex="10"
            px={{
              base: "6",
              md: "8",
            }}
          >
            <>{screen > 900 ? <NavContent.Desktop /> : <NavContent.Mobile />}</>
          </Box>
        </Box>
      </Box>
    </div>
  );
}