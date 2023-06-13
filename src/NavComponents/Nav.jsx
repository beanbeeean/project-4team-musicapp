import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "./nav.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <Container>
      <Row className={styles.search_wrap}>
        <Col className={styles.search} md={9}>
          <a href="#">
            <img src="./imgs/default.jpg" />
          </a>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Col>
        <Col md={3} className={`${styles.login_wrap} text-center`}></Col>
      </Row>
      <Row className={styles.Menubar}>
        <Col className={`${styles.list} text-center`}>
          <a href="#">Music Chart</a>
        </Col>
        <Col className={`${styles.list} text-center`}>
          <a href="#">Gongju</a>
        </Col>
        <Col className={`${styles.list} text-center`}>
          <a href="#">is Me</a>
        </Col>
        <Col className={`${styles.list} text-center`}>
          <a href="#">All Playlist</a>
        </Col>
        <Col className={`${styles.list} text-center`}>
          <a href="#">Playlist</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
