import React from "react";
import Slider from "react-slick";
import styles from "./css/newMusic.module.css";
import { useNavigate } from "react-router-dom";
const BannerImg = ({ item, idx }) => {
  const navigate = useNavigate();
  const movePage = (idx) => {
    if (idx == 1) {
      navigate("/playlist");
    } else if (idx == 2) {
      navigate("/charts");
    } else {
      return;
    }
  };
  return (
    <div className={`${styles.slider_item} ${styles.slider_item1}`}>
      <img src={item} alt="" onClick={() => movePage(idx)} />
    </div>
  );
};
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
      {Banners.map((item, idx) => (
        <BannerImg item={item} key={idx} idx={idx} />
      ))}
    </Slider>
  );
}
