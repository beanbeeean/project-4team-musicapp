import React from "react";
import { Col } from "react-bootstrap";
import styles from "./css/recommend_playlist.module.css";

const RecommandPlaylist = () => {
  return (
    <div className={styles.show_list}>
      <div>
        <img src="./imgs/default.jpg" />
      </div>
      <div>
        <ul>
          <li className={styles.playlist_name}>
            잠은 안 오고 감성만 터지는 3AM
          </li>
          <br />
          <li className={styles.playlist_maker}>이거사조</li>
          <li className={styles.song_cnt}>총 27곡</li>
        </ul>
      </div>
    </div>
  );
};

export default RecommandPlaylist;
