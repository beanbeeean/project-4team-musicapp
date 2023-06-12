import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./main_charts.css";
import MainChartsItem from "./MainChartsItem";

const Charts = () => {
  return (
    <Container>
      <Row>
        <div className="mt-3">
          <div className="main_charts">
            <h5>실시간 차트</h5>
            <p>2023.06.12 15:00</p>
          </div>
        </div>
      </Row>
      <Row className="charts_header_wrap pb-3 pt-3">
        <Col className="main_charts_header" md={1}>
          순위
        </Col>
        <Col className="main_charts_header" md={5}>
          제목
        </Col>
        <Col className="main_charts_header" md={2}>
          가수
        </Col>
        <Col className="main_charts_header" md={2}>
          temp
        </Col>
        <Col className="main_charts_header" md={2}>
          temp
        </Col>
      </Row>
      <MainChartsItem />
      <MainChartsItem />
      <MainChartsItem />
      <MainChartsItem />
      {/* </Row> */}
    </Container>
  );
};

export default Charts;
