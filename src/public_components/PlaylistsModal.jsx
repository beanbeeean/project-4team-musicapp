import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./modal.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PlaylistsModal({ show, setShow }) {
  const navigate = useNavigate();

  const nav = () => {
    navigate("/playlist/create_playlist");
  }
  
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  let curPlaylist;
  const curPlaylists = (idx) => {
    curPlaylist = !playlist[idx]
      ? null
      : JSON.parse(window.localStorage.getItem(playlist[idx].playlist_title));
  };

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
              <div className={styles.playlists_item}>
                <ul className={styles.playlist_item_wrap}>
                  <li className={styles.playlist_pic}>
                    {curPlaylists(idx)}
                    <img
                      src={
                        curPlaylist === null
                          ? ""
                          : curPlaylist[0].item.album.images[2].url
                      }
                    />
                  </li>
                  <li>
                    <div className={styles.playlist_name}>
                      {playlist[idx].playlist_title}
                    </div>
                    <br />
                    <div className={styles.create_date}>
                      {playlist[idx].create_date}&nbsp;
                    </div>
                    <div className={styles.music_cnt}>
                      {playlist[idx].music_cnt}&nbsp;
                    </div>
                  </li>
                </ul>
              </div>
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

export default PlaylistsModal;