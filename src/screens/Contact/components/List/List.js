import React from 'react'
import css from "./List.module.css";
import { NavLink } from "react-router-dom";

const List = () => {
    const cards = [
      {
        id: 1,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 2,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 3,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 4,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 5,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 6,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 7,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 8,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 9,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 10,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 11,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 12,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
      {
        id: 13,
        title: "Військторг",
        imageUrl: "https://picsum.photos/168",
      },
    ];

  return (
    <div className={css.list}>
      <div className={css.listPage}>
        <NavLink to="/">
          <p className={css.page}>Головна</p>
        </NavLink>
        <span className={css.betweenPage}>/</span>
        <NavLink to="/">
          <p className={css.page}>Каталог</p>
        </NavLink>
      </div>
      <h2 className={css.title}>Каталог</h2>

      <div className={css.containerCard}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
      
    </div>
  );
}

const Card = ({ title, imageUrl }) => {
  return (
    <div className={css.containerImgCard}>
      <img className={css.cardImg} src={imageUrl} alt={title} />
      <h3 className={css.titleCard}>{title}</h3>
    </div>
  );
};

export default List