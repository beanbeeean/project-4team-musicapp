import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/playlist_item.module.css";
import { Container, Row, Col, Placeholder } from "react-bootstrap";

const PlaylistItem = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [idx, setIdx] = useState(0);
  const [curidx, setCurIdx] = useState(1);
  const [len_list, setLen_list] = useState(0);

  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  console.log("playlist", playlist);
  console.log("playlist[curidx]", playlist[curidx]);

  console.log("title1:", playlist[curidx].playlist_title);

  let curPlaylist = JSON.parse(
    window.localStorage.getItem(playlist[curidx].playlist_title)
  );
  console.log("curPlaylist:", curPlaylist);

  setLen_list(curPlaylist.length);
  console.log(len_list);

  return (
    <Container>
      <h5>내가 담은 곡</h5>
      {curPlaylist === null
        ? ""
        : curPlaylist.map((item, idx) => (
            <Row className={styles.tracks_wrap}>
              <Col md={4} className={styles.tracks_title}>
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
              <Col md={1} className="text-center">
                <input className="chkbox" type="checkbox" />
                {/* 로컬 스토리지에 보관해야할지 리듀서에 보관해야할지 */}
              </Col>
            </Row>
          ))}
    </Container>
  );
};

export default PlaylistItem;
