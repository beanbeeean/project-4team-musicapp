import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styles from "./css/recommend_playlist.module.css";
import { playlistsAction } from "../redux/actions/playlistsAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecommandPlaylist = () => {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlists);
  // console.log("pl : ", playlists);
  useEffect(() => {}, []);
  useEffect(() => {
    console.log("Components Didupdate");
    // console.log("playlists : ", playlists);
    window.localStorage.setItem("Recommand", JSON.stringify([playlists]));
    let baseStorage = JSON.parse(window.localStorage.getItem("Recommand"));

    // baseStorage.push(playlists);
    console.log("baseStorage : ", baseStorage);
    if (
      !window.localStorage.getItem("playlist") &&
      JSON.parse(window.localStorage.getItem("Recommand"))[0].type == "playlist"
    ) {
      let basePlaylists = [
        {
          playlist_title: baseStorage[0].name,
          playlist_key: "Recommand",
          player: "Spotify",
        },
      ];
      window.localStorage.setItem("playlist", JSON.stringify(basePlaylists));
    }
    // else if (
    //   window.localStorage.getItem("playlist") &&
    //   JSON.parse(window.localStorage.getItem("Recommand"))[0].type == "playlist"
    // ) {
    //   let basePlaylists = [
    //     {
    //       playlist_title: baseStorage[0].name,
    //       playlist_key: "Recommand",
    //       player: "Spotify",
    //     },
    //   ];
    //   window.localStorage.setItem("playlist", JSON.stringify(basePlaylists));
    // }
  }, [playlists]);
  return (
    <div className={styles.show_list}>
      <div>
        <Link
          to="/playlistitem"
          state={{
            flag: false,
            m_id: "Recommand",
          }}
        >
          {playlists.images ? <img src={playlists?.images[0].url} /> : ""}
        </Link>
      </div>
      <div>
        <ul>
          <Link
            to="/playlistitem"
            state={{
              flag: false,
              m_id: "Recommand",
            }}
          >
            <li className={styles.playlist_name}>{playlists?.name}</li>
            <br />
            <li className={styles.playlist_maker}>
              {playlists?.owner?.display_name}
            </li>
            <li className={styles.song_cnt}>
              총 {playlists?.tracks?.items.length}곡
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default RecommandPlaylist;
