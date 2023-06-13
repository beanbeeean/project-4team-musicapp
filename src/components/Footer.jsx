import React from "react";
import { Container } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import "./footer.css";
const Footer = () => {
  return (
    <Container className="footer_container">
      <div className="footer_copyright">CopyRight@ BTC Developer TEAM 4</div>
      <div className="footer_member">
        LEADER : <span>홍재희</span> | PHONE : <span>010.9111.6653</span> |
        EMAIL : <span>beanbeeean@gmail.com</span>
        <a
          className="footer_link"
          target="_blank"
          href="https://github.com/beanbeeean"
        >
          <GoMarkGithub />
        </a>
      </div>
      <div className="footer_member">
        MEMBER : <span>이시영</span> | PHONE : <span>010.9111.6653</span> |
        EMAIL : <span>beanbeeean@gmail.com</span>
        <a
          className="footer_link"
          target="_blank"
          href="https://github.com/siyeong1013"
        >
          <GoMarkGithub />
        </a>
      </div>
      <div className="footer_member">
        MEMBER : <span>강동훈</span> | PHONE : <span>010.9111.6653</span> |
        EMAIL : <span>beanbeeean@gmail.com</span>
        <a
          className="footer_link"
          target="_blank"
          href="https://github.com/gilgan9852"
        >
          <GoMarkGithub />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
