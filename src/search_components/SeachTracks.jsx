import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/search_tracks.module.css";
import TracksItem from "./TracksItem";
import { useSelector } from "react-redux";

const SearchTracks = () => {
  const { searchTracks } = useSelector((state) => state.search);
  const [select, setSelect] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Parent ", select);
  }, [select]);
  return (
    <div>
      <div className={styles.track_header_wrap}>
        <h3>곡</h3>
        <button className="open_modal_btn" onClick={() => setShow(true)}>
          + 담기
        </button>
      </div>

      <Row className={`${styles.tracks_header} pt-2 pb-1`}>
        <Col md={1} className={styles.tracks_num}>
          #
        </Col>
        <Col md={5}>제목</Col>
        <Col md={4}>앨범</Col>
        <Col md={1}>
          <FontAwesomeIcon icon={faClock} />
        </Col>
        <Col md={1} className="text-center">
          선택
        </Col>
      </Row>
      {searchTracks.length > 0
        ? searchTracks.map((item, key) => (
            <TracksItem
              num={key}
              item={item}
              select={select}
              setSelect={setSelect}
              show={show}
              setShow={setShow}
            />
          ))
        : ""}
    </div>
  );
};
export default SearchTracks;
