import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import "./Navbar.scss";
import { BsBell } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-around"
        wrap="wrap"
        w="100%"
        margin="auto"
        p={2}
        bg="white"
        color="black"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
        pos={["static", "static", "fixed"]}
        top="0"
        zIndex="100"
      >
        <div className="logo">
          <img src="assets/images/logo.png" alt="" />
        </div>
        <Box>
          <InputGroup>
            <Input
              placeholder="Search"
              size="lg"
              w="400px"
              h="45px"
              border=" 2px solid #A62D2D"
              s
              outline="none"
              _focus={{ border: "2px solid #A62D2D" }}
              _focusVisible={{ border: "2px solid #A62D2D" }}
              _placeholder={{ color: "#A62D2D" }}
            />
            <InputRightElement pointerEvents="none" marginRight="10px">
              <AiOutlineSearch size="35px" color="#A62D2D" />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Flex gap={12}>
            <BsBell size="35px" color="#A62D2D" />
            <AiOutlineMessage size="35px" color="#A62D2D" />
            <CgProfile size="35px" color="#A62D2D" />
            <MdDarkMode size="35px" color="#000000" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
