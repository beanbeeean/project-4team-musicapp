import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import styles from "./css/main_charts.module.css";

const MainChartsItem = ({ item, spoItem, idx, num, select,flag}) => {
  // console.log("key", key);
  
  useEffect(() => {
    console.log('[MainChartsItem] useEffect!!');
  });

  const selecting = (e) => {
    if (e.target.checked) {
      select.push({ num: num, item: spoItem[num] });
    } 
    else if (!e.target.checked) {
      select.forEach((item, index) => {
        if (item.num === num) {
          select.splice(index, 1);
        }
      });
    }
  };

  const saveBtnHandler = () => {
    let playlistnum = prompt("플레이 리스트 번호");
    let m_id = window.localStorage.getItem("session");
    let title = JSON.parse(window.localStorage.getItem(m_id));
    let playlist = JSON.parse(
      window.localStorage.getItem(title[playlistnum].playlist_title)
    );

    title[playlistnum].music_cnt = title[playlistnum].music_cnt + select.length;

    window.localStorage.setItem(m_id, JSON.stringify(title));

    if (playlist !== null) {
      playlist = [...playlist, ...select];
      window.localStorage.setItem(
        title[playlistnum].playlist_title,
        JSON.stringify(playlist)
      );
    } else {
      window.localStorage.setItem(title[playlistnum].playlist_title, JSON.stringify(select));
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
      <Col className={`song_img ${styles.main_charts_song}`} md={5} sm={4}>
        <a href="#none" onClick={saveBtnHandler}>
          {item.name}
        </a>
      </Col>
      <Col className={`text-center ${styles.main_charts_singer}`} md={2} sm={2}>
        {item.artist.name}
      </Col>
      <Col className={`text-center ${styles.main_charts_temp}`} md={2} sm={2}>
        {item.playcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Col>
      {
        flag ?<Col className={`text-center ${styles.main_charts_temp}`} md={2} sm={2}>
        <input className="chkbox" type="checkbox"  onChange={selecting}/>
        </Col>:""
      }
      
    </ListWrap>
  );
};

export default MainChartsItem;
