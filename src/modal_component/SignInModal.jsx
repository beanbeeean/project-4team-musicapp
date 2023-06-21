// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import styles from "./modal.module.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Col, Row } from "react-bootstrap";

// function SignInModal({ show, setShow, setSelectnum }) {
//   const navigate = useNavigate();

//   const [m_id, setM_id] = useState("");
//   const [m_pw, setM_pw] = useState("");
//   let playlist = JSON.parse(window.localStorage.getItem(m_id));

//   const nav = () => {
//     navigate("/playlist/create_playlist");
//   };

//   const loginBtnHandler = () => {
//     let chk = JSON.parse(window.localStorage.getItem(m_id));

//     if (chk !== null && m_pw === chk[0].m_pw) {
//       console.log(m_id);
//       window.localStorage.setItem("session", m_id);
//       alert("로그인 되었습니다!!");
//       login.current = window.localStorage.getItem("session");
//       navigate("/");
//     } else {
//       alert("아이디 또는 비밀번호를 확인하세요!!");
//     }
//   };

//   return (
//     <Modal
//       show={show}
//       onHide={() => setShow(false)}
//       dialogClassName={`modal-90w ${styles.container}`}
//     >
//       <h4>로그인</h4>
//       <Modal.Header closeButton style={{ border: "none" }}>
//         <div className={styles.modal_header}>PLI PLAYLISTS</div>
//       </Modal.Header>
//       <Modal.Body>
//         <div className={styles.modal_body}>
//           <Row className={styles.modal_header_wrap}>
//             <Col md={8} className={styles.modal_list_header}>
//               플레이리스트 명
//             </Col>
//             <Col md={4} className={styles.modal_list_header}>
//               수록곡 수
//             </Col>
//           </Row>
//           {playlist.map((item, idx) =>
//             idx == 0 ? (
//               ""
//             ) : (
//               <a href="#none" onClick={(e) => numBtnHandler(e, idx)}>
//                 <Row className={`${styles.modal_pl} pb-3 pt-3`}>
//                   <Col className={styles.modal_pl_name} md={8} sm={6}>
//                     {playlist[idx].playlist_title}
//                   </Col>
//                   <Col className={styles.modal_pl_cnt} md={4} sm={1}>
//                     {JSON.parse(
//                       window.localStorage.getItem(playlist[idx].playlist_title)
//                     )
//                       ? JSON.parse(
//                           window.localStorage.getItem(
//                             playlist[idx].playlist_title
//                           )
//                         ).length
//                       : 0}
//                   </Col>
//                 </Row>
//               </a>
//             )
//           )}
//         </div>
//       </Modal.Body>
//       <Modal.Footer className={styles.modal_footer}>
//         <button onClick={nav}>Playlists 만들기</button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default SignInModal;
