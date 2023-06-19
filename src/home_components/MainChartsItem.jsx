import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import styles from "./css/main_charts.module.css";

const MainChartsItem = ({ item, img, idx, num }) => {
  // console.log("key", key);
  // console.log("key", key);
  const ListWrap = styled.div`
    &:hover .song_img::before {
      content: url("${img[num]}");
      margin-right: 10px;
    }
  `;
  return (
    <ListWrap className={`${styles.charts_list_wrap} row pb-3 pt-3`}>
      <Col className={`text-center ${styles.main_charts_number}`} md={1} sm={2}>
        {idx + 1}
      </Col>
      <Col className={`song_img ${styles.main_charts_song}`} md={5} sm={4}>
        {item.name}
      </Col>
      <Col className={`text-center ${styles.main_charts_singer}`} md={2} sm={2}>
        {item.artist.name}
      </Col>
      <Col className={`text-center ${styles.main_charts_temp}`} md={2} sm={2}>
        {item.playcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Col>
      <Col className={`text-center ${styles.main_charts_temp}`} md={2} sm={2}>
        temp
      </Col>
    </ListWrap>
  );
};

export default MainChartsItem;
