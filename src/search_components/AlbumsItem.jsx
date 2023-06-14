import React from "react";
import styles from "./css/search_albums.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const AlbumsItem = ({ item }) => {
  return (
    <div className={styles.item_wrap}>
      <div className={styles.img_wrap}>
        <img className={styles.album_img} src={item.images[0].url} alt="" />
        <div className={styles.album_play}>
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      </div>
      <div>
        <p>{item.name}</p>
        <span>
          {item.release_date} · {item.artists[0].name}
        </span>
      </div>
    </div>
  );
};

export default AlbumsItem;
