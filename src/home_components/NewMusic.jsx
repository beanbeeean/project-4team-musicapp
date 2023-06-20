import React, { useEffect, useState } from "react";
import Album from "./Album";
import styles from "./css/newMusic.module.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginStyles from "./css/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../redux/actions/homeAction";

const NewMusic = () => {
  const { newRelease } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [m_login, setLogin] = useState(window.localStorage.getItem("session"));
  const [m_id, setM_id] = useState(window.localStorage.getItem("session"));
  const [m_pw, setM_pw] = useState("");
  const [selection, setSelection] = useState("KR");
  const [offset, setOffset] = useState(0);
  const prevBtnHandler = () => {
    if (page > 1) setPage((c) => c - 1);
    else setPage((c) => (c = 5));
    if (offset < 0) {
      setOffset(60);
    } else {
      setOffset((o) => o - 12);
    }
  };

  const nextBtnHandler = () => {
    if (page < 5) setPage((c) => c + 1);
    else setPage((c) => (c = 1));

    if (offset == 48) {
      setOffset(0);
    } else {
      setOffset((o) => o + 12);
    }
  };

  const domesticBtnHandler = () => {
    setPage(1);
    setOffset(0);
    setSelection("KR");
  };

  const abroadBtnHandler = () => {
    setPage(1);
    setOffset(0);
    setSelection("ES");
  };

  useEffect(() => {
    dispatch(homeAction.getNewReleaseAlbums(selection, offset));
    console.log("USEEFFECT ", offset);
  }, [selection, page]);
  return (
    <Container>
      <Row>
        <div className={styles.wrap}>
          <Col md={8} className={styles.colum1}>
            <div className={styles.albumbox}>
              <ul className={styles.titleBox}>
                <li>최신앨범</li>
                <li className={styles.menu} onClick={domesticBtnHandler}>
                  국내
                </li>
                <li className={styles.menu} onClick={abroadBtnHandler}>
                  국외
                </li>
                <li
                  className={`${styles.menuBtn} ${styles.nextBtn}`}
                  onClick={nextBtnHandler}
                >
                  &#62;
                </li>
                <li
                  className={`${styles.menuBtn} ${styles.prevBtn}`}
                  onClick={prevBtnHandler}
                >
                  &#60;
                </li>
                <li className={styles.menu2}>{page}/5</li>
              </ul>
            </div>
            <div className={styles.albums_list}>
              {newRelease.length > 0
                ? newRelease.map((item) => <Album item={item} />)
                : ""}
            </div>
          </Col>
          <Col md={4} className={styles.column2}>
            <div class={styles.slide_banner}>
              <div class={styles.slide_item}>
                <a href="#">
                  <img src="./imgs/default.jpg" alt="" />
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default NewMusic;
