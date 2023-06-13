import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./search_main.module.css";

const SearchMain = () => {
  return (
    <Container>
      <Row className={styles.artist_name}>
        <Col>
          <h5>검색결과</h5>
          <ul>
            <li>
              <img src="./imgs/default.jpg" />
            </li>
            <li className={styles.info}>
              <a href="#">가수이름</a>
              <div>성별 나이 등등의 정보..</div>
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      <div className={styles.songs}>
        <h5>곡</h5>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={3}>
            제목
          </Col>
          <Col className={styles.singer} md={5}>
            가수
          </Col>
          <Col className={styles.running_time} md={3}>
            2:03
          </Col>
        </Row>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={3}>
            제목
          </Col>
          <Col className={styles.singer} md={5}>
            가수
          </Col>
          <Col className={styles.running_time} md={3}>
            2:03
          </Col>
        </Row>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={3}>
            제목
          </Col>
          <Col className={styles.singer} md={5}>
            가수
          </Col>
          <Col className={styles.running_time} md={3}>
            2:03
          </Col>
        </Row>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={3}>
            제목
          </Col>
          <Col className={styles.singer} md={5}>
            가수
          </Col>
          <Col className={styles.running_time} md={3}>
            2:03
          </Col>
        </Row>
        <Row className={styles.list_wrap}>
          <Col className={styles.song_img} md={1}>
            <img src="./imgs/default.jpg" />
          </Col>
          <Col className={styles.song_title} md={3}>
            제목
          </Col>
          <Col className={styles.singer} md={5}>
            가수
          </Col>
          <Col className={styles.running_time} md={3}>
            2:03
          </Col>
        </Row>
      </div>
      <hr />
      <div className="albums">
        <h5>앨범</h5>
        <div className={styles.album_wrap}>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매일*아티스트명</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매일*아티스트명</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매일*아티스트명</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매일*아티스트명</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매일*아티스트명</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="./imgs/default.jpg" />
              </li>
              <li>앨범명</li>
              <li>발매일*아티스트명</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="artists">
        <h5>아티스트</h5>
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
    </Container>
  );
};

export default SearchMain;
