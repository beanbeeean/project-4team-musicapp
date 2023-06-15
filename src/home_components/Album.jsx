import React from "react";
import styles from "./css/newMusic.module.css";

const Album = ({ item }) => {
  return (
    <div>
      <a className={styles.album} href="#none">
        <span>{item.name}</span>
        <img src={item.images[1].url} />
      </a>
    </div>
  );
};

export default Album;
