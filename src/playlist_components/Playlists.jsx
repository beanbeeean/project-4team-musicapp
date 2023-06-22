import React, { useEffect, useState } from "react";
import styles from "./css/playlists.module.css";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Playlists = () => {
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [num, setNum] = useState(0);
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  let curPlaylist;
  const curPlaylists = (idx) => {
    curPlaylist = !playlist[idx]
      ? null
      : JSON.parse(
          window.localStorage.getItem(m_id + playlist[idx].playlist_title)
        );

    console.log("playlist", playlist);
    console.log(curPlaylist);
  };

  const deletePlaylist = (e, idx) => {
    let chk = window.confirm("플레이리스트를 삭제하시겠습니까?");
    if (chk === true) {
      let allPlaylist = JSON.parse(window.localStorage.getItem("playlist"));
      let key = m_id + playlist[idx].playlist_title;

      allPlaylist.map((item, idx) => {
        console.log(allPlaylist[idx].playlist_key);
        if (allPlaylist[idx].playlist_key === key) {
          allPlaylist.splice(idx, 1);
        }
      });

      playlist.splice(idx, 1);

      window.localStorage.setItem("playlist", JSON.stringify(allPlaylist));
      window.localStorage.setItem(m_id, JSON.stringify(playlist));
      window.localStorage.removeItem(key);
      alert("삭제되었습니다.");
      setNum((e) => e + 1);
    }
  };

  return (
    <>
      <Container>
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

          {playlist.length <= 1 ? (
            <div className="cannot_wrap">저장된 플레이리스트가 없습니다.</div>
          ) : (
            playlist.map((item, idx) =>
              idx == 0 ? (
                ""
              ) : (
                <div className={styles.playlists_item}>
                  <ul className={styles.playlist_item_wrap}>
                    <Link
                      to="/playlistitem"
                      state={{
                        flag: true,
                        m_id: m_id + playlist[idx].playlist_title,
                      }}
                    >
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
                          {curPlaylist === null ? 0 : curPlaylist.length}
                          곡&nbsp;
                        </div>
                      </li>
                        {playlist[idx].about_playlist}
                      <li>

                      </li>
                    </Link>
                    <li>
                      <a href="#none" onClick={(e) => deletePlaylist(e, idx)}>
                        <img src="./imgs/delete.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              )
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default Playlists;
