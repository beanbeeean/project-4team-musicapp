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

  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [test1, setTest1] = useState([]);
  let temp;
  let playlist_list = {};

  const btnClickedHandler = () => {
    console.log("[CreatePlaylist] CREATE CLICKED!!");

    test1.push({
      playlist_title: playlist_title,
      about_playlist: about_playlist,
    });
    temp = test1.slice();
    setTest1(temp);

    // playlist_list = JSON.parse(window.localStorage.getItem(m_id));
    playlist_list = { ...playlist_list, ...test1 };
    console.log(test1);
    console.log("내 플레이리스트", playlist_list);

    window.localStorage.setItem(m_id, JSON.stringify(playlist_list));

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
