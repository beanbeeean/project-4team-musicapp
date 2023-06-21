import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/all_playlist.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const AllPlaylist = () => {
  let playlist = JSON.parse(window.localStorage.getItem("playlist"));

  let curPlaylist;
  const curPlaylists = (idx) => {
    curPlaylist = !playlist[idx]
      ? null
      : JSON.parse(window.localStorage.getItem(playlist[idx].playlist_key));

    console.log(playlist);
    console.log(curPlaylist);
  };

  // console.log(curPlaylist);

  return (
    <Container>
      <h5>DJ플레이리스트</h5>
      <div className={styles.playlist_wrap}>
        {playlist
          ? playlist.map((item, idx) =>
              item.playlist_key.includes("Recommand") ? (
                <div className={styles.albums_wrap}>
                  <div className={styles.item_wrap}>
                    <div className={styles.img_wrap}>
                      <Link
                        to="/playlistitem"
                        state={{
                          flag: false,
                          m_id: playlist[idx].playlist_key,
                        }}
                      >
                        <img
                          className={styles.album_img}
                          src={
                            window.localStorage.getItem(
                              playlist[idx].playlist_key
                            ) === null
                              ? "./imgs/default.jpg"
                              : JSON.parse(
                                  window.localStorage.getItem(
                                    playlist[idx].playlist_key
                                  )
                                )[0].images[0].url
                          }
                        />
                      </Link>

                      <div className={styles.album_play}>
                        <FontAwesomeIcon
                          className={styles.play_icon}
                          icon={faCopy}
                        />
                      </div>

                      <div>
                        <Link
                          to="/playlistitem"
                          state={{
                            flag: false,
                            m_id: playlist[idx].playlist_key,
                          }}
                        >
                          <p className={styles.playlistName}>
                            {playlist[idx].playlist_title}
                          </p>
                        </Link>

                        <span className={styles.userName}>
                          <span>DJ</span>&nbsp;
                          {playlist[idx].player}
                        </span>
                        <br />
                        <span className={styles.createDate}>
                          {curPlaylists(idx)} •&nbsp;
                          {
                            JSON.parse(
                              window.localStorage.getItem(
                                playlist[idx].playlist_key
                              )
                            )[0].tracks.items.length
                          }
                          곡&nbsp;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // 기본
                <div className={styles.albums_wrap}>
                  <div className={styles.item_wrap}>
                    <div className={styles.img_wrap}>
                      <Link
                        to="/playlistitem"
                        state={{
                          flag: false,
                          m_id: playlist[idx].playlist_key,
                        }}
                      >
                        <img
                          className={styles.album_img}
                          src={
                            window.localStorage.getItem(
                              playlist[idx].playlist_key
                            ) === null
                              ? "./imgs/default.jpg"
                              : JSON.parse(
                                  window.localStorage.getItem(
                                    playlist[idx].playlist_key
                                  )
                                )[0].item.album.images[1].url
                          }
                        />
                      </Link>

                      <div className={styles.album_play}>
                        <FontAwesomeIcon
                          className={styles.play_icon}
                          icon={faCopy}
                        />
                      </div>

                      <div>
                        <Link
                          to="/playlistitem"
                          state={{
                            flag: false,
                            m_id: playlist[idx].playlist_key,
                          }}
                        >
                          <p className={styles.playlistName}>
                            {playlist[idx].playlist_title}
                          </p>
                        </Link>

                        <span className={styles.userName}>
                          <span>DJ</span>&nbsp;
                          {playlist[idx].player}
                        </span>
                        <br />
                        <span className={styles.createDate}>
                          {curPlaylists(idx)} •{" "}
                          {curPlaylist === null ? 0 : curPlaylist.length}
                          곡&nbsp;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          : "플레이리스트가 없습니다."}
      </div>
    </Container>
  );
};

export default AllPlaylist;
