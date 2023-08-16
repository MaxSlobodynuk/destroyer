import React from "react";
import css from "./AboutUs.module.css";

const AboutUs = () => {
  const {
    title = "Економ свій час! Замовляй з BuyMe! ",
    description = "Ми — інтернет-магазин, де ти знайдеш все, що тобі потрібно: від жіночих туфельок до бронежилета, від гаджетів до газонокосарок і садової мебелі. Щодня тут відбувається понад 5 тисяч покупок.Купити одяг, взуття, аксесуари, чи товари для дому з BuyMe можна швидко і легко. Пропонуємо зручний варіант покупок — через мобільний додаток. Його можна завантажити і встановити на будь-який смартфон, де в декілька кліків можна замовити будь-які доступні товари.",
    img = "https://picsum.photos/317/317",
    type = "left",
  } = {};

  return (
    // <div className={type === "left" ? "leftContainer" : "rightContainer"}>
    <div className={css.aboutAllContainer}>
      <div className={css.aboutTextContainer}>
        <h2 className={css.aboutTitle}>{title}</h2>
        <p className={css.aboutParagraph}>{description}</p>
      </div>
      <div className={css.aboutImgContainer}>
        <img className={css.aboutImg} src={img} alt={title} />
      </div>
    </div>
  );
};

export default AboutUs;
