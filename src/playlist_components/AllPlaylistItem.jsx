import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/all_playlist.module.css";

const AllPlaylistItem = ({ item }) => {
  return (
    <div className={styles.item_wrap}>
      <div className={styles.img_wrap}>
        <img className={styles.album_img} src="./imgs/default.jpg" alt="" />
        <div className={styles.album_play}>
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      </div>
      <div>
        <p className={styles.playlistName}>올 여름을 책임질 청량플리!</p>
        <span className={styles.userName}>만든 유저</span>
        <br />
        <span className={styles.createDate}>생성일•곡 수</span>
      </div>
    </div>
  );
};

export default AllPlaylistItem;
