import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styles from "./css/recommend_playlist.module.css";
import { playlistsAction } from "../redux/actions/playlistsAction";
import { useDispatch, useSelector } from "react-redux";

const RecommandPlaylist = () => {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlists);
  console.log("pl : ", playlists);
  useEffect(() => {
    dispatch(playlistsAction.getPlaylists());
  }, []);
  return (
    <div className={styles.show_list}>
      <div>
        {playlists.images ? <img src={playlists?.images[0].url} /> : ""}
      </div>
      <div>
        <ul>
          <li className={styles.playlist_name}>{playlists?.name}</li>
          <br />
          <li className={styles.playlist_maker}>
            {playlists?.owner?.display_name}
          </li>
          <li className={styles.song_cnt}>
            총 {playlists?.tracks?.items.length}곡
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecommandPlaylist;
