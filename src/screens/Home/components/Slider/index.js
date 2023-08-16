import React, { useState } from "react";
import Slider from "react-slick";
import Item from "./Item";
import styles from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const customDot = (isActive) => (
    <span
      className={`${styles.customDot} ${isActive ? styles.activeDot : ""}`}
    />
  );

  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div className={styles.dotsContainer}>
        <ul className={styles.customDots}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => customDot(i === currentSlideIndex),
    beforeChange: (current, next) => {
      setCurrentSlideIndex(next);
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ITEMS = [
    {
      h1: "Текстиль",
      img: "https://picsum.photos/1440/524",
      subHeaderTitle: "Сучасно & Стильно",
      description:
        "Текстильні подушки з принтами зроблять будь-який будинок затишним саме в тому стилі та кольоровій гамі, яка потрібна вам",
    },
    {
      h1: "Текстиль",
      img: "https://picsum.photos/1440/524",
      subHeaderTitle: "Сучасно & Стильно",
      description:
        "Текстильні подушки з принтами зроблять будь-який будинок затишним саме в тому стилі та кольоровій гамі, яка потрібна вам",
    },
    {
      h1: "Текстиль",
      img: "https://picsum.photos/1440/524",
      subHeaderTitle: "Сучасно & Стильно",
      description:
        "Текстильні подушки з принтами зроблять будь-який будинок затишним саме в тому стилі та кольоровій гамі, яка потрібна вам",
    },
    {
      h1: "Текстиль",
      img: "https://picsum.photos/1440/524",
      subHeaderTitle: "Сучасно & Стильно",
      description:
        "Текстильні подушки з принтами зроблять будь-який будинок затишним саме в тому стилі та кольоровій гамі, яка потрібна вам",
    },
  ];
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {ITEMS.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
}
