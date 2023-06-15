import React, { useState } from "react";
import SignIn from "../sign_components/SignIn";
import SignUp from "../sign_components/SignUp";
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
