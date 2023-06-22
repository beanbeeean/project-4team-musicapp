import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "./nav.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/actions/searchAction";

const Nav = ({ login }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginStatus } = useSelector((state) => state.home);
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  // console.log(process.env.REACT_APP_CLIENT_ID);
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [value, setValue] = useState("");
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [id, setId] = useState(login.current);
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
    setSearchKey("");
  };

  const logoutBtnHandler = () => {
    alert("로그아웃 되었습니다!!");
    window.localStorage.removeItem("session");
    login.current = null;
    dispatch({ type: "LOGOUT_SUCCESS" });
    navigate("/");
  };

  const tokenBtnHandler = () => {
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    setId(window.localStorage.getItem("session"));
  }, [loginStatus]);
  return (
    <div>
      <Container>
        <div className={styles.search}>
          <div className={styles.search_area}>
            <div className={styles.logo}>
              <Link to="/" className={styles.welcome}>
                <img src="./imgs/logo.png" />
              </Link>
            </div>
            <div className={styles.search_form}>
              <form onSubmit={searching}>
                <input
                  type="text"
                  onChange={(e) => setSearchKey(e.target.value)}
                  value={searchKey}
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </div>
          <div className={`${styles.login_wrap} text-center`}>
            {loginStatus == true ? (
              <div className={styles.welcome_wrap}>
                <div className={styles.info_wrap}>
                  <Link to="/signup" className={styles.welcome}>
                    {id}
                  </Link>
                  님, 반갑습니다!
                </div>
                <input
                  type="button"
                  value="Logout"
                  onClick={logoutBtnHandler}
                />
                <a
                  className={styles.token_create}
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                  onClick={tokenBtnHandler}
                >
                  Token
                </a>
              </div>
            ) : (
              <>
                <Link to="/signin">로그인/회원가입</Link>
                <a
                  className={styles.token_create}
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                  onClick={tokenBtnHandler}
                >
                  Token
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
      <div className={styles.menu_wrap}>
        <Container>
          <Row className={styles.Menubar}>
            <Col className={`${styles.list} text-center`}>
              <Link to="/charts">Music Chart</Link>
            </Col>
            <Col className={`${styles.list} text-center`}>
              <Link to="/allplaylist">All Playlist</Link>
            </Col>
            <Col className={`${styles.list} text-center`}>
              {!window.localStorage.getItem("session") ? (
                <Link to="/signin">My Playlist</Link>
              ) : (
                <Link to="/playlist">My Playlist</Link>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Nav;
