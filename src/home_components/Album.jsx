import React from "react";
import styles from "./css/newMusic.module.css";

const Album = () => {
    return (
        <td>
            <a className={styles.album} href="#none">
                <span>제목</span>
                <img src="https://image.genie.co.kr///Y/IMAGE/IMG_ALBUM/083/908/754/83908754_1686533579970_1_68x68.JPG" />
            </a>
        </td>
    );
}

export default Album;