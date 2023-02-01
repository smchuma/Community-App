import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../Login/Login.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img src="assets/images/logo.png" alt="logo" />
        </div>
      </div>
      <div className="right">
        <div
          className="title"
          style={{
            marginTop: "80px",
          }}
        >
          <h1>The EGF Scholar Platform</h1>
          <h2>Create an account</h2>
        </div>
        <div className="form">
          <Stack gap="15px">
            <FormControl id="first-name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="input"
              />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="input"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="input"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => {}}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirm-password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="input"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => {}}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              className="btn"
              width="100%"
              style={{
                marginTop: "20px",
                backgroundColor: "#BE5529",
                color: "white",
                fontWeight: "400",
              }}
              onClick={handleSubmit}
              isLoading={loading}
            >
              Sign Up
            </Button>
            <Box>
              <Link to="/">
                <Text
                  cursor="pointer"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Click to Login
                </Text>
              </Link>
            </Box>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
