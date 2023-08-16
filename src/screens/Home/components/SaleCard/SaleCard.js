import React, { useState } from "react";
import css from "./SaleCard.module.css";
import { ReactComponent as Rectangle } from "../../../../assets/rectangle.svg";
import { ReactComponent as HeartClick } from "../../../../assets/heart-click.svg";
import { ReactComponent as HeartSaved } from "../../../../assets/heart-saved.svg";

const SaleCard = () => {
  const things = [
    {
      id: 1,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 2,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 3,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 4,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 5,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 6,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 7,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
    {
      id: 8,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴",
      sale: "-25%",
      imageUrl: "https://picsum.photos/168/179",
      rating: 2,
    },
  ];

  return (
    <div className={css.containerTitleSale}>
      <div className={css.titleSaleSvg}>
        <svg
          href="http://www.w3.org/2000/svg"
          width="32"
          height="4"
          className={css.icon}
        >
          <Rectangle />
        </svg>
        <h2 className={css.saleTitle}>Акції</h2>
        <svg
          href="http://www.w3.org/2000/svg"
          width="32"
          height="4"
          className={css.iconSale}
        >
          <Rectangle />
        </svg>
      </div>
      <p className={css.saleParagraph}>
        Інтернет-магазин BuyMe регулярно проводить масштабний розпродаж товарів.
        Інколи знижки сягають 75% на одяг, електроніку та інші товари
      </p>

      <div className={css.containerSaleCard}>
        {things.map((thing) => (
          <Card
            key={thing.id}
            title={thing.title}
            imageUrl={thing.imageUrl}
            paragraph={thing.paragraph}
            sale={thing.sale}
            rating={thing.rating}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, imageUrl, paragraph, sale, rating }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className={`${css.star} ${css.starYellow}`}>
      &#9733;
    </span>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <span key={index + rating} className={css.star}>
      &#9734;
    </span>
  ));

  return (
    <div className={css.containerImgSale}>
      <div className={css.saleSvgOverlay} onClick={handleClick}>
        {isClicked ? (
          <HeartClick className={css.svgOverlay} />
        ) : (
          <HeartSaved className={css.svgOverlay} />
        )}
      </div>
      <img className={css.saleImg} src={imageUrl} alt={title} />
      <div className={css.containerFrameSale}>
        <div className={css.saleframe}>
          <span className={css.titleFrameSale}>{sale}</span>
        </div>
        <h3 className={css.titleSale}>{title}</h3>
        <div className={css.rating}>
          <span className={css.starsContainer}>{stars}</span>
          <span className={css.emptyStarsContainer}>{emptyStars}</span>
        </div>
        <p className={css.paragraphSale}>{paragraph}</p>
      </div>
    </div>
  );
};

export default SaleCard;
