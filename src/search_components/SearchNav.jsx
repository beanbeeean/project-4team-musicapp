import React from "react";
import styles from "./css/search_nav.module.css";

const SearchNav = ({ setOption }) => {
  return (
    <ul className={`${styles.subnav}`}>
      <li onClick={() => setOption(0)}>모두</li>
      <li onClick={() => setOption(1)}>아티스트</li>
      <li onClick={() => setOption(2)}>곡</li>
      <li onClick={() => setOption(3)}>앨범</li>
    </ul>
  );
};

export default SearchNav;
