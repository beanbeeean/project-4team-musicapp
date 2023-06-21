import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./modal.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

function PlaylistsModal({ show, setShow, setSelectnum }) {
  const navigate = useNavigate();

  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));

  const [state, setState] = useState(0);
  const [log, setLog] = useState();
  const [m_pw, setM_pw] = useState("");
  const [playlist_title, setPlaylist_title] = useState("");
  const [about_playlist, setAbout_playlist] = useState("");
  const [create_date, setCreate_date] = useState();

  const login = window.localStorage.getItem("session");

  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  console.log("state", state);

  useEffect(() => {
    if (m_id === null || m_id === undefined) {
      setLog(0);
      console.log("log:", log);
    } else {
      setLog(1);
      console.log("log:", log);
    }
  }, [log]);

  const nav = () => {
    // navigate("/playlist/create_playlist");
    console.log("nav clicked! state:", state);
    setState(1);
  };

  const nav2 = () => {
    console.log("login:", login);

    let playlist = [
      {
        playlist_title: playlist_title,
        about_playlist: about_playlist,
        // create_date: create_date,
      },
    ];

    console.log("playlist:", playlist);
    console.log("playlist_title:", playlist_title);

    let user = JSON.parse(window.localStorage.getItem(login));
    console.log("user:", user);
    user = [...user, ...playlist];
    window.localStorage.setItem(login, JSON.stringify(user));

    let allplaylist = JSON.parse(window.localStorage.getItem("playlist"));

    console.log("allplaylist:", allplaylist);

    if (allplaylist === null) {
      allplaylist = [
        {
          playlist_title: playlist_title,
          playlist_key: login + playlist_title,
          player: login,
        },
      ];
      window.localStorage.setItem("playlist", JSON.stringify(allplaylist));
    } else {
      let allplay = {
        playlist_title: playlist_title,
        playlist_key: login + playlist_title,
        player: login,
      };
      allplaylist.push(allplay);
      window.localStorage.setItem("playlist", JSON.stringify(allplaylist));
    }

    alert("플레이리스트 생성이 완료되었습니다!!");
    setState(0);
  };

  const numBtnHandler = (e, idx) => {
    console.log(idx);
    setSelectnum(idx);
    setShow(false);
    alert("SUCCESS");
  };

  const loginBtnHandler = () => {
    let chk = JSON.parse(window.localStorage.getItem(m_id));

    if (chk !== null && m_pw === chk[0].m_pw) {
      console.log("m_id:", m_id);
      window.localStorage.setItem("session", m_id);
      alert("로그인 되었습니다!!");
      login.current = window.localStorage.getItem("session");
      setLog(1);
    } else {
      alert("아이디 또는 비밀번호를 확인하세요!!");
    }
  };

  return (
    <>
      {log === 0 ? (
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
                <Col md={12} className={styles.modal_list_header}>
                  로그인
                </Col>
              </Row>
              <Row className={styles.modal_header_wrap}>
                <Col md={3} className={styles.modal_create_account_id}>
                  아이디
                </Col>
                <Col md={9} className={styles.modal_create_account}>
                  <input
                    type="text"
                    name="m_id"
                    placeholder="Input ID"
                    value={m_id}
                    onChange={(e) => setM_id(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.modal_header_wrap}>
                <Col md={3} className={styles.modal_create_account_pw}>
                  비밀번호
                </Col>
                <Col md={9} className={styles.modal_create_account}>
                  <input
                    type="text"
                    name="m_pw"
                    placeholder="Input PW"
                    value={m_pw}
                    onChange={(e) => setM_pw(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modal_footer}>
            <input type="button" value="SIGN IN" onClick={loginBtnHandler} />
          </Modal.Footer>
          <Modal.Footer className={styles.go_sign_up_wrap}>
            <div className={styles.go_sign_up}>
              아직 회원이 아니신가요? <a href="#">회원가입</a>
            </div>
          </Modal.Footer>
        </Modal>
      ) : state === 0 ? (
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

              {playlist === null ? (
                <></>
              ) : (
                playlist.map((item, idx) =>
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
                              m_id + playlist[idx].playlist_title
                            )
                          )
                            ? JSON.parse(
                                window.localStorage.getItem(
                                  m_id + playlist[idx].playlist_title
                                )
                              ).length
                            : 0}
                        </Col>
                      </Row>
                    </a>
                  )
                )
              )}
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modal_footer}>
            <button onClick={nav}>Playlists 만들기</button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName={`modal-90w ${styles.container}`}
        >
          <Modal.Header closeButton style={{ border: "none" }}>
            <div className={styles.modal_header}>CREATE PLAYLISTS</div>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.modal_body}>
              <Row className={styles.modal_header_wrap}>
                <Col md={12} className={styles.modal_list_header}>
                  플레이리스트 만들기
                </Col>
              </Row>
              <Row className={styles.modal_header_wrap}>
                <Col md={4} className={styles.modal_playlist_create_name}>
                  플레이리스트 명
                </Col>
                <Col md={8} className={styles.modal_playlist_create}>
                  <input
                    type="text"
                    name="playlist_title"
                    placeholder="플레이리스트 명"
                    onChange={(e) => setPlaylist_title(e.target.value)}
                  ></input>
                </Col>
              </Row>
              <Row className={styles.modal_header_wrap}>
                <Col md={4} className={styles.modal_playlist_create_info}>
                  플레이리스트
                  <br />
                  소개글
                </Col>
                <Col md={8} className={styles.modal_playlist_create}>
                  <input
                    type="text"
                    name="about_playlist"
                    placeholder="소개글을 입력하세요"
                    onChange={(e) => setAbout_playlist(e.target.value)}
                  ></input>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modal_footer}>
            <button onClick={nav2}>Playlists 생성완료</button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default PlaylistsModal;
