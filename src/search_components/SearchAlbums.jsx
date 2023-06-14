import React from "react";
import AlbumsItem from "./AlbumsItem";
import styles from "./css/search_albums.module.css";

const SearchAlbums = () => {
  return (
    <div className={styles.albums_wrap}>
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

export default SearchAlbums;
