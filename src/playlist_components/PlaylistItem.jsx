import React, { useEffect, useState } from "react";
import styles from "./css/playlist_item.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlaylistItem = (flag, m_id) => {
  const location = useLocation();
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [count, setCount] = useState(0);
  let playlist = JSON.parse(window.localStorage.getItem(location.state.m_id));
  
  console.log("playlist", playlist);
  console.log("playlist", location.state.m_id);

  const deleting = (e, idx) => {
    if (e.target.checked) {
      console.log("idx: ", idx);
      setCount(count + 1);
      setSelectedIndexes((prevIndexes) => [...prevIndexes, idx]);
    } else {
      console.log("yeah");
      setSelectedIndexes((prevIndexes) =>
        prevIndexes.filter((index) => index !== idx)
      );
      setCount(count - 1);
    }
    console.log("count:", count);
  };

  const selectedDeleteClicked = () => {
    const updatedPlaylist = playlist.filter(
      (_, idx) => !selectedIndexes.includes(idx)
    );
      
    console.log("updatedPlaylist: ", updatedPlaylist);

    window.localStorage.setItem(
      location.state.m_id,
      JSON.stringify(updatedPlaylist)
    );
    
    console.log("playlist: ", playlist);
    setSelectedIndexes([]);
    document.getElementById("chkbox").checked = false;

    console.log(playlist);
  };

  const selectBtnClicked = () => {
    console.log("selectBtnClicked!");
  };

  return (
    <Container className={styles.wrap}>
      <h5>내가 담은 곡</h5>
      <div className={styles.button_container}>
        <button className={styles.select_all} onClick={selectBtnClicked}>
          전체선택
        </button>
        {
          location.state.flag ? 
          <button
            className={styles.selected_delete}
            onClick={selectedDeleteClicked}
            disabled={selectedIndexes.length === 0}
          >
            선택삭제
          </button> : <button
            className={styles.selected_delete}
            // onClick={selectedDeleteClicked}
            disabled={selectedIndexes.length === 0}
          >
            선택추가
          </button> 
        }
      </div>

      <Row>
        <Col md={5}>제목</Col>
        <Col md={4}>앨범명</Col>
        <Col md={2}>
          <FontAwesomeIcon icon={faClock} />
        </Col>
        <Col>선택</Col>
      </Row>
      {playlist === null
        ? ""
        : playlist.map((item, idx) => (
            <Row className={styles.tracks_wrap}>
              <Col md={5} className={styles.tracks_title}>
                <div className={styles.tracks_img}>
                  <img src={playlist[idx].item.album.images[2].url} alt="" />
                </div>
                <div className={styles.tracks_info}>
                  <div className={styles.tracks_track}>
                    {playlist[idx].item.name}
                  </div>
                  <span>{playlist[idx].item.artists[0].name}</span>
                </div>
              </Col>
              <Col md={4}>
                <span className={styles.tracks_album}>
                  {playlist[idx].item.album.name}
                </span>
              </Col>
              <Col md={2} className={styles.tracks_time}>
                {parseInt(playlist[idx].item.duration_ms / 1000 / 60)}:
                {parseInt((playlist[idx].item.duration_ms / 1000) % 60) + 1 <
                10
                  ? "0" +
                    (parseInt((playlist[idx].item.duration_ms / 1000) % 60) +
                      1)
                  : parseInt((playlist[idx].item.duration_ms / 1000) % 60) +
                    1}
              </Col>
              <Col md={1}>
                <input
                  id="chkbox"
                  type="checkbox"
                  onChange={(e) => deleting(e, idx)}
                />
              </Col>
            </Row>
          ))}
    </Container>
  );
};

export default PlaylistItem;
