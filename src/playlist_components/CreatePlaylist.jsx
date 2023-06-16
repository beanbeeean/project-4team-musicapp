import React, { useState, useEffect } from "react";
import styles from "./css/create_playlist.module.css";

const CreatePlaylist = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");

  const getNowDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    let date =
      today.getDate() < 10 ? "0" + today.getDate() < 10 : today.getDate();

    setYear(year);
    setMonth(month);
    setDate(date);
  };

  useEffect(() => {
    getNowDate();
  }, []);

  const [playlist_title, setPlaylist_title] = useState("");
  const [about_playlist, setAbout_playlist] = useState("");
  let userid = window.localStorage.getItem("session");

  const btnClickedHandler = () => {
    console.log("[CreatePlaylist] CREATE CLICKED!!");

    let playlist = [
      { playlist_title: playlist_title, about_playlist: about_playlist },
    ];
    let user = JSON.parse(window.localStorage.getItem(userid));

    user = [...user, ...playlist];

    window.localStorage.setItem(userid, JSON.stringify(user));

    alert("플레이리스트 생성이 완료되었습니다!!");
  };

  return (
    <div className={styles.wrap}>
      <h5>Create Playlist</h5>
      <div className={styles.create_list}>
        <ul className={styles.data}>
          <li className={styles.title}>제목</li>
          <li>
            <input
              type="text"
              name="playlist_title"
              placeholder="제목을 입력하세요"
              onChange={(e) => setPlaylist_title(e.target.value)}
            ></input>
          </li>
        </ul>
        <ul className={styles.data}>
          <li>소개글</li>
          <li>
            <textarea
              name="about_playlist"
              placeholder="소개글을 입력하세요"
              onChange={(e) => setAbout_playlist(e.target.value)}
            ></textarea>
          </li>
        </ul>
        <div>
          생성날짜: {year},{month},{date}
        </div>
        <br />
        <button onClick={btnClickedHandler}>생성하기</button>
      </div>
    </div>
  );
};

export default CreatePlaylist;
