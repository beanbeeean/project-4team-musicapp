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
        {searchArtists.length > 0 ? (
          <Col>
            <h5>검색결과</h5>
            <ul>
              <li>
                <img src={searchArtists[0]?.images[1].url} />
              </li>
              <li className={styles.info}>
                <h4>{searchArtists[0]?.name}</h4>
                <span>{searchArtists[0]?.type}</span>
                <div>{searchArtists[0]?.genres[0]}</div>
                <div>
                  followers :
                  {searchArtists[0]?.followers.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </li>
            </ul>
          </Col>
        ) : searchTracks.length > 0 ? (
          <Col>
            <h5>검색결과</h5>
            <ul>
              <li>
                <img src={searchTracks[0]?.album.images[1].url} />
              </li>
              <li className={styles.info}>
                <h4>{searchTracks[0]?.name}</h4>
                <div>{searchTracks[0]?.artists[0].name}</div>
                <span>{searchTracks[0]?.type}</span>
                <div>
                  playtime :{parseInt(searchTracks[0]?.duration_ms / 1000 / 60)}
                  :
                  {parseInt((searchTracks[0]?.duration_ms / 1000) % 60) + 1 < 10
                    ? "0" +
                      (parseInt((searchTracks[0]?.duration_ms / 1000) % 60) + 1)
                    : parseInt((searchTracks[0]?.duration_ms / 1000) % 60) + 1}
                </div>
              </li>
            </ul>
          </Col>
        ) : searchAlbums.length > 0 ? (
          <Col>
            <h5>검색결과</h5>
            <ul>
              <li>
                <img src={searchAlbums[0]?.images[1].url} />
              </li>
              <li className={styles.info}>
                <h4>{searchAlbums[0]?.name}</h4>
                <span>{searchAlbums[0]?.album_type}</span>
                <div>{searchAlbums[0]?.artists[0].name}</div>
                <div>release date :{searchAlbums[0]?.release_date}</div>
              </li>
            </ul>
          </Col>
        ) : (
          ""
        )}
      </Row>
      <hr />
      <div className={styles.songs}>
        <h5>곡</h5>
        {searchTracks.length > 0 ? (
          searchTracks.map((track, idx) =>
            idx <= 4 ? (
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
            ) : null
          )
        ) : (
          <Row>검색 결과가 없습니다.</Row>
        )}
      </div>
      <hr />
      <div className="albums">
        <h5>앨범</h5>
        <div className={styles.album_wrap}>
          {searchAlbums.length > 0 ? (
            searchAlbums.map((album, idx) =>
              idx <= 5 ? (
                <div>
                  <ul>
                    <li>
                      <img
                        src={
                          album.images.length > 0
                            ? album.images[1].url
                            : "https://picsum.photos/200/200"
                        }
                      />
                    </li>
                    <li>{album.name}</li>
                    <li>
                      {album.artists[0].name} ({album.release_date})
                    </li>
                  </ul>
                </div>
              ) : null
            )
          ) : (
            <Row>검색 결과가 없습니다.</Row>
          )}
        </div>
      </div>
      <hr />
      <div className={styles.artists}>
        <h5>아티스트</h5>
        <div className={styles.artists_wrap}>
          {searchArtists.length > 0 ? (
            searchArtists.map((artist, idx) =>
              idx <= 5 ? (
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
              ) : null
            )
          ) : (
            <Row>검색 결과가 없습니다.</Row>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SearchMain;
