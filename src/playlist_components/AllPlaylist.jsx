import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/all_playlist.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const AllPlaylist = () => {

  let playlist = JSON.parse(window.localStorage.getItem('playlist'));

  let curPlaylist;
  const curPlaylists = (idx) => {
    curPlaylist = !playlist[idx]
      ? null
      : JSON.parse(window.localStorage.getItem(playlist[idx].playlist_title));
    
  console.log(playlist);
  console.log(curPlaylist);
  };

  
  console.log("playlist:", playlist[0].playlist_title);
  // console.log(curPlaylist);

  return (
    <Container>
      <h5>DJ플레이리스트</h5>
      <div className={styles.playlist_wrap}>
        {
        playlist.map((item, idx) =>
          <Link to="/playlistitem" state={{flag: false, m_id: playlist[idx].playlist_title}}>
            <div className={styles.albums_wrap}>
              <div className={styles.item_wrap}>
                <div className={styles.img_wrap}>
                  <img className={styles.album_img} src={
                    window.localStorage.getItem(playlist[idx].playlist_title)===null ? "./imgs/default.jpg" : 
                    JSON.parse(window.localStorage.getItem(playlist[idx].playlist_title))[0].item.album.images[1].url 
                    
                  } />
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
                      {playlist[idx].player}
                    </span>
                    <br />
                    <span className={styles.createDate}>
                      {curPlaylists(idx)}
                      {playlist[idx].create_date} • {curPlaylist ===null ? 0: curPlaylist.length}곡&nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          )
        }
      </div>
    </Container>
  );
};

export default AllPlaylist;
