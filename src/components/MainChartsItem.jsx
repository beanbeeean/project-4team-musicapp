import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const ListWrap = styled.div`
  &:hover .main_charts_song::before {
    content: url("https://picsum.photos/50/50");
    margin-right: 10px;
  }
`;

const MainChartsItem = ({ test }) => {
  return (
    <ListWrap className="row charts_list_wrap pb-3 pt-3">
      <Col className="text-center main_charts_number" md={1}>
        {test}
      </Col>
      <Col className="col-md-5 main_charts_song">제목</Col>
      <Col className="text-center main_charts_singer" md={2}>
        가수
      </Col>
      <Col className="text-center main_charts_temp" md={2}>
        temp
      </Col>
      <Col className="text-center main_charts_temp" md={2}>
        temp
      </Col>
    </ListWrap>
  );
};

export default MainChartsItem;