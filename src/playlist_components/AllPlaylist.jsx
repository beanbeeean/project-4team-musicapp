import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/all_playlist.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const AllPlaylist = () => {
  let playlist = JSON.parse(window.localStorage.getItem("playlist"));
  let m_id = window.localStorage.getItem("session");
  let curPlaylist;

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [create_date, setCreate_date] = useState();
  
  const getNowDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    let date =
      today.getDate() < 10 ? "0" + today.getDate() < 10 : today.getDate();

    setYear(year);
    setMonth(month);
    setDate(date);
    setCreate_date(`${year}.${month}.${date}`);
  };

  useEffect(() => {
    getNowDate();
  }, []);


  const curPlaylists = (idx) => {
    curPlaylist = !playlist[idx]
      ? null
      : JSON.parse(window.localStorage.getItem(playlist[idx].playlist_key));

    console.log(playlist);
    console.log(curPlaylist);
  };

  const copyPlaylist = (e, playlist_title, copy_key) => {
    let playlist = [
      {
        playlist_title: playlist_title,
        about_playlist: "",
        create_date: create_date,
      },
    ];
    let user = JSON.parse(window.localStorage.getItem(m_id));
    user = [...user, ...playlist];
    window.localStorage.setItem(m_id, JSON.stringify(user));

    let allplaylist=JSON.parse(window.localStorage.getItem("playlist"));
    let allplay = { playlist_title: playlist_title, playlist_key: m_id+playlist_title, player: m_id};
    allplaylist.push(allplay);
    window.localStorage.setItem("playlist", JSON.stringify(allplaylist));

    let copylist = JSON.parse(window.localStorage.getItem(copy_key))[0].tracks.items;
    let copy = [];
    console.log(copylist[0].track);
    copylist.map((item, idx) =>
      copy.push({num:idx, item:copylist[idx].track})
    )
    if(copylist!==null)
      window.localStorage.setItem(m_id+playlist_title, JSON.stringify(copy));
  } 

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
                      <a href="#none" onClick={(e) => copyPlaylist(e, playlist[idx].playlist_title, playlist[idx].playlist_key)}>
                        <div className={styles.album_play}>
                          <FontAwesomeIcon
                            className={styles.play_icon}
                            icon={faCopy}
                          />
                        </div>
                      </a>
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

                      <a href="#none" onClick={(e) => copyPlaylist(e, playlist[idx].playlist_title, playlist[idx].playlist_key)}>
                      <div className={styles.album_play}>
                        <FontAwesomeIcon
                          className={styles.play_icon}
                          icon={faCopy}
                        />
                      </div>
                      </a>
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
