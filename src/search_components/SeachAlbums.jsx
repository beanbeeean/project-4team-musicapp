import React from "react";
import AlbumsItem from "./AlbumsItem";
import styles from "./css/search_albums.module.css";

const SeachAlbums = () => {
  return (
    <div className={styles.artists_wrap}>
      <AlbumsItem />
      <AlbumsItem />
      <AlbumsItem />
      <AlbumsItem />
      <AlbumsItem />
      <AlbumsItem />
      <AlbumsItem />
    </div>
  );
};

export default SeachAlbums;
