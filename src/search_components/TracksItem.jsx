import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./css/search_tracks.module.css";

const TracksItem = ({ num }) => {
  return (
    <Row className={styles.tracks_wrap}>
      <Col md={1} className={styles.tracks_num}>
        {num}
      </Col>
      <Col md={5} className={styles.tracks_title}>
        <div className={styles.tracks_img}>
          <img src="https://picsum.photos/40/40" alt="" />
        </div>
        <div className={styles.tracks_info}>
          <div className={styles.tracks_track}>LOVE DIVE</div>
          <span>IVE</span>
        </div>
      </Col>
      <Col md={4}>
        <span className={styles.tracks_album}>LOVE DIVE</span>
      </Col>
      <Col md={2} className={styles.tracks_time}>
        2:57
      </Col>
    </Row>
  );
};

export default TracksItem;
