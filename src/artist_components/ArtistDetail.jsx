import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./artist_detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import { detailsAction } from "../redux/actions/detailsAction";
import PlaylistsModal from "../modal_component/PlaylistsModal";
const ArtistDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const [show, setShow] = useState(false);
  const [selectnum, setSelectnum] = useState(0);
  const [select, setSelect] = useState([]);
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));

  const { artist, artistAlbums, artistTopTracks, artistRelated, loading } =
    useSelector((state) => state.details);

  const changeAlbumDetail = (id) => {
    navigate(`/albums/${id}`);
  };

  const changeArtistDetail = (id) => {
    navigate(`/artists/${id}`);
  };

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
      window.localStorage.getItem(m_id+member[selectnum].playlist_title)
    );

    console.log(playlist);

    if (playlist !== null) {
      playlist = [...playlist, ...select];
      window.localStorage.setItem(
        m_id+member[selectnum].playlist_title,
        JSON.stringify(playlist)
      );
    } else {
      window.localStorage.setItem(
        m_id+member[selectnum].playlist_title,
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
    dispatch(detailsAction.getArtistDetail(id));
  }, []);

  useEffect(() => {
    dispatch(detailsAction.getArtistDetail(id));
    console.log("11", artistTopTracks);
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
      <div className={styles.header_wrap}>
        <div className={styles.header_img}>
          {artist.images ? <img src={artist.images[1].url} alt="" /> : ""}
        </div>
        <div className={styles.header_info}>
          <h1>{artist?.name}</h1>
          <h6>Followers {artist?.followers?.total}</h6>
          <div className={styles.play_button}>▶</div>
        </div>
      </div>

      <div className={styles.popular}>
        <div className={styles.popular_header}>
          <h5>인기</h5>
        </div>
        <button className={styles.input_btn} onClick={() => setShow(true)}>
          담기
        </button>
        {artistTopTracks?.tracks?.map((item, idx) => (
          <Row className={styles.list_wrap}>
            <Col className={styles.song_num} md={1}>
              {idx + 1}
            </Col>
            <Col className={styles.song_img} md={1}>
              <img src={item.album.images[2].url} />
            </Col>
            <Col className={styles.song_title} md={6}>
              {item.name}
            </Col>
            <Col className={styles.players} md={2}>
              {item.artists[0].name}
            </Col>
            <Col className={styles.running_time} md={1}>
              {parseInt(item.duration_ms / 1000 / 60)}:
              {parseInt((item.duration_ms / 1000) % 60) + 1 < 10
                ? "0" + (parseInt((item.duration_ms / 1000) % 60) + 1)
                : parseInt((item.duration_ms / 1000) % 60) + 1}
            </Col>
            <Col className={styles.input_playlist} md={1}>
              <input
                type="checkbox"
                className="chkbox"
                onChange={(e) => selecting(e, idx, item)}
              />
            </Col>
          </Row>
        ))}
      </div>
      <div className={styles.albums}>
        <h5>앨범</h5>
        <div className={styles.album_wrap}>
          {artistAlbums?.items?.map((item, idx) => (
            <div
              className={styles.album_list}
              onClick={() => changeAlbumDetail(item.id)}
            >
              <ul>
                <li>
                  <img src={item.images[1].url} />
                </li>
                <li className={styles.album_name}>{item.name}</li>
                <li>
                  {item.release_date} • {item.album_type}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.artists}>
        <h5>관련 아티스트</h5>
        <div className={styles.artists_wrap}>
          {artistRelated?.artists?.map((item, idx) =>
            item.images[2] ? (
              <div
                className={styles.related_list}
                onClick={() => changeArtistDetail(item.id)}
              >
                <ul>
                  <li>
                    <img src={item.images[2].url} />
                  </li>
                  <li className={styles.related_name}>{item.name}</li>
                  <li>{item.type}</li>
                </ul>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <PlaylistsModal
        show={show}
        setShow={setShow}
        setSelectnum={setSelectnum}
      />
    </Container>
  );
};

export default ArtistDetail;
