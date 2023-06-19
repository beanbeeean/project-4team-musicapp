import React from "react";
import { useSelector } from "react-redux";
import AllPlaylistItem from "./AllPlaylistItem";
import styles from "./css/all_playlist.module.css";

const AllPlaylist = () => {
  const { searchAlbums } = useSelector((state) => state.search);
  return (
    <div>
      <h5>DJ플레이리스트</h5>
      <div className={styles.albums_wrap}>
        <AllPlaylistItem />
        <AllPlaylistItem />
        <AllPlaylistItem />
        <AllPlaylistItem />
      </div>
    </div>
  );
};

export default AllPlaylist;
