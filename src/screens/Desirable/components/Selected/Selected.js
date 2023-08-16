import React, { useState } from "react";
import css from "./Selected.module.css";
import { ReactComponent as CheckboxBlank } from "../../../../assets/checkbox-blank.svg";
import { ReactComponent as Checkbox } from "../../../../assets/checkbox.svg";
import { ReactComponent as HeartPhone } from "../../../../assets/heart-phone.svg";

const Selected = () => {
  const things = [
    {
      id: 1,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
    {
      id: 2,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
    {
      id: 3,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
    {
      id: 4,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
    {
      id: 5,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
    {
      id: 6,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
  ];

  return (
    <div className={css.selectedContainer}>
      <div className={css.selectedTitleContainer}>
        <h2 className={css.selectedTitle}>Вподобані товари</h2>
        <p className={css.selectedParagrph}>Видалити обрані</p>
      </div>

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
      <div className={css.ownButtonContainer}>
        <button className={css.ownButton}>Видалити обрані</button>
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
          <Checkbox className={css.svgOverlay} />
        ) : (
          <CheckboxBlank className={css.svgOverlay} />
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
        <div className={css.buttonPhoneContainer}>
          <button className={css.buttonPhone}>Купити</button>
          <svg
            href="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className={css.iconButtonPhone}
          >
            <HeartPhone />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default Selected;
