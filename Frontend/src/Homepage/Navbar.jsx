import React, { useState } from "react";
import style from "./navbar.module.css";
import Product from "./Product";
import Track from "./Track";
import Career from "./Career";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from './check_res/Nav'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import {ChevronRightIcon } from '@chakra-ui/icons'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate=useNavigate();

  var token=localStorage.getItem("token")
   console.log(token);

  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate("/")
    }
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  return (
    <>
    <Nav >
    
    <div
      className={style.navbar_main}
      
      style={
        nav === true
          ? { backgroundColor: "#FCE5D8", color: "black"}
          : { backgroundColor: "rgb(44, 19, 56)" }
      }
    >
      <div className={style.navbar_main1} style ={{marginRight:"10%"}} >
        <div className={style.navbar_sub2}  >
          <NavLink to ="/">
            <RouterLink to={"/"} >
              <h1
              style={{
                width:"10rem",
                fontSize: "28px",
                margin: "0px 10px",
                color: "#e57cd8",
                fontWeight: "700",
                border:"1px solid black"
              }}
            >
              toggl track
            </h1>
            </RouterLink>
          </NavLink>

          <Bars onClick={onOpen} />
          {/* Drawer */}

          <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
              <DrawerContent backgroundColor={"#FCE5D8"}>
                <DrawerHeader borderBottom='1px solid grey'>
                  <h1
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                      color: "#e57cd8",
                      fontWeight: "700",
                    }}
                  >
                    toggl track
                  </h1>
                  </DrawerHeader>
                <DrawerBody padding={"20px"}>
                  <p style={{padding:"10px 0px 10px 10px"}}>Products <ChevronRightIcon/></p>
                  
                  <p style={{padding:"10px 0px 10px 10px"}}>Pricing </p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Why Track? <ChevronRightIcon/></p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Careers <ChevronRightIcon/></p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Book a Demo </p>
                  
                  <div>
                    <button>Try for free</button>
                  </div>
                </DrawerBody>
              </DrawerContent>
        </Drawer>

          {/* Drawer Ends */}

          <NavMenu >
          

          <Accordion
            allowToggle
            display="flex"
            
            style={
              
              nav === false
                ? { borderTop: "0px solid #FCE5D8" }
                : { borderTop: "0px solid rgb(44, 19, 56)" }
            }
            className={style.toogle1} >

            <NavLink to = "/produts">
          
            <AccordionItem style={{border:"none"}}>
              <h2 >
                <AccordionButton
                  background="rgb(44, 19, 56) "
                  border="#412a4c "
                  
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                    
                  >
                    Product
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div >
                  <Product />
                </div>
              </AccordionPanel>
            </AccordionItem>
            </NavLink>

            <NavLink to = "/Prices">         
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <RouterLink to={"/Prices"}>
                    <Box
                      flex="1"
                      lineHeight="30px"
                      fontSize="15px"
                      style={
                        nav === true
                          ? { backgroundColor: "#FCE5D8", color: "black" }
                          : null
                      }
                      background="rgb(44, 19, 56); "
                      color="#ece1d7"
                    >
                      Pricing
                    </Box>
                  </RouterLink>
                </AccordionButton>
              </h2>
            </AccordionItem >
            </NavLink>
            
            <NavLink to = "/track">
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    WhyTrack
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div className={style.navbar_track}>
                  <Track />
                </div>
              </AccordionPanel>
            </AccordionItem>
            </NavLink>

            <div className={style.line}></div>
            <NavLink to = "/career">
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    textAlign="left"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    Careers
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div className={style.navbar_careers}>
                  <Career />
                </div>
              </AccordionPanel>
            </AccordionItem>
            </NavLink>


            <div className={style.line}></div>
          </Accordion>
          </NavMenu>

        
        </div> 
      </div>
  

      <NavBtn >
          <NavLink to = "/BookDemo">
                      Book a demo   
                      </NavLink>
                      
                      {
                      token?
                      <NavLink to="/">
                       <Button color="black" onClick={handleLogout}>Logout</Button>  
                      </NavLink>
                      
                        :
                        <NavLink to = "/login">
                       <RouterLink to="/login"><Button color="black">Login</Button></RouterLink>  
                      </NavLink>
                      
                      
                      }
            <NavBtnLink to="/signup">
                Try for free
            </NavBtnLink>
      </NavBtn> 
    </div>
    
    </Nav>

    </>
  );
};

export default Navbar;