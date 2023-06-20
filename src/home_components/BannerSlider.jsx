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
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      <div className={`${styles.slider_item} ${styles.slider_item1}`}>
        <img
          src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230619040202.png/melon/quality/80"
          alt=""
        />
      </div>
      <div className={`${styles.slider_item} ${styles.slider_item2}`}>
        <img
          src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230619040303.png/melon/quality/80"
          alt=""
        />
      </div>
    </Slider>
  );
}
