import React from "react";
import ArtistsItem from "./ArtistsItem";
import styles from "./css/search_artists.module.css";
import { useSelector } from "react-redux";

const SearchArtists = () => {
  const { searchArtists } = useSelector((state) => state.search);
  return (
    <div className={styles.artists_wrap}>
      {searchArtists.length > 0
        ? searchArtists.map((item) => <ArtistsItem item={item} />)
        : ""}
    </div>
  );
};

export default SearchArtists;
