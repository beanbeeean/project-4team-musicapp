import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import styles from "./css/main_charts.module.css";
import PlaylistsModal from "../modal_component/PlaylistsModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainChartsItem = ({
  item,
  spoItem,
  idx,
  num,
  select,
  flag,
  show,
  setShow,
}) => {
  const [selectnum, setSelectnum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (show === false && selectnum !== 0) {
      saveBtnHandler();
    }
    setSelectnum(0);
  }, [selectnum]);

  const selecting = (e) => {
    if (e.target.checked) {
      select.push({ num: num, item: spoItem[num] });
    } else if (!e.target.checked) {
      select.forEach((item, index) => {
        if (item.num === num) {
          select.splice(index, 1);
        }
      });
    }
  };

  const saveBtnHandler = (idx) => {
    let m_id = window.localStorage.getItem("session");
    let title = JSON.parse(window.localStorage.getItem(m_id));
    let playlist = JSON.parse(
      window.localStorage.getItem(m_id+title[selectnum].playlist_title)
    );
    let allplaylist = JSON.parse(window.localStorage.getItem("playlist"));

    window.localStorage.setItem(m_id, JSON.stringify(title));

    window.localStorage.setItem("playlist", JSON.stringify(allplaylist));
    if (playlist !== null) {
      playlist = [...playlist, ...select];
      window.localStorage.setItem(
        m_id + title[selectnum].playlist_title,
        JSON.stringify(playlist)
      );
    } else {
      window.localStorage.setItem(
        m_id + title[selectnum].playlist_title,
        JSON.stringify(select)
      );
    }
  };

  const moveAlbumsPage = (data) => {
    navigate(`/albums/${data.album.id}`);
  };

  const moveArtistsPage = (data) => {
    navigate(`/artists/${data.artists[0].id}`);
  };
  const ListWrap = styled.div`
    &:hover .song_img::before {
      content: url("${spoItem[num].album.images[2].url}");
      margin-right: 10px;
    }
  `;
  return (
    <ListWrap className={`${styles.charts_list_wrap} row pb-3 pt-3`}>
      <Col className={`text-center ${styles.main_charts_number}`} md={1} sm={2}>
        {idx + 1}
      </Col>
      <Col className={`song_img ${styles.main_charts_song}`} md={5} sm={5}>
        <span onClick={() => moveAlbumsPage(spoItem[num])}>{item.name}</span>
      </Col>
      <Col className={`text-center ${styles.main_charts_singer}`} md={3} sm={3}>
        <span onClick={() => moveArtistsPage(spoItem[num])}>
          {item.artist.name}
        </span>
      </Col>
      <Col className={`text-center ${styles.main_charts_temp}`} md={2} sm={2}>
        {item.playcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Col>
      {flag ? (
        <Col className={`text-center ${styles.main_charts_temp}`} md={1} sm={1}>
          <input className="chkbox" type="checkbox" onChange={selecting} />
        </Col>
      ) : (
        <Col className={`text-center ${styles.main_charts_temp}`} md={1} sm={1}>
          {parseInt(spoItem[num].duration_ms / 1000 / 60)}:
          {parseInt((spoItem[num].duration_ms / 1000) % 60) + 1 < 10
            ? "0" + (parseInt((spoItem[num].duration_ms / 1000) % 60) + 1)
            : parseInt((spoItem[num].duration_ms / 1000) % 60) + 1}
        </Col>
      )}
      {num == 0 ? (
        <PlaylistsModal
          show={show}
          setShow={setShow}
          setSelectnum={setSelectnum}
        />
      ) : null}
    </ListWrap>
  );
};

export default MainChartsItem;
