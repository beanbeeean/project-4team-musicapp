import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/sign_in.module.css";

const SIGN_IN_BUTTON = "1";

const SignIn = ({ login }) => {
  const [m_id, setM_id] = useState("");
  const [m_pw, setM_pw] = useState("");

  useEffect(() => {
    console.log("[SignIn] useEffect() CALLED!!");
  });

  const navigate = useNavigate();

  // Handler START

  const loginBtnHandler = () => {
    let chk = JSON.parse(window.localStorage.getItem(m_id))[0];

    if (chk !== null && m_pw === chk.m_pw) {
      console.log(m_id);
      window.localStorage.setItem("session", m_id);
      alert("로그인 되었습니다!!");
      login.current = window.localStorage.getItem("session");
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호를 확인하세요!!");
    }
  };
  // Handler END

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
          onClick={loginBtnHandler}
        />
        <div className={styles.go_sign_up}>
          아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
