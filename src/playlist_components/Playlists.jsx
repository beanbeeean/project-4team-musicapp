import React, { useEffect, useState } from "react";
import styles from "./css/playlists.module.css";
import { useNavigate, Link } from "react-router-dom";

const Playlists = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  let cnt = 1;
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  let curPlaylist;
  const curPlaylists = () => {
    curPlaylist = !playlist[cnt]
      ? null
      : JSON.parse(window.localStorage.getItem(playlist[cnt].playlist_title));
    cnt = cnt + 1;
  };
  console.log(playlist);
  console.log(curPlaylist);

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
            <Link to="/playlistitem" state={{ cnt: idx }}>
              <div className={styles.playlists_item}>
                <ul className={styles.playlist_item_wrap}>
                  <li className={styles.playlist_pic}>
                    {curPlaylists()}
                    <img
                      src={
                        curPlaylist === null
                          ? ""
                          : curPlaylist[0].item.album.images[2].url
                      }
                    />
                  </li>
                  <li>
                    <div className={styles.playlist_name}>
                      {playlist[idx].playlist_title}
                    </div>
                    <br />
                    <div className={styles.create_date}>
                      {playlist[idx].create_date}&nbsp;
                    </div>
                    <div className={styles.music_cnt}>
                      {playlist[idx].music_cnt}&nbsp;
                    </div>
                  </li>
                </ul>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Playlists;
