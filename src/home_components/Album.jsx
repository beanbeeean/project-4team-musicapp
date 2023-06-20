import React from "react";
import styles from "./css/newMusic.module.css";
import { useNavigate } from "react-router-dom";

const Album = ({ item }) => {
  const navigate = useNavigate();
  const navigateAlbums = (id) => {
    navigate(`/albums/${id}`);
  };

  return (
    <div onClick={() => navigateAlbums(item.id)}>
      <div
        className={styles.album}
        style={{ backgroundImage: "url(" + `${item.images[1].url}` + ")" }}
      >
        {/* <img src={item.images[1].url} /> */}
        <div className={styles.album_name}>{item.name}</div>
      </div>
    </div>
  );
};

export default Album;
