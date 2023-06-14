import React from "react";
import styles from "./css/search_artists.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
const ArtistsItem = () => {
  return (
    <div className={styles.item_wrap}>
      <div className={styles.img_wrap}>
        <img
          className={styles.artists_img}
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className={styles.artists_play}>
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

export default ArtistsItem;