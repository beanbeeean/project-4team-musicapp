import React, { useEffect, useState } from "react";
import styles from "./css/playlist_item.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlaylistItem = (cnt) => {
  const location = useLocation();
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [test, setTest] = useState(false);
  const [count, setCount] = useState(0);
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  console.log("playlist", playlist);
  console.log("playlist[curidx]", playlist[location.state.cnt]);

  console.log("title1:", playlist[location.state.cnt].playlist_title);

  let curPlaylist = JSON.parse(
    window.localStorage.getItem(playlist[location.state.cnt].playlist_title)
  );
  console.log("curPlaylist:", curPlaylist);

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
    const updatedPlaylist = curPlaylist.filter(
      (_, idx) => !selectedIndexes.includes(idx)
    );

    window.localStorage.setItem(
      playlist[location.state.cnt].playlist_title,
      JSON.stringify(updatedPlaylist)
    );
    console.log("playlist: ", playlist);
    setSelectedIndexes([]);
    setTest(!test);
    document.getElementById("chkbox").checked = false;
    console.log(location.state.cnt);
    playlist[location.state.cnt].music_cnt =
      playlist[location.state.cnt].music_cnt - count;
    console.log(playlist);
    window.localStorage.setItem(m_id, JSON.stringify(playlist));
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
        <button
          className={styles.selected_delete}
          onClick={selectedDeleteClicked}
          disabled={selectedIndexes.length === 0}
        >
          선택삭제
        </button>
      </div>

      <Row>
        <Col md={5}>제목</Col>
        <Col md={4}>앨범명</Col>
        <Col md={2}>
          <FontAwesomeIcon icon={faClock} />
        </Col>
        <Col>선택</Col>
      </Row>
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
              <Col md={2} className={styles.tracks_time}>
                {parseInt(curPlaylist[idx].item.duration_ms / 1000 / 60)}:
                {parseInt((curPlaylist[idx].item.duration_ms / 1000) % 60) + 1 <
                10
                  ? "0" +
                    (parseInt((curPlaylist[idx].item.duration_ms / 1000) % 60) +
                      1)
                  : parseInt((curPlaylist[idx].item.duration_ms / 1000) % 60) +
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
