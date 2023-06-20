import React, { useState } from "react";
import { useSelector } from "react-redux";
import AllPlaylistItem from "./AllPlaylistItem";
import styles from "./css/all_playlist.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const AllPlaylist = () => {
  const { searchAlbums } = useSelector((state) => state.search);
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  let cnt = 1;
  let playlist = JSON.parse(window.localStorage.getItem(m_id));

  console.log("playlist:", playlist);
  // console.log(curPlaylist);

  return (
    <Container>
      <h5>DJ플레이리스트</h5>
      <div className={styles.playlist_wrap}>
        {playlist.map((item, idx) =>
          idx == 0 ? (
            <></>
          ) : (
            <div className={styles.albums_wrap}>
              <div className={styles.item_wrap}>
                <div className={styles.img_wrap}>
                  <img className={styles.album_img} src="./imgs/default.jpg" />
                  <div className={styles.album_play}>
                    <FontAwesomeIcon
                      className={styles.play_icon}
                      icon={faPlay}
                    />
                  </div>

                  <div>
                    <p className={styles.playlistName}>
                      {playlist[idx].playlist_title}
                    </p>
                    <span className={styles.userName}>
                      <span>DJ</span>&nbsp;
                      {m_id}
                    </span>
                    <br />
                    <span className={styles.createDate}>
                      {playlist[idx].create_date} • {playlist[idx].music_cnt}곡
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Container>
  );
};

export default AllPlaylist;
