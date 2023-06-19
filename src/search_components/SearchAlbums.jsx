import React from "react";
import AlbumsItem from "./AlbumsItem";
import styles from "./css/search_albums.module.css";
import { useSelector } from "react-redux";

const SearchAlbums = () => {
  const { searchAlbums } = useSelector((state) => state.search);
  return (
    <div className={styles.albums_wrap}>
      {searchAlbums.length > 0
        ? searchAlbums.map((item) => <AlbumsItem item={item} />)
        : "검색 결과가 없습니다."}
    </div>
  );
};

export default SearchAlbums;
