import React, { useEffect, useState } from "react";
import styles from "./css/sign_up.module.css";

import $ from "jquery";

$(document).ready(function () {
  var selectedOption = localStorage.getItem("selectedOption");

  $("#select_email").change(function () {
    var selectedOption = $(this).val();

    if (selectedOption === "1") {
      // 직접입력일 경우
      $("#str_email").val(""); // 값 초기화
      $("#str_email").prop("disabled", false); // 활성화
      $("#str_email").focus(); // 포커스 이동
    } else if (selectedOption === "선택") {
      // 선택일 경우
      $("#str_email").val(""); // 값 초기화
      $("#str_email").prop("disabled", false); // 비활성화
    } else {
      // 직접입력이 아닐 경우
      var selectedText = $("#select_email option:selected").text();
      $("#str_email").val(selectedText); // 선택값 입력
      $("#str_email").prop("disabled", true); // 비활성화
    }
  });
});

const SIGN_UP_BUTTON = "1";

const SignUp = ({ setOption }) => {
  const [m_id, setM_id] = useState("");
  const [m_pw, setM_pw] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [m_phone, setM_phone] = useState("");

  useEffect(() => {
    console.log("[SignUp] useEffect() CALLED!!");
  });

  // Handler START
  const btnClickedHandler = (e) => {
    console.log("[SignUp] btnClickedHandler() CALLED!!");

    switch (e.target.name) {
      case SIGN_UP_BUTTON:
        if (ValidateUserInputData()) {
          console.log("[SignUp] SIGN_UP_BUTTON CLICKED!!");
          let chk = JSON.parse(window.localStorage.getItem(m_id));
          let Obj;

          if (chk === null) {
            Obj = [{ m_pw: m_pw, m_mail: m_mail, m_phone: m_phone }];
            console.log(JSON.stringify(Obj), m_pw, m_mail, m_phone);
            window.localStorage.setItem(m_id, JSON.stringify(Obj));
            alert("회원가입이 완료되었습니다!!");
            setOption(0);
          } else alert("아이디 중복 확인하세요!!");
        }
        break;
    }
  };

  // Handler END

  // Validate START
  const ValidateUserInputData = () => {
    console.log("[SignUp] ValidateUserInputData() CALLED!!");

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
  const ValidateUserId = () => {
    let chk = JSON.parse(window.localStorage.getItem(m_id));
    if (chk === null) {
      alert("사용 가능한 아이디입니다!!");
    } else alert("이미 존재하는 아이디입니다!!");
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
        <button onClick={ValidateUserId}>중복확인</button>
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
        <input type="text" name="m_mail2" id="str_email" />
        <br />
        <select id="select_email">
          <option selected disabled>
            선택
          </option>
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
