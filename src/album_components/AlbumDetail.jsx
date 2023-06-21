import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./album_detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsAction } from "../redux/actions/detailsAction";
import { ClipLoader } from "react-spinners";
import PlaylistsModal from "../modal_component/PlaylistsModal";

const AlbumDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [show, setShow] = useState(false);
  const [selectnum, setSelectnum] = useState(0);
  const [select, setSelect] = useState([]);
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const { albums, albumsTracks, albumsArr, loading } = useSelector(
    (state) => state.details
  );
  // console.log("albumsTracks ", albumsTracks);
  const selecting = (e, num, spoItem) => {
    if (e.target.checked) {
      select.push({ num: num, item: spoItem });
    } else if (!e.target.checked) {
      select.forEach((item, index) => {
        if (item.num === num) {
          select.splice(index, 1);
        }
      });
    }
    console.log(select);
  };

  useEffect(() => {
    if (show === false && selectnum !== 0) {
      saveBtnHandler();
    }
    setSelectnum(0);
  }, [selectnum]);

  const saveBtnHandler = () => {
    let member = JSON.parse(window.localStorage.getItem(m_id));
    let playlist = JSON.parse(
      window.localStorage.getItem(member[selectnum].playlist_title)
    );
    if (playlist !== null) {
      playlist = [...playlist, ...select];
      window.localStorage.setItem(
        m_id + member[selectnum].playlist_title,
        JSON.stringify(playlist)
      );
    } else {
      window.localStorage.setItem(
        m_id + member[selectnum].playlist_title,
        JSON.stringify(select)
      );
    }
    const checkboxes = document.querySelectorAll(".chkbox"); // .chkbox 클래스를 가진 모든 체크박스 선택

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.checked = false; // 체크박스 선택 해제
      }
    });

    setSelect([]);
  };

  useEffect(() => {
    dispatch(detailsAction.getAlbumsDetail(id));
    console.log("useEffect ", albums);
  }, []);

  useEffect(() => {
    dispatch(detailsAction.getAlbumsDetail(id));
    console.log("useEffect ", albumsTracks);
  }, [id]);

  if (loading) {
    return (
      <div className="spinner_wrap">
        <ClipLoader
          color="rgb(108, 208, 255)"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <Container>
      <div className={styles.header}>
        <div className={styles.album_img}>
          {albums.images ? <img src={albums.images[1].url} /> : ""}
        </div>
        <div className={styles.album_name}>
          <ul>
            <li>
              <h2>{albums.name}</h2>
            </li>
            <li>
              {albums.artists ? albums.artists[0].name : ""} •{" "}
              {albums.release_date} • {albums.total_tracks} 곡
            </li>
          </ul>
          <div className={styles.button_img}>
            <div className={styles.play_button}>▶</div>
            <div className={styles.pick_button}>♡</div>
          </div>
        </div>
      </div>

      <div className={styles.track_wrap}>
        <h3>트랙</h3>
        <button className="open_modal_btn" onClick={() => setShow(true)}>
          + 담기
        </button>
      </div>
      <Row className={styles.tracks_header}>
        <Col md={1} className={styles.tracks_num}>
          #
        </Col>
        <Col md={6} className={styles.tracks_title}>
          제목
        </Col>
        <Col md={2} className={styles.tracks_artist}>
          가수
        </Col>
        <Col md={2} className={styles.tracks_icon}>
          <FontAwesomeIcon icon={faClock} />
        </Col>
        <Col md={1} className={styles.tracks_input}>
          선택
        </Col>
      </Row>
      <hr />
      {albumsTracks?.items?.map((item, idx) => (
        <Row className={styles.list_wrap}>
          <Col className={styles.song_num} md={1}>
            {idx + 1}
          </Col>
          <Col className={styles.song_title} md={6}>
            {item.name}
          </Col>
          <Col className={styles.players} md={2}>
            {item.artists[0].name}
          </Col>
          <Col className={styles.running_time} md={2}>
            {parseInt(item.duration_ms / 1000 / 60)}:
            {parseInt((item.duration_ms / 1000) % 60) + 1 < 10
              ? "0" + (parseInt((item.duration_ms / 1000) % 60) + 1)
              : parseInt((item.duration_ms / 1000) % 60) + 1}
          </Col>
          <Col className={styles.input_playlist} md={1}>
            <input
              type="checkbox"
              onChange={(e) => selecting(e, idx, albumsArr[idx])}
            />
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

export default AlbumDetail;
