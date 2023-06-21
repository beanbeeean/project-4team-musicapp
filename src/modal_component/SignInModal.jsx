import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./modal.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function SignInModal({ show, setShow, setSelectnum, login }) {
  const navigate = useNavigate();

  const [m_id, setM_id] = useState("");
  const [m_pw, setM_pw] = useState("");

  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  const nav = () => {
    navigate("/signin");
  };

  const loginBtnHandler = () => {
    let chk = JSON.parse(window.localStorage.getItem(m_id));

    if (chk !== null && m_pw === chk[0].m_pw) {
      console.log(m_id);
      window.localStorage.setItem("session", m_id);
      alert("로그인 되었습니다!!");
      login.current = window.localStorage.getItem("session");
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호를 확인하세요!!");
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName={`modal-90w ${styles.container}`}
    >
      <Modal.Header closeButton style={{ border: "none" }}>
        <div className={styles.modal_header}>로그인</div>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.modal_body}>
          <Row className={styles.modal_header_wrap}>
            <Col md={2} className={styles.modal_list_header}>
              아이디
            </Col>
            <Col md={6} className={styles.modal_list_header}>
              <input
                type="text"
                name="m_id"
                placeholder="Input ID"
                value={m_id}
                onChange={(e) => setM_id(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={2} className={styles.modal_list_header}>
              비밀번호
            </Col>
            <Col md={6} className={styles.modal_list_header}>
              <input
                type="text"
                name="m_id"
                placeholder="Input ID"
                value={m_id}
                onChange={(e) => setM_id(e.target.value)}
              />
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.modal_footer}>
        <button onClick={loginBtnHandler} value="SIGN IN"></button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModal;
