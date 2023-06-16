import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/playlist_item.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Playlistplaylist = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [idx, setIdx] = useState(0);
  const [curidx, setCurIdx] = useState(0);

  let playlist = JSON.parse(window.localStorage.getItem(m_id));
  console.log("playlist", playlist);
  // console.log("playlist[0]", playlist[curidx]);

  return (
    <Container>
      <h5>내가 담은 곡</h5>
      {/* {playlist.map((item, idx) =>
        idx == 5 ? (
          ""
        ) : (
          <Row className={styles.tracks_wrap}>
            <Col md={5} className={styles.tracks_title}>
              <div className={styles.tracks_img}>
                <img src={item.item.album.images[2].url} alt="" />
              </div>
              <div className={styles.tracks_info}>
                <div className={styles.tracks_track}>{item.item.name}</div>
                <span>{item.item.artists[0].name}</span>
              </div>
            </Col>
            <Col md={4}>
              <span className={styles.tracks_album}>
                {item.item.album.name}
              </span>
            </Col>
            <Col md={3} className={styles.tracks_time}>
              {parseInt(item.item.duration_ms / 1000 / 60)}:
              {parseInt((item.item.duration_ms / 1000) % 60) + 1 < 10
                ? "0" + (parseInt((item.item.duration_ms / 1000) % 60) + 1)
                : parseInt((item.item.duration_ms / 1000) % 60) + 1}
            </Col>
          </Row>
        )
      )} */}
    </Container>
  );
};

export default Playlistplaylist;
