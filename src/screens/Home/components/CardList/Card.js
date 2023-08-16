import React from 'react'
import css from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Rectangle } from "../../../../assets/rectangle.svg";


const CardList = () => {
    const cards = [
      {
        id: 1,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 2,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 3,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 4,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 5,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 6,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 7,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 8,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 9,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 10,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 11,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 12,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
      {
        id: 13,
        title: "Військторг",
        imageUrl: "https://picsum.photos/72",
      },
    ];


  return (
    <div className={css.containerListCard}>
      <div className={css.titleSaleSvg}>
        <svg
          href="http://www.w3.org/2000/svg"
          width="32"
          height="4"
          className={css.icon}
        >
          <Rectangle />
        </svg>
        <h2 className={css.containerTitleCard}>Категорії</h2>
        <svg
          href="http://www.w3.org/2000/svg"
          width="32"
          height="4"
          className={css.iconSale}
        >
          <Rectangle />
        </svg>
      </div>
      <p className={css.cardParagraph}>
        В онлайн-каталозі BuyMe представлено близько 100 000 найменувань одягу,
        електроніки, меблів та інших товарів для усіх сфер життя
      </p>

      <div className={css.containerCard}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
      <NavLink to="/contact">
        <div className={css.cardButtonContainer}>
          <button className={css.cardButton}>Дивитися усі</button>
        </div>
      </NavLink>
    </div>
  );
};

const Card = ({ title, imageUrl }) => {
  return (
    <div className={css.containerImgCard}>
      <img className={css.cardImg} src={imageUrl} alt={title} />
      <h3 className={css.titleCard}>{title}</h3>
    </div>
  );
};

export default CardList;