import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./search_main.module.css";
import { useSelector } from "react-redux";

const SearchMain = () => {
  const { searchArtists, searchTracks, searchAlbums } = useSelector(
    (state) => state.search
  );
  useEffect(() => {}, [searchArtists]);
  return (
    <Container>
      <Row className={styles.artist_name}>
        <Col>
          <h5>검색결과</h5>
          <ul>
            <li>
              <img src={searchArtists[0]?.images[1].url} />
            </li>
            <li className={styles.info}>
              <a href="#">{searchArtists[0]?.name}</a>
              <div>성별 나이 등등의 정보..</div>
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      <div className={styles.songs}>
        <h5>곡</h5>
        {searchTracks.length > 0
          ? searchTracks.map((track) => (
              <Row className={styles.list_wrap}>
                <Col className={styles.song_img} md={1}>
                  <img src={track.album.images[2].url} />
                </Col>
                <Col className={styles.song_title} md={6}>
                  {track.name}
                </Col>
                <Col className={styles.singer} md={3}>
                  {track.artists[0].name}
                </Col>
                <Col className={styles.running_time} md={2}>
                  {parseInt(track.duration_ms / 1000 / 60)}:
                  {parseInt((track.duration_ms / 1000) % 60) + 1 < 10
                    ? "0" + (parseInt((track.duration_ms / 1000) % 60) + 1)
                    : parseInt((track.duration_ms / 1000) % 60) + 1}
                </Col>
              </Row>
            ))
          : ""}
      </div>
      <hr />
      <div className="albums">
        <h5>앨범</h5>
        <div className={styles.album_wrap}>
          {searchAlbums.length > 0
            ? searchAlbums.map((album) => (
                <div>
                  <ul>
                    <li>
                      <img src={album.images[1].url} />
                    </li>
                    <li>{album.name}</li>
                    <li>
                      {album.artists[0].name} ({album.release_date})
                    </li>
                  </ul>
                </div>
              ))
            : ""}
        </div>
      </div>
      <hr />
      <div className="artists">
        <h5>아티스트</h5>
        <div className={styles.artists_wrap}>
          {searchArtists.length > 0
            ? searchArtists.map((artist) => (
                <div>
                  <ul>
                    <li>
                      <img
                        src={
                          artist.images.length == 0
                            ? "https://picsum.photos/200/200"
                            : artist.images[0].url
                        }
                      />
                    </li>
                    <li>{artist.name}</li>
                    <li>{artist.type}</li>
                  </ul>
                </div>
              ))
            : ""}
        </div>
      </div>
    </Container>
  );
};

export default SearchMain;
