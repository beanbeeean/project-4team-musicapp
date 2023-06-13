import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./main_charts.module.css";
import MainChartsItem from "./MainChartsItem";

const Charts = () => {
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
  }, []);

  return (
    <Container className="pb-3">
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
        <Col className={styles.main_charts_header} md={2} sm={2}>
          가수
        </Col>
        <Col className={styles.main_charts_header} md={2} sm={2}>
          temp
        </Col>
        <Col className={styles.main_charts_header} md={2} sm={2}>
          temp
        </Col>
      </Row>
      <MainChartsItem test="1" />
      <MainChartsItem test="2" />
      <MainChartsItem test="3" />
      <MainChartsItem test="4" />
      <MainChartsItem test="5" />
      <MainChartsItem test="6" />
      <MainChartsItem test="7" />
      <MainChartsItem test="8" />
      <MainChartsItem test="9" />
      <MainChartsItem test="10" />
    </Container>
  );
};

export default Charts;
