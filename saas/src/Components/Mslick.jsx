import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../src/Styles/Mslick.module.css";
import phoneImg from '../Image/logo.png';
const slides = [1, 2, 3, 4, 5, 6];

function Mslick() {
  const [currentSlide, setCurrentSlide] = useState(0);
const slides = [phoneImg, phoneImg, phoneImg, phoneImg, phoneImg, phoneImg];

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: phoneImg,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderwrapper}>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          const total = slides.length;
          const pos = (index - currentSlide + total) % total;

          let positionClass = "";
          if (pos === 0) positionClass = "center";
          else if (pos === total - 2 || pos === -2) positionClass = "left-2";
          else if (pos === total - 1 || pos === -1) positionClass = "left-1";
          else if (pos === 1) positionClass = "right-1";
          else if (pos === 2) positionClass = "right-2";

          return (
            <div className={`${styles.slide} ${styles[positionClass]}`} key={index}>
              <img src={slide} alt={`Slide ${index}`} className={styles.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Mslick;

