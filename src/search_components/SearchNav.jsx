import React, { useEffect } from "react";
import styles from "./css/search_nav.module.css";

const SearchNav = ({ option, setOption }) => {
  return (
    <ul className={`${styles.subnav}`}>
      <li
        className={option == 0 ? styles.search_nav_on : ""}
        onClick={() => setOption(0)}
      >
        모두
      </li>
      <li
        className={option == 1 ? styles.search_nav_on : ""}
        onClick={() => setOption(1)}
      >
        아티스트
      </li>
      <li
        className={option == 2 ? styles.search_nav_on : ""}
        onClick={() => setOption(2)}
      >
        곡
      </li>
      <li
        className={option == 3 ? styles.search_nav_on : ""}
        onClick={() => setOption(3)}
      >
        앨범
      </li>
    </ul>
  );
};

export default SearchNav;
