import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sign_up.module.css";
import Modal from "./Modal";

const SIGN_UP_BUTTON = "1";

const SignUp = ({ memberDB, airReservationDB }) => {
  const [m_id, setM_id] = useState("");
  const [m_pw, setM_pw] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [m_phone, setM_phone] = useState("");

  useEffect(() => {
    console.log("[UserSignUp] useEffect() CALLED!!");
  });

  const navigate = useNavigate();

  // Handler START
  const btnClickedHandler = (e) => {
    console.log("[UserSignUp] btnClickedHandler() CALLED!!");

    switch (e.target.name) {
      case SIGN_UP_BUTTON:
        console.log("[UserSignUp] SIGN_UP_BUTTON CLICKED!!");

        if (ValidateUserInputData()) {
          memberDB.set(m_id, {
            m_id: m_id,
            m_pw: m_pw,
            m_mail: m_mail,
            m_phone: m_phone,
          });
          console.log(memberDB);
          airReservationDB.set(m_id, []);
        }

        break;
    }
  };
  // Handler END

  // Validate START
  const ValidateUserInputData = () => {
    console.log("[UserSignUp] ValidateUserInputData() CALLED!!");

    let result = true;

    if (m_id === "") {
      alert("Input member ID!!");
      result = false;
    } else if (m_pw === "") {
      alert("Input member PW!!");
      result = false;
    } else if (m_mail === "") {
      alert("Input member MAIL!!");
      result = false;
    } else if (m_phone === "") {
      alert("Input member PHONE!!");
      result = false;
    }

    return result;
  };
  // Validate END

  return (  
    <section>
      <h4>정보 입력</h4>
      <div className={styles.section_wrap}>
        <div className={styles.title}>아이디</div>
        <input
          type="text"
          name="m_id"
          placeholder="Input ID"
          value={m_id}
          onChange={(e) => setM_id(e.target.value)}
        />
        <button>중복확인</button>
        <br />
        <div className={styles.title}>비밀번호</div>
        <input
          type="password"
          name="m_pw"
          placeholder="Input Password"
          value={m_pw}
          onChange={(e) => setM_pw(e.target.value)}
        />
        <br />
        <div className={styles.title}>이메일</div>
        <input
          type="email"
          name="m_mail"
          placeholder="Input Mail"
          value={m_mail}
          onChange={(e) => setM_mail(e.target.value)}
        />
        @
        <select className="select_email">
          <option>선택</option>
          <option value="1">직접입력</option>
          <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="daum.com">duam.net</option>
        </select>
        <br />
        <div className={styles.title}>휴대폰 번호</div>
        <input
          type="text"
          name="m_phone"
          placeholder="Input Phone"
          value={m_phone}
          onChange={(e) => setM_phone(e.target.value)}
        />
        <br />
        <input
          type="button"
          value="SIGN UP"
          name={SIGN_UP_BUTTON}
          onClick={btnClickedHandler}
        />
      </div>
    </section>
  );
};

export default SignUp;
