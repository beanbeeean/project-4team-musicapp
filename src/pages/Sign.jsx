import React, { useState } from "react";
import SignIn from "../sign_components/SignIn";
import SignUp from "../sign_components/SignUp";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const Sign = () => {
  const [option, setOption] = useState(0);
  if (option == 0) {
    return (
      <Container>
        <SignIn setOption={setOption}/>
      </Container>
    );
  } else if (option == 1) {
    return (
      <Container>
        <SignUp setOption={setOption}/>
      </Container>
    );
  } 
};

export default Sign;
