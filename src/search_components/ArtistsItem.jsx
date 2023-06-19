import React, { useEffect, useState } from "react";
import styles from "./css/search_artists.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { detailsAction } from "../redux/actions/detailsAction";

const ArtistsItem = ({ item }) => {
  const dispatch = useDispatch();
  const { artist, artistAlbums, artistTopTracks, artistRelated } = useSelector(
    (state) => state.details
  );
  const showArtistDetail = (id) => {
    // console.log("받은 데이터 : ", id);
    dispatch(detailsAction.getArtistDetail(id));
  };

  // useEffect(() => {
  //   console.log("USEEFFECT 실행");
  //   console.log("artist api : ", artist);
  //   console.log("artistAlbums api : ", artistAlbums);
  //   console.log("artistTopTracks api : ", artistTopTracks);
  //   console.log("artistRelated api : ", artistRelated);
  // }, [testing]);
  return (
    <div className={styles.item_wrap} onClick={() => showArtistDetail(item.id)}>
      <div className={styles.img_wrap}>
        <img
          className={styles.artists_img}
          src={
            item.images.length > 0
              ? item.images[1].url
              : "https://picsum.photos/200/200"
          }
          alt=""
        />
      </div>
      <div className={styles.artist_info}>
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
      <div className={styles.artists_play}>
        <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
      </div>
      {/* <div onClick={() => setTesting(!testing)}>test</div> */}
    </div>
  );
};

export default ArtistsItem;
