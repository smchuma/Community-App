import {
  FormControl,
  FormLabel,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        <div className="title">
          <h1>The EGF Scholar Platform</h1>
          <h2>Welcome back</h2>
        </div>
        <div className="form">
          <Stack gap="15px">
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
              Login
            </Button>
            <Button
              style={{
                gap: "5px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <FcGoogle
                style={{
                  fontSize: "20px",
                }}
              />
              Google
            </Button>
            <Flex justifyContent="space-between">
              <Link to="/signup">
                <Text cursor="pointer">Create an account?</Text>
              </Link>
              <Text cursor="pointer">forgot Password</Text>
            </Flex>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Login;
