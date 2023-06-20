import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./modal.module.css";
function PlaylistsModal({ show, setShow }) {
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
        <div className={styles.modal_body}></div>
      </Modal.Body>
      <Modal.Footer className={styles.modal_footer}>
        <button>Playlists 만들기</button>
      </Modal.Footer>
    </Modal>
  );
}

export default PlaylistsModal;
