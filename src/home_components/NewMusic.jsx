import React, { useState } from "react";
import Album from "./Album";
import styles from "./css/newMusic.module.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginStyles from "./css/login.module.css";
import Modal from "../SignUp/Modal";

const NewMusic = () => {
  const [page, setPage] = useState(1);

  const prevBtnHandler = () => {
    if (page > 1) setPage((c) => c - 1);
    else setPage((c) => (c = 5));
  };

  const nextBtnHandler = () => {
    if (page < 5) setPage((c) => c + 1);
    else setPage((c) => (c = 1));
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
          <div className={loginStyles.section_wrap}>
            <div className={loginStyles.info}>서비스를 더 안전하게 이용하세요</div>
            <br />
            <input type="text" placeholder="Input ID" />
            <br />
            <input type="password" placeholder="Input PW" />
            <br />
            <input type="button" value="Login" />
            <br />
            <Modal />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewMusic;
