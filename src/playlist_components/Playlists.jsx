import React, { useEffect, useState } from "react";
import styles from "./playlists.module.css";

const Playlists = () => {
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

  return (
    <div className={styles.wrap}>
      <h5>My Playlist</h5>
      <a href="#none" className={styles.create_playlist}>
        + 플레이리스트 생성
      </a>
      <div className={styles.playlists_item}>
        <ul className={styles.playlist_item_wrap}>
          <li className={styles.playlist_pic}>
            <img src="./imgs/default.jpg" />
          </li>
          <li>
            <div className={styles.playlist_name}>
              This is my first playlist
            </div>
            <br />
            <div className={styles.create_date}>
              생성일&nbsp;{year}.{month}.{date}
            </div>
            <div className={styles.song_cnt}>총 127곡</div>
          </li>
        </ul>
        <ul className={styles.playlist_item_wrap}>
          <li className={styles.playlist_pic}>
            <img src="./imgs/default.jpg" />
          </li>
          <li>
            <div className={styles.playlist_name}>
              This is my first playlist
            </div>
            <br />
            <div className={styles.create_date}>
              생성일&nbsp;{year}.{month}.{date}
            </div>
            <div className={styles.song_cnt}>총 127곡</div>
          </li>
        </ul>
        <ul className={styles.playlist_item_wrap}>
          <li className={styles.playlist_pic}>
            <img src="./imgs/default.jpg" />
          </li>
          <li>
            <div className={styles.playlist_name}>
              This is my first playlist
            </div>
            <br />
            <div className={styles.create_date}>
              생성일&nbsp;{year}.{month}.{date}
            </div>
            <div className={styles.song_cnt}>총 127곡</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Playlists;
