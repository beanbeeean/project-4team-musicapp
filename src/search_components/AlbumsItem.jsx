import React from "react";
import styles from "./css/search_albums.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const AlbumsItem = ({ item }) => {
  const navigate = useNavigate();

  const showAlbumsDetail = (id) => {
    navigate(`/albums/${id}`);
  };

  return (
    <div className={styles.item_wrap} onClick={() => showAlbumsDetail(item.id)}>
      <div className={styles.img_wrap}>
        <img className={styles.album_img} src={item.images[0].url} alt="" />
        <div className={styles.album_play}>
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      </div>
      <div>
        <p className={styles.album_title}>{item.name}</p>
        <p className={styles.album_date}>{item.release_date}</p>
        <p>{item.artists[0].name}</p>
      </div>
    </div>
  );
};

export default AlbumsItem;
