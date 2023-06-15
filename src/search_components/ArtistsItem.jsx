import React from "react";
import styles from "./css/search_artists.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const ArtistsItem = ({ item }) => {
  return (
    <div className={styles.item_wrap}>
      <div className={styles.img_wrap}>
        <img className={styles.artists_img} src={item.images[1].url} alt="" />
        <div className={styles.artists_play}>
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      </div>
      <div>
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
    </div>
  );
};

export default ArtistsItem;
