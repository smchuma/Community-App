import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./Components";
import { NewsFeed } from "./Pages";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<NewsFeed />} />
      </Routes>
    </>
  );
};

export default App;
