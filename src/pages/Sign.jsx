import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

const Sign = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />} /> */}
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
};

export default Sign;
