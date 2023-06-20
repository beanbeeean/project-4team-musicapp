import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import styles from "./css/main_charts.module.css";

const MainChartsItem = ({
  item,
  spoItem,
  idx,
  num,
  select,
  setSelect,
  count,
  setCount,
  flag,
}) => {
  // console.log("key", key);

  let temp;
  let leng;
  // useEffect(() => {
  //   console.log('[MainChartsItem] useEffect!!');
  // });

  const selecting = (e) => {
    console.log(e.target.checked);
    console.log(select);
    if (e.target.checked) {
      select.push({ num: num, item: spoItem[num] });
      temp = select.slice();
    } else if (!e.target.checked) {
      select.forEach((item, index) => {
        if (item.num === num) {
          select.splice(index, 1);
        }
      });
      temp = select.slice();
    }
    leng = select.length;
  };

  const saveBtnHandler = () => {
    let playlistnum = prompt("플레이 리스트 번호");
    let m_id = window.localStorage.getItem("session");
    let title = JSON.parse(window.localStorage.getItem(m_id))[playlistnum];
    let playlist = JSON.parse(
      window.localStorage.getItem(title.playlist_title)
    );

    if (playlist !== null) {
      playlist = [...playlist, ...temp];
      window.localStorage.setItem(
        title.playlist_title,
        JSON.stringify(playlist)
      );
    } else {
      window.localStorage.setItem(title.playlist_title, JSON.stringify(select));
    }
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
        <a href="#none" onClick={saveBtnHandler}>
          {item.name}
        </a>
      </Col>
      <Col className={`text-center ${styles.main_charts_singer}`} md={3} sm={3}>
        {item.artist.name}
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
    </ListWrap>
  );
};

export default MainChartsItem;
