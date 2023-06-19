import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./artist_detail.module.css";

const ArtistDetail = () => {
  return (
    <Container>
      <h1>Artist명</h1>
      <h6>월별 리스너</h6>
      <div className={styles.play_button}>▶</div>
      <div className={styles.popular}>
        <h5>인기</h5>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_num} md={1}>
            1
          </Col>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={5}>
            노래제목
          </Col>
          <Col className={styles.players} md={3}>
            스트리밍 횟수(?)
          </Col>
          <Col className={styles.running_time} md={2}>
            3:26
          </Col>
        </Row>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_num} md={1}>
            2
          </Col>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={5}>
            노래제목
          </Col>
          <Col className={styles.players} md={3}>
            스트리밍 횟수(?)
          </Col>
          <Col className={styles.running_time} md={2}>
            3:26
          </Col>
        </Row>
        <a href="#">자세히보기</a>
      </div>
      <div className={styles.albums}>
        <h5>앨범</h5>
        <div className={styles.album_wrap}>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매년도 • 앨범</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매년도 • 앨범</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.artists}>
        <h5>팬들이 좋아하는 다른 음악</h5>
        <div className={styles.artists_wrap}>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>아티스트명</li>
              <li>아티스트</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>아티스트명</li>
              <li>아티스트</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.join_album}>
        <h5>참여 앨범</h5>
        <div className={styles.join_album_wrap}>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매년도 • 앨범</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArtistDetail;
