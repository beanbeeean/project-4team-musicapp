import React, { useEffect, useState } from "react";
import styles from "./css/playlist_item.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlaylistsModal from "../modal_component/PlaylistsModal";

const PlaylistItem = () => {
  // console.log("m_id ", m_id);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [show, setShow] = useState(false);
  const [selectnum, setSelectnum] = useState(0);
  const [select, setSelect] = useState([]);

  console.log("location.state.m_id", location.state.m_id);
  let playlist = JSON.parse(window.localStorage.getItem(location.state.m_id));
  console.log("pl", playlist);
  const deleting = (e, idx) => {
    if (e.target.checked) {
      console.log("idx: ", idx);
      setSelectedIndexes((prevIndexes) => [...prevIndexes, idx]);
    } else {
      console.log("yeah");
      setSelectedIndexes((prevIndexes) =>
        prevIndexes.filter((index) => index !== idx)
      );
    }
  };
  const selecting = (e, num, spoItem) => {
    console.log(e.target.checked);
    console.log(num);
    console.log(spoItem);

    if (e.target.checked) {
      select.push(spoItem);
      setSelectedIndexes((prevIndexes) => [...prevIndexes, num]);
    } else if (!e.target.checked) {
      select.forEach((item, index) => {
        if (item.num === num) {
          select.splice(index, 1);
        }
      });
      setSelectedIndexes((prevIndexes) =>
        prevIndexes.filter((index) => index !== num)
      );
    }
    console.log(select);
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
    alert("삭제 되었습니다!!");
    console.log(playlist);

    const checkboxes = document.querySelectorAll(".chkbox"); // .chkbox 클래스를 가진 모든 체크박스 선택

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.checked = false; // 체크박스 선택 해제
      }
    });
  };

  useEffect(() => {
    if (show === false && selectnum !== 0) {
      saveBtnHandler();
    }
    setSelectnum(0);
  }, [selectnum]);

  const saveBtnHandler = () => {
    let id = window.localStorage.getItem("session");
    console.log(id);
    let member = JSON.parse(window.localStorage.getItem(id));
    console.log(member);
    let playlist2 = JSON.parse(
      window.localStorage.getItem(id + member[selectnum].playlist_title)
    );
    console.log(member);
    console.log(playlist2);

    if (playlist2 !== null) {
      playlist2 = [...playlist2, ...select];
      window.localStorage.setItem(
        id + member[selectnum].playlist_title,
        JSON.stringify(playlist2)
      );
    } else {
      window.localStorage.setItem(
        id + member[selectnum].playlist_title,
        JSON.stringify(select)
      );
    }
    navigate(`/allplaylist`);
    console.log("endddd");
  };

  const selectBtnClicked = () => {
    console.log("selectBtnClicked!");
  };

  return (
    <Container className={styles.wrap}>
      {location.state.flag ? <h5>내가 담은 곡</h5> : <h5>플레이리스트</h5>}
      <div className={styles.button_container}>
        <button className={styles.select_all} onClick={selectBtnClicked}>
          전체선택
        </button>
        {location.state.flag ? (
          <button
            className={styles.selected_delete}
            onClick={selectedDeleteClicked}
            disabled={selectedIndexes.length === 0}
          >
            선택삭제
          </button>
        ) : (
          <button
            className={styles.selected_delete}
            onClick={() => setShow(true)}
            disabled={selectedIndexes.length === 0}
          >
            선택추가
          </button>
        )}
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
        : location.state.m_id.includes("Recommand")
        ? playlist[0].tracks.items.map((item, idx) => (
            <Row className={styles.tracks_wrap}>
              <Col md={5} className={styles.tracks_title}>
                <div className={styles.tracks_img}>
                  <img src={item.track.album.images[2].url} alt="" />
                </div>
                <div className={styles.tracks_info}>
                  <div className={styles.tracks_track}>{item.track.name}</div>
                  <span>{item.track.artists[0].name}</span>
                </div>
              </Col>
              <Col md={4}>
                <span className={styles.tracks_album}>
                  {item.track.album.name}
                </span>
              </Col>
              <Col md={2} className={styles.tracks_time}>
                {parseInt(item.track.duration_ms / 1000 / 60)}:
                {parseInt((item.track.duration_ms / 1000) % 60) + 1 < 10
                  ? "0" + (parseInt((item.track.duration_ms / 1000) % 60) + 1)
                  : parseInt((item.track.duration_ms / 1000) % 60) + 1}
              </Col>
              <Col md={1}>
                {location.state.flag ? (
                  <input
                    id="chkbox"
                    className="chkbox"
                    type="checkbox"
                    onChange={(e) => deleting(e, idx)}
                  />
                ) : (
                  <input
                    id="chkbox"
                    className="chkbox"
                    type="checkbox"
                    onChange={(e) =>
                      selecting(e, idx, { num: idx, item: item.track })
                    }
                  />
                )}
              </Col>
            </Row>
          ))
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
                {parseInt((playlist[idx].item.duration_ms / 1000) % 60) + 1 < 10
                  ? "0" +
                    (parseInt((playlist[idx].item.duration_ms / 1000) % 60) + 1)
                  : parseInt((playlist[idx].item.duration_ms / 1000) % 60) + 1}
              </Col>
              <Col md={1}>
                {location.state.flag ? (
                  <input
                    id="chkbox"
                    className="chkbox"
                    type="checkbox"
                    onChange={(e) => deleting(e, idx)}
                  />
                ) : (
                  <input
                    id="chkbox"
                    className="chkbox"
                    type="checkbox"
                    onChange={(e) => selecting(e, idx, item)}
                  />
                )}
              </Col>
            </Row>
          ))}
      <PlaylistsModal
        show={show}
        setShow={setShow}
        setSelectnum={setSelectnum}
      />
    </Container>
  );
};

export default PlaylistItem;
