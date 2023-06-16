import React, { useEffect, useState } from "react";
import styles from "./css/playlists.module.css";
import { useNavigate, Link } from "react-router-dom";

const Playlists = () => {
  return (
    <div className={styles.wrap}>
      <h5>My Playlist</h5>
      <Link to="/playlist/create_playlist" className={styles.create_playlist}>
        + 플레이리스트 생성
      </Link>
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
            <div className={styles.create_date}>생성일&nbsp;</div>
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
            <div className={styles.create_date}>생성일&nbsp;</div>
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
            <div className={styles.create_date}>생성일&nbsp;</div>
            <div className={styles.song_cnt}>총 127곡</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Playlists;
