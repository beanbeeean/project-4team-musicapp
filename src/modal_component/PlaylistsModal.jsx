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

  if (m_id === null) {
    navigate("/signin");
  } else {
    return (
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className={styles.container}
      >
        <Modal.Header closeButton style={{ border: "none" }}>
          <div className={styles.modal_header}>PLI PLAYLISTS</div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modal_body}>
            {playlist.map((item, idx) =>
              idx == 0 ? (
                ""
              ) : (
                // <div className={styles.playlists_item}>
                //   <ul className={styles.playlist_item_wrap}>

                //     <li>
                //       <div className={styles.playlist_name}>
                //         {playlist[idx].playlist_title}
                //       </div>
                //       <br />
                //     </li>
                //     <li>
                //       <div className={styles.music_cnt}>
                //         {playlist[idx].music_cnt}&nbsp;
                //       </div>
                //     </li>
                //   </ul>
                // </div>
                <a href="#none" onClick={(e) => numBtnHandler(e, idx)}>
                  <Row className={`${styles.charts_header_wrap} pb-3 pt-3`}>
                    <Col className={styles.main_charts_header} md={6} sm={6}>
                      {playlist[idx].playlist_title}
                    </Col>
                    <Col className={styles.main_charts_header} md={2} sm={2}>
                      {playlist[idx].music_cnt}
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
