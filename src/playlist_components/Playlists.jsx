import React, { useEffect, useState } from "react";
import styles from "./css/playlists.module.css";
import { useNavigate, Link } from "react-router-dom";

const Playlists = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [curidx, setCurIdx] = useState(1);
  const [aidx, setaIdx] = useState(0);

  let playlist = JSON.parse(window.localStorage.getItem(m_id));
  console.log(playlist[curidx]);

  let curPlaylist = !playlist[curidx]
    ? ""
    : JSON.parse(window.localStorage.getItem(playlist[curidx].playlist_title));

  console.log("curPlaylist:", curPlaylist);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h5>My Playlist</h5>
          <Link
            to="/playlist/create_playlist"
            className={styles.create_playlist}
          >
            + 플레이리스트 생성
          </Link>
        </div>
        {playlist.map((item, idx) =>
          idx == 0 ? (
            ""
          ) : (
            <div className={styles.playlists_item}>
              <ul className={styles.playlist_item_wrap}>
                <li className={styles.playlist_pic}>
                  {/* <img src={curPlaylist[idx].item.album.images[2].url} /> */}
                </li>
                <li>
                  <div className={styles.playlist_name}>
                    {playlist[idx].playlist_title}
                  </div>
                  <br />
                  <div className={styles.create_date}>
                    {playlist[idx].create_date}&nbsp;
                  </div>
                </li>
              </ul>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Playlists;
