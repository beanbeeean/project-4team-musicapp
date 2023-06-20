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
      <a
        className={styles.album}
        href="#none"
        onClick={(e) => e.preventDefault()}
      >
        <span>{item.name}</span>
        <img src={item.images[1].url} />
      </a>
    </div>
  );
};

export default Album;
