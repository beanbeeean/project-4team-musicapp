import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./search_main.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlaylistsModal from "../modal_component/PlaylistsModal";

const SearchMain = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  const [select, setSelect] = useState([]);
  const [selectnum, setSelectnum] = useState(0);
  const { searchArtists, searchTracks, searchAlbums } = useSelector(
    (state) => state.search
  );

  console.log("Albums", searchAlbums);
  console.log("Tracks", searchTracks);
  console.log("Artists", searchArtists);

  const navigateAlbum = (id) => {
    navigate(`/albums/${id}`);
  };

  const navigateArtist = (id) => {
    navigate(`/artists/${id}`);
  };


  const selecting = (e, num, spoItem) => {
    console.log(e.target.checked);
    console.log(num);
    console.log(spoItem);
    console.log(select);

    if (e.target.checked) {
      select.push({num: num, item: spoItem});
    } 
    else if (!e.target.checked) {
      select.forEach((item, index) => {
        console.log(item.num);
        if (index === num) {
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
    const checkboxes = document.querySelectorAll(".chkbox"); // .chkbox 클래스를 가진 모든 체크박스 선택

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.checked = false; // 체크박스 선택 해제
      }
    });
  };
  return (
    <Container>
      <Row className={styles.artist_name}>
        {searchArtists.length > 0 ? (
          <Col>
            <h3>검색결과</h3>
            <ul>
              <li>
                <img src={searchArtists[0]?.images[1].url} />
              </li>
              <li className={styles.info}>
                <h4>{searchArtists[0]?.name}</h4>
                <span>{searchArtists[0]?.type}</span>
                <div className="mb-2 mt-2">{searchArtists[0]?.genres[0]}</div>
                <div>
                  followers :&nbsp;
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
        <div className={styles.songs_header}>
          <h5>곡</h5>
          <button className="open_modal_btn" onClick={() => setShow(true)}>
              + 담기
          </button>
        </div>
        <PlaylistsModal
          show={show}
          setShow={setShow}
          setSelectnum={setSelectnum}
        />
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
                <Col className={styles.running_time} md={1}>
                  {parseInt(track.duration_ms / 1000 / 60)}:
                  {parseInt((track.duration_ms / 1000) % 60) + 1 < 10
                    ? "0" + (parseInt((track.duration_ms / 1000) % 60) + 1)
                    : parseInt((track.duration_ms / 1000) % 60) + 1}
                </Col>
                <Col className={styles.running_time} md={1}>
                      <input
                    type="checkbox"
                    className="chkbox"
                    onChange={(e) => selecting(e, idx, searchTracks[idx])}
                  />
                </Col>
              </Row>
            ) : null
          )
        ) : (
          <Row>
            <div className="cannot_wrap">검색 결과가 없습니다.</div>
          </Row>
        )}
      </div>
      <hr />
      <div className="albums">
        <h5>앨범</h5>
        <div className={searchAlbums.length > 0 ? styles.album_wrap : ""}>
          {searchAlbums.length > 0 ? (
            searchAlbums.map((album, idx) =>
              idx <= 5 ? (
                <div
                  className={styles.album_list}
                  onClick={() => navigateAlbum(album.id)}
                >
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
                    <li className={styles.album_name}>{album.name}</li>
                    <li>
                      {album.artists[0].name} ({album.release_date})
                    </li>
                  </ul>
                </div>
              ) : null
            )
          ) : (
            <div className="cannot_wrap">검색 결과가 없습니다.</div>
          )}
        </div>
      </div>
      <hr />
      <div className={styles.artists}>
        <h5>아티스트</h5>
        <div className={searchArtists.length > 0 ? styles.artists_wrap : ""}>
          {searchArtists.length > 0 ? (
            searchArtists.map((artist, idx) =>
              idx <= 5 ? (
                <div
                  className={styles.artist_list}
                  onClick={() => navigateArtist(artist.id)}
                >
                  <ul>
                    <li className={styles.artist_img}>
                      <img
                        src={
                          artist.images.length == 0
                            ? "https://picsum.photos/200/200"
                            : artist.images[0].url
                        }
                      />
                    </li>
                    <li className={styles.artist_name}>{artist.name}</li>
                    <li>{artist.type}</li>
                  </ul>
                </div>
              ) : null
            )
          ) : (
            <Row>
              <div className="cannot_wrap">검색 결과가 없습니다.</div>
            </Row>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SearchMain;
