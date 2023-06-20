import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/playlist_item.module.css";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PlaylistItem = () => {
  const location = useLocation();
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));

  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  console.log("playlist", playlist);
  console.log("playlist[curidx]", playlist[location.state.cnt]);

  console.log("title1:", playlist[location.state.cnt].playlist_title);

  let curPlaylist = JSON.parse(
    window.localStorage.getItem(playlist[location.state.cnt].playlist_title)
  );
  console.log("curPlaylist:", curPlaylist);

  return (
    <Container>
      <h5>내가 담은 곡</h5>
      {curPlaylist === null
        ? ""
        : curPlaylist.map((item, idx) => (
            <Row className={styles.tracks_wrap}>
              <Col md={5} className={styles.tracks_title}>
                <div className={styles.tracks_img}>
                  <img src={curPlaylist[idx].item.album.images[2].url} alt="" />
                </div>
                <div className={styles.tracks_info}>
                  <div className={styles.tracks_track}>
                    {curPlaylist[idx].item.name}
                  </div>
                  <span>{curPlaylist[idx].item.artists[0].name}</span>
                </div>
              </Col>
              <Col md={4}>
                <span className={styles.tracks_album}>
                  {curPlaylist[idx].item.album.name}
                </span>
              </Col>
              <Col md={3} className={styles.tracks_time}>
                {parseInt(curPlaylist[idx].item.duration_ms / 1000 / 60)}:
                {parseInt((curPlaylist[idx].item.duration_ms / 1000) % 60) + 1 <
                10
                  ? "0" +
                    (parseInt((curPlaylist[idx].item.duration_ms / 1000) % 60) +
                      1)
                  : parseInt((curPlaylist[idx].item.duration_ms / 1000) % 60) +
                    1}
              </Col>
            </Row>
          ))}
    </Container>
  );
};

export default PlaylistItem;
