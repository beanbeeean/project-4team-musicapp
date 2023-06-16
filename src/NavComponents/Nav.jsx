import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "./nav.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAction } from "../redux/actions/searchAction";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  // console.log(process.env.REACT_APP_CLIENT_ID);
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    // console.log("m_id :", m_id);
  }, []);

  const searching = (e) => {
    e.preventDefault();
    // console.log("search Key ", searchKey);
    dispatch(searchAction.searchByKeyword(searchKey));
    navigate("/search");
  };

  const logoutBtnHandler = () => {
    alert("로그아웃 되었습니다!!");
    window.localStorage.removeItem("session");
    window.localStorage.removeItem("session2");
    setM_id();
  };

  const logInBtnHandler = () => {
    navigate("/sign");
  };

  return (
    <Container>
      <Row className={styles.search_wrap}>
        <Col className={styles.search} md={9}>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <img src="./imgs/default.jpg" />
          </a>
          <form onSubmit={searching}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </Col>
        <Col md={3} className={`${styles.login_wrap} text-center`}>
          {m_id !== null ? (
            <div>
              {m_id}님, 반갑습니다.
              <input type="button" value="Logout" onClick={logoutBtnHandler} />
            </div>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
      <Row className={styles.Menubar}>
        <Col className={`${styles.list} text-center`}>
          <Link to="/charts">Music Chart</Link>
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
          <Link to="/playlist">Playlist</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
