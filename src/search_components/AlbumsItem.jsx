import React, { useEffect, useState } from "react";
import styles from "./css/search_albums.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { detailsAction } from "../redux/actions/detailsAction";
const AlbumsItem = ({ item }) => {
  const dispatch = useDispatch();
  const [testing, setTesting] = useState(true);
  const { albums, albumsTracks } = useSelector((state) => state.details);
  const showAlbumsDetail = (id) => {
    console.log("받은 데이터 : ", id);
    dispatch(detailsAction.getAlbumsDetail(id));
  };

  // useEffect(() => {
  //   console.log("albums api : ", albums);
  //   console.log("albumsTracks api : ", albumsTracks);
  // }, [testing]);
  return (
    <div className={styles.item_wrap} onClick={() => showAlbumsDetail(item.id)}>
      <div className={styles.img_wrap}>
        <img className={styles.album_img} src={item.images[0].url} alt="" />
        <div className={styles.album_play}>
          <FontAwesomeIcon className={styles.play_icon} icon={faPlay} />
        </div>
      </div>
      <div>
        <p>{item.name}</p>
        <span>
          {item.release_date} · {item.artists[0].name}
        </span>
      </div>
      <div onClick={() => setTesting(!testing)}>sdsds</div>
    </div>
  );
};

export default AlbumsItem;
