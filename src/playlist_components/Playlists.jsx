import React, { useEffect, useState } from "react";
import styles from "./css/playlists.module.css";
import { useNavigate, Link } from "react-router-dom";

const Playlists = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  let curPlaylist;
  const curPlaylists = (idx) => {
    curPlaylist = !playlist[idx]
      ? null
      : JSON.parse(window.localStorage.getItem(m_id+playlist[idx].playlist_title));
    
  console.log("playlist",playlist);
  console.log(curPlaylist);
  };

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
            <Link to="/playlistitem" state={{ flag: true, m_id: m_id+playlist[idx].playlist_title}}>
              <div className={styles.playlists_item}>
                <ul className={styles.playlist_item_wrap}>
                  <li className={styles.playlist_pic}>
                    {curPlaylists(idx)}
                    <img
                      src={
                        curPlaylist === null
                          ? "./imgs/default.jpg"
                          : curPlaylist[0].item.album.images[2].url
                      }
                    />
                  </li>
                  <li>
                    <div className={styles.playlist_name}>
                      {playlist[idx].playlist_title}
                    </div>
                    <br />
                    <br />
                    <div className={styles.create_date}>
                      {playlist[idx].create_date}&nbsp;
                    </div>
                    <br />
                    <div className={styles.music_cnt}>
                      {curPlaylist ===null ? 0: curPlaylist.length}곡&nbsp;
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
