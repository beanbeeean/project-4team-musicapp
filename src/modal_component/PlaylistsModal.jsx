import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./modal.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function PlaylistsModal({ show, setShow, setSelectnum }) {
  const navigate = useNavigate();

  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  const nav = () => {
    navigate("/playlist/create_playlist");
  };

  const numBtnHandler = (e, idx) => {
    console.log(idx);
    setSelectnum(idx);
    setShow(false);
    alert("SUCCESS");
  };

  if (m_id === null && show==true) {
    navigate("/signin");
  } else {
    return (
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={`modal-90w ${styles.container}`}
      >
        <Modal.Header closeButton style={{ border: "none" }}>
          <div className={styles.modal_header}>PLI PLAYLISTS</div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modal_body}>
            <Row className={styles.modal_header_wrap}>
              <Col md={8} className={styles.modal_list_header}>
                플레이리스트 명
              </Col>
              <Col md={4} className={styles.modal_list_header}>
                수록곡 수
              </Col>
            </Row>
            {playlist === null? <></>:playlist.map((item, idx) =>
              idx == 0 ? (
                ""
              ) : (
                <a href="#none" onClick={(e) => numBtnHandler(e, idx)}>
                  <Row className={`${styles.modal_pl} pb-3 pt-3`}>
                    <Col className={styles.modal_pl_name} md={8} sm={6}>
                      {playlist[idx].playlist_title}
                    </Col>
                    <Col className={styles.modal_pl_cnt} md={4} sm={1}>
                      {JSON.parse(
                        window.localStorage.getItem(
                          m_id+playlist[idx].playlist_title
                        )
                      )
                        ? JSON.parse(
                            window.localStorage.getItem(
                              m_id+playlist[idx].playlist_title
                            )
                          ).length
                        : 0}
                    </Col>
                  </Row>
                </a>
              )
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.modal_footer}>
          <button onClick={nav}>Playlists 만들기</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PlaylistsModal;
