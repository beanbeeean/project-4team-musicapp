import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./css/sign_in.module.css";

const SIGN_IN_BUTTON = "1";

const SignIn = ({ memberDB, signInedMember, setLoginedSession }) => {
  const [m_id, setM_id] = useState("");
  const [m_pw, setM_pw] = useState("");

  useEffect(() => {
    console.log("[SignIn] useEffect() CALLED!!");
  });

  const navigate = useNavigate();

  // Handler START
  const btnClickedHandler = (e) => {
    console.log("[SignIn] btnClickedHandler() CALLED!!");

    switch (e.target.name) {
      case SIGN_IN_BUTTON:
        console.log("[SignIn] SIGN_IN_BUTTON CLICKED!!");

        if (memberDB.has(m_id) && memberDB.get(m_id).m_pw === m_pw) {
          console.log("[SignIn] SIGN-IN SUCCESS!!");

          alert("SIGN-IN SUCCESS!!");

          signInedMember.current = m_id;
          setLoginedSession();

          navigate("/");
        } else {
          console.log("[SignIn] SIGN-IN FAIL!!");

          setM_id("");
          setM_pw("");

          alert("SIGN-IN FAIL!!");
        }

        break;
    }
  };
  // Handler END

  // Validate START
  const ValidateUserInputData = () => {
    console.log("[SignIn] ValidateUserInputData() CALLED!!");

    let result = true;

    if (m_id === "") {
      alert("Input member ID!!");
      result = false;
    } else if (m_pw === "") {
      alert("Input member PW!!");
      result = false;
    }

    return result;
  };
  // Validate END

  return (
    <section>
      <h4>로그인</h4>
      <div className={styles.section_wrap}>
        <div className={styles.title}>
          아이디&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="m_id"
            placeholder="Input ID"
            value={m_id}
            onChange={(e) => setM_id(e.target.value)}
          />
          {/* </div> */}
          <br />
          {/* <div className={styles.title}> */}
          비밀번호
          <input
            type="password"
            name="m_pw"
            placeholder="Input Password"
            value={m_pw}
            onChange={(e) => setM_pw(e.target.value)}
          />
        </div>
        <br />
        <input
          type="button"
          value="SIGN IN"
          name={SIGN_IN_BUTTON}
          onClick={btnClickedHandler}
        />
        <div className={styles.go_sign_up}>
          아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
