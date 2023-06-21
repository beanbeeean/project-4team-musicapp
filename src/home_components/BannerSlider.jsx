import React from "react";
import Slider from "react-slick";
import styles from "./css/newMusic.module.css";
export default function BannerSlider() {
  const Banners = [
    "./imgs/banner1.png",
    "./imgs/banner2.png",
    "./imgs/banner3.png",
    "./imgs/banner4.png",
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      {Banners.map((item) => (
        <div className={`${styles.slider_item} ${styles.slider_item1}`}>
          <img src={item} alt="" />
        </div>
      ))}
    </Slider>
  );
}
