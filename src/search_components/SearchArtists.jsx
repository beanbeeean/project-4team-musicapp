import React from "react";
import ArtistsItem from "./ArtistsItem";
import styles from "./css/search_artists.module.css";

const SearchArtists = () => {
  return (
    <div className={styles.artists_wrap}>
      <ArtistsItem />
      <ArtistsItem />
      <ArtistsItem />
      <ArtistsItem />
      <ArtistsItem />
      <ArtistsItem />
      <ArtistsItem />
    </div>
  );
};

export default SearchArtists;
