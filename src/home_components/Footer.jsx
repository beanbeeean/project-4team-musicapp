import React from "react";
import { Container } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import styles from "./css/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Container className={styles.footer_wrap}>
        <div className={styles.footer_options}>
          <span>About PLI</span>
          <span>Service</span>
          <span>TEAM4</span>
          <span>FAQ</span>
          <span>Partner</span>
        </div>
        <div className={styles.footer_copyright}>
          CopyRight@ BTC Developer TEAM 4
          <a
            className={styles.footer_link}
            target="_blank"
            href="https://github.com/beanbeeean/project-4team-musicapp"
          >
            <GoMarkGithub />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
