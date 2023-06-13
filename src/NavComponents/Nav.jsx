import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "./nav.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Nav = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  console.log(process.env.REACT_APP_CLIENT_ID);
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState();

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
  }, []);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
    console.log(data.artists.items[0]);
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
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>{" "}
          </form>
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
