import React from "react";
import { Container } from "react-bootstrap";
import styles from "./css/search_nav.module.css";

const SearchNav = ({}) => {
    return (
        <ul className={`${styles.subnav}`}>
            <li>모두</li>
            <li>아티스트</li>
            <li>곡</li>
            <li>플레이리스트</li>
            <li>앨범</li>
            <li>장르 및 무드</li>
            <li>프로필</li>
        </ul>    
);
};

export default SearchNav;