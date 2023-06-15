import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./playlists.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Playlistplaylist = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [idx, setIdx] = useState(0);

  let playlist = JSON.parse(window.localStorage.getItem(m_id));
  console.log(playlist);

  return (
    <Container>
      <Row className={styles.tracks_wrap}>
        <Col md={5} className={styles.tracks_title}>
          <div className={styles.tracks_info}>
            <div className={styles.tracks_track}>{playlist.name}</div>
            <span>{playlist[0].item.artists[0].name}</span>
          </div>
        </Col>
        <Col md={4}>
          <span className={styles.tracks_album}>{playlist.album.name}</span>
        </Col>
        <Col md={3} className={styles.tracks_time}>
          {parseInt(playlist.duration_ms / 1000 / 60)}:
          {parseInt((playlist.duration_ms / 1000) % 60) + 1 < 10
            ? "0" + (parseInt((playlist.duration_ms / 1000) % 60) + 1)
            : parseInt((playlist.duration_ms / 1000) % 60) + 1}
        </Col>
      </Row>
    </Container>
  );
};

export default Playlistplaylist;
