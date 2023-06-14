import React from "react";
import styles from "./css/search_albums.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const AlbumsItem = () => {
  return (
    <div className={styles.item_wrap}>
      <div className={styles.img_wrap}>
        <img
          className={styles.albums_img}
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className={styles.albums_play}>
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      </div>
      <div>
        <p>aespa</p>
        <span>아티스트</span>
      </div>
    </div>
  );
};

export default AlbumsItem;
