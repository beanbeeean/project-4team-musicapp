import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/search_tracks.module.css";
import TracksItem from "./TracksItem";

const SearchTracks = () => {
  return (
    <div>
      <Row className={`${styles.tracks_header} pt-2 pb-1`}>
        <Col md={1} className={styles.tracks_num}>
          #
        </Col>
        <Col md={5}>제목</Col>
        <Col md={4}>앨범</Col>
        <Col md={2}>
          <FontAwesomeIcon icon={faClock} />
        </Col>
      </Row>
      <TracksItem num={1} />
      <TracksItem num={2} />
      <TracksItem num={3} />
      <TracksItem num={4} />
      <TracksItem num={5} />
      <TracksItem num={6} />
      <TracksItem num={7} />
      <TracksItem num={8} />
      <TracksItem num={9} />
      <TracksItem num={10} />
    </div>
  );
};

export default SearchTracks;
