import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./css/main_charts.module.css";
import MainChartsItem from "./MainChartsItem";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../redux/actions/homeAction";
import RecommandPlaylist from "./RecommendPlaylist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Charts = () => {
  const dispatch = useDispatch();
  const { charts, chartsSpotify } = useSelector((state) => state.home);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const getNowDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    let date =
      today.getDate() < 10 ? "0" + today.getDate() < 10 : today.getDate();
    let hour =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    let minute =
      today.getMinutes() < 10
        ? today.getMinutes() == 0
          ? "00"
          : "0" + today.getMinutes()
        : today.getMinutes();

    setYear(year);
    setMonth(month);
    setDate(date);
    setHour(hour);
    setMinute(minute);
  };

  useEffect(() => {
    getNowDate();
    dispatch(homeAction.getChartsTopTen());
  }, []);

  return (
    <Container className={styles.container} pb-3>
      <Row>
        <Col md={8}>
          <div className={`${styles.chart} ${styles.item1}`}>
            <div className={styles.main_charts}>
              <h5>실시간 차트</h5>
              <p>
                {year}.{month}.{date} {hour}:{minute}
              </p>
            </div>
            <Row className={`${styles.charts_header_wrap} pb-3 pt-3`}>
              <Col className={styles.main_charts_header} md={1} sm={2}>
                순위
              </Col>
              <Col className={styles.main_charts_header} md={5} sm={4}>
                제목
              </Col>
              <Col className={styles.main_charts_header} md={3} sm={2}>
                가수
              </Col>
              <Col className={styles.main_charts_header} md={2} sm={2}>
                재생 횟수
              </Col>
              <Col className={styles.main_charts_header} md={1} sm={2}>
                <FontAwesomeIcon icon={faClock} />
              </Col>
            </Row>
            {chartsSpotify.length > 0
              ? charts.tracks.track.map((item, idx) => (
                  <MainChartsItem
                    item={item}
                    spoItem={chartsSpotify}
                    idx={idx}
                    num={idx}
                    flag={false}
                  />
                ))
              : ""}
          </div>
        </Col>
        <Col md={4} className={styles.recommand_wrap}>
          <div className={`${styles.recommand_playlist} ${styles.item}`}>
            <h5>오늘의 추천 플레이리스트</h5>
            <RecommandPlaylist />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Charts;
