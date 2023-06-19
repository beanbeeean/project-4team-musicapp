import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./album_detail.module.css";

const AlbumDetail = () => {
  return (
    <Container>
      <div className={styles.header}>
        <div className={styles.album_img}>
          <img src="./imgs/default.jpg" />
        </div>
        <div className={styles.album_name}>
          <ul>
            <li>
              <h2>앨범명</h2>
            </li>
            <li>아티스트명 • 발매년도 • 총 곡 수 • 총 재생시간</li>
          </ul>
        </div>
      </div>
      <div className={styles.button_img}>
        <div className={styles.play_button}>▶</div>
        <div className={styles.pick_button}>♡</div>
      </div>
      <Row className={styles.tracks_header}>
        <Col md={1} className={styles.tracks_num}>
          #
        </Col>
        <Col md={10}>제목</Col>
        <Col md={1}>
          <FontAwesomeIcon icon={faClock} />
        </Col>
      </Row>
      <hr />
      <Row className={styles.list_wrap}>
        <Col className={styles.song_num} md={1}>
          1
        </Col>
        <Col className={styles.song_title} md={10}>
          <ul>
            <li>노래제목</li>
            <li>가수</li>
          </ul>
        </Col>
        <Col className={styles.running_time} md={1}>
          3:26
        </Col>
      </Row>
      <Row className={styles.list_wrap}>
        <Col className={styles.song_num} md={1}>
          2
        </Col>
        <Col className={styles.song_title} md={10}>
          <ul>
            <li>노래제목</li>
            <li>가수</li>
          </ul>
        </Col>
        <Col className={styles.running_time} md={1}>
          3:26
        </Col>
      </Row>
      <div className={styles.albums}>
        <h5>
          <a href="#">아티스트명의 곡 더보기</a>
        </h5>
        <div className={styles.album_wrap}>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매년도</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매년도</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AlbumDetail;
