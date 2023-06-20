import React from "react";
import ArtistsItem from "./ArtistsItem";
import styles from "./css/search_artists.module.css";
import { useSelector } from "react-redux";

const SearchArtists = () => {
  const { searchArtists } = useSelector((state) => state.search);
  if (searchArtists.length > 0) {
    return (
      <>
        <h3>아티스트</h3>
        <div className={styles.artists_wrap}>
          {searchArtists.length > 0
            ? searchArtists.map((item) => <ArtistsItem item={item} />)
            : ""}
        </div>
      </>
    );
  } else {
    return <div className="cannot_wrap">검색 결과가 없습니다.</div>;
  }
};

export default SearchArtists;
