import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./Components";
import { Home } from "./Pages";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
