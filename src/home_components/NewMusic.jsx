import React, { useState } from "react";
import Album from "./Album";
import styles from "./css/newMusic.module.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginStyles from "./css/login.module.css";

const NewMusic = () => {
  const [page, setPage] = useState(1);
  const [m_id, setM_id] = useState(window.localStorage.getItem('session'));
  const [m_pw, setM_pw] = useState("");

  const prevBtnHandler = () => {
    if (page > 1) setPage((c) => c - 1);
    else setPage((c) => (c = 5));
  };

  const nextBtnHandler = () => {
    if (page < 5) setPage((c) => c + 1);
    else setPage((c) => (c = 1));
  };

  const loginBtnHandler = () => {
    let chk = JSON.parse(window.localStorage.getItem(m_id));

    if (chk !== null && m_pw === chk.m_pw) {
      console.log(m_id);
      window.localStorage.setItem("session", m_id);
    } else {
      alert("아이디 또는 비밀번호를 확인하세요!!");
    }
  };

  const logoutBtnHandler = () => {
    alert("로그아웃 되었습니다!!");
    window.localStorage.removeItem('session');
    window.localStorage.removeItem('session2');
    setM_id();
  };
  const deleteBtnHandler = () => {
    alert("회원삭제 되었습니다!!");
    window.localStorage.removeItem('session');
    window.localStorage.removeItem('session2');
    window.localStorage.removeItem(m_id);
    setM_id();
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.albumbox}>
            <ul className={styles.titleBox}>
              <li>최신음악</li>
              <li className={styles.menu}>종합</li>
              <li className={styles.menu}>국내</li>
              <li className={styles.menu}>국외</li>
              <li onClick={nextBtnHandler}>&#62;</li>
              <li onClick={prevBtnHandler}>&#60;</li>
              <li className={styles.menu2}>{page}/5</li>
            </ul>
          </div>

          <table>
            <tbody>
              <tr>
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
              </tr>
              <tr>
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
              </tr>
            </tbody>
          </table>
        </Col>
        <Col>
          {m_id !== null || m_id === "" ? (
            <div className={loginStyles.section_wrap}>
              <div>{m_id}님, 반갑습니다.</div>
              <input type="button" value="Logout" onClick={logoutBtnHandler} />
              <input type="button" value="delete" onClick={deleteBtnHandler} />
            </div>
          ) : (
            <div className={loginStyles.section_wrap}>
              <div className={loginStyles.info}>
                서비스를 더 안전하게 이용하세요
              </div>
              <br />
              <input
                type="text"
                placeholder="Input ID"
                value={m_id}
                onChange={(e) => setM_id(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Input PW"
                value={m_pw}
                onChange={(e) => setM_pw(e.target.value)}
              />
              <br />
              <input type="button" value="Login" onClick={loginBtnHandler} />
              <br />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default NewMusic;
