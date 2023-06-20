import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./album_detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsAction } from "../redux/actions/detailsAction";
import { ClipLoader } from "react-spinners";

const AlbumDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { albums, albumsTracks, loading } = useSelector(
    (state) => state.details
  );

  useEffect(() => {
    dispatch(detailsAction.getAlbumsDetail(id));
    console.log("useEffect ", albums);
  }, []);

  useEffect(() => {
    dispatch(detailsAction.getAlbumsDetail(id));
    // console.log("useEffect ", albums);
    console.log("useEffect ", albumsTracks);
    // console.log("id", id);
    // console.log("artistAlbums : ", artistAlbums);
    // console.log("artistTopTracks : ", artistTopTracks);
    // console.log("artistRelated : ", artistRelated);
  }, [id]);

  if (loading) {
    return (
      <ClipLoader
        color="red"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
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
        </div>
      </div>
      <div className={styles.button_img}>
        <div className={styles.play_button}>▶</div>
        <div className={styles.pick_button}>♡</div>
      </div>
      <h2>트랙</h2>
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
          담기
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
            <input type="checkbox" />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default AlbumDetail;
