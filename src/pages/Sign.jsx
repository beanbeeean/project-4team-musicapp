import React, { useState } from "react";
import SignIn from "../sign_components/SignIn";
import SignUp from "../sign_components/SignUp";
import { Container } from "react-bootstrap";

const Sign = ({login}) => {
  const [option, setOption] = useState(0);
  if (option == 0) {
    return (
      <Container>
        <SignIn setOption={setOption} login={login}/>
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
