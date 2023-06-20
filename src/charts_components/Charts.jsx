import React, { useEffect, useRef, useState } from "react";
import { chartsAction } from "../redux/actions/chartsAction";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./css/charts.module.css";
import MainChartsItem from "../home_components/MainChartsItem";

const Charts = () => {
  const dispatch = useDispatch();
  const { allCharts, allChartsSpotify, loading } = useSelector(
    (state) => state.charts
  );
  const [select, setSelect] = useState([]);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [cnt, setCnt] = useState(1);
  const [show, setShow] = useState(false);

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

  const chartsChangeHandler = (page) => {
    dispatch(chartsAction.getAllCharts(page));
    setCnt(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(chartsAction.getAllCharts(1));
    getNowDate();
  }, []);

  return (
    <Container className="pb-3">
      <div className={styles.main_charts}>
        <h5>실시간 차트</h5>
        <p>
          {year}.{month}.{date} {hour}:{minute}
        </p>
        <button className={styles.input_btn} onClick={() => setShow(true)}>
          담기
        </button>
      </div>
      <Row className={`${styles.charts_header_wrap} pb-3 pt-3`}>
        <Col className={styles.main_charts_header} md={1} sm={2}>
          순위
        </Col>
        <Col className={styles.main_charts_header} md={5} sm={5}>
          제목
        </Col>
        <Col className={styles.main_charts_header} md={3} sm={3}>
          가수
        </Col>
        <Col className={styles.main_charts_header} md={2} sm={2}>
          재생 횟수
        </Col>
        <Col className={styles.main_charts_header} md={1} sm={1}>
          선택
        </Col>
      </Row>
      {allCharts?.tracks?.track.map((item, idx) => (
        <MainChartsItem
          item={item}
          spoItem={allChartsSpotify}
          idx={
            cnt == 1
              ? idx
              : cnt == 2
              ? idx + 50
              : cnt == 3
              ? idx + 100
              : cnt == 4
              ? idx + 150
              : idx
          }
          num={idx}
          select={select}
          flag={true}
          show={show}
          setShow={setShow}
        />
      ))}
      <div className={styles.btn_wrap}>
        <button
          className={
            cnt == 1
              ? `${styles.charts_change_btn} ${styles.on}`
              : styles.charts_change_btn
          }
          onClick={() => chartsChangeHandler(1)}
        >
          1~50위
        </button>
        <button
          className={
            cnt == 2
              ? `${styles.charts_change_btn} ${styles.on}`
              : styles.charts_change_btn
          }
          onClick={() => chartsChangeHandler(2)}
        >
          51~100위
        </button>
        <button
          className={
            cnt == 3
              ? `${styles.charts_change_btn} ${styles.on}`
              : styles.charts_change_btn
          }
          onClick={() => chartsChangeHandler(3)}
        >
          101~150위
        </button>
        <button
          className={
            cnt == 4
              ? `${styles.charts_change_btn} ${styles.on}`
              : styles.charts_change_btn
          }
          onClick={() => chartsChangeHandler(4)}
        >
          151~200위
        </button>
      </div>
    </Container>
  );
};

export default Charts;
