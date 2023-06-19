import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./css/search_tracks.module.css";

const TracksItem = ({ num, item, test, cnt, setCnt, setTest }) => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  

  let temp;
  let title;

  const testing = (e) => {
    if (e.target.checked) {
      test.push({ num: num, item: item });
      temp = test.slice();
      setCnt(e => e+1);
      setTest(temp);
    } else if (!e.target.checked) {
      test.forEach((item, index) => {
        if (item.num === num) {
          test.splice(index, 1);
        }
      });
      temp = test.slice();
      setCnt(e => e-1);
      setTest(temp);
    }
    console.log(cnt);
  };

  const saveBtnHandler = () => {
    let test2 = prompt("번호입력");
    title = JSON.parse(window.localStorage.getItem(m_id))[test2];
    let member = JSON.parse(window.localStorage.getItem(m_id));

    console.log("title", title);
    console.log("playlist명", title.playlist_title);

    let playlist = JSON.parse(
      window.localStorage.getItem(title.playlist_title)
    );

    let playlistcnt =
      {
        playlist_title: title.playlist_title,
        about_playlist: title.about_playlist,
        create_date: title.create_date,
        music_cnt: title.music_cnt + cnt
     };
    
    member[test2]=playlistcnt;
    window.localStorage.setItem(m_id, JSON.stringify(member));

    if (playlist !== null) {
      playlist = [...playlist, ...test];
      window.localStorage.setItem(
        title.playlist_title,
        JSON.stringify(playlist)
      );
    } else {
      window.localStorage.setItem(title.playlist_title, JSON.stringify(test));
    }

    const checkboxes = document.querySelectorAll(".chkbox"); // .chkbox 클래스를 가진 모든 체크박스 선택

    checkboxes.forEach((checkbox) => {
      if(checkbox.checked){
        checkbox.checked = false; // 체크박스 선택 해제
        setCnt(e => e-1);
      }
    });

    setTest([]);
  };

  // merge object 함수
  function mergeObj(title, test) {
    const newObj = {};
    for (let att in test) {
      newObj[att] = test[att];
    }

    for (let att in title) {
      newObj[att] = title[att];
    }

    return newObj;
  }

  return (
    <>
    
    <button onClick={saveBtnHandler}>save</button>
      <Row className={styles.tracks_wrap}>
        <Col md={1} className={styles.tracks_num}>
          {num + 1}
        </Col>
        <Col md={5} className={styles.tracks_title}>
          <div className={styles.tracks_img}>
            <img src={item.album.images[2].url} alt="" />
          </div>
          <div className={styles.tracks_info}>
            <div className={styles.tracks_track}>{item.name}</div>
            <span>{item.artists[0].name}</span>
          </div>
        </Col>
        <Col md={4}>
          <span className={styles.tracks_album}>{item.album.name}</span>
        </Col>
        <Col md={1} className={styles.tracks_time}>
          {parseInt(item.duration_ms / 1000 / 60)}:
          {parseInt((item.duration_ms / 1000) % 60) + 1 < 10
            ? "0" + (parseInt((item.duration_ms / 1000) % 60) + 1)
            : parseInt((item.duration_ms / 1000) % 60) + 1}
        </Col>
        <Col md={1} className="text-center">
          <input className="chkbox" type="checkbox" onChange={testing} />
          {/* 로컬 스토리지에 보관해야할지 리듀서에 보관해야할지 */}
        </Col>
      </Row>
    </>
  );
};

export default TracksItem;
