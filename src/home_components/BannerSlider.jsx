import React from "react";
import Slider from "react-slick";
import styles from "./css/newMusic.module.css";
export default function BannerSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Slider {...settings}>
      <div className={styles.slider_item}>
        <img src="./imgs/default.jpg" alt="" />
      </div>
      <div>
        <img src="./imgs/logo.png" alt="" />
      </div>
    </Slider>
  );
}
