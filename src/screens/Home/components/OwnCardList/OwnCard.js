import React, { useState } from "react";
import css from "./OwnCard.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Rectangle } from "../../../../assets/rectangle.svg";
import { ReactComponent as HeartClick } from "../../../../assets/heart-click.svg";
import { ReactComponent as HeartSaved } from "../../../../assets/heart-saved.svg";
import { ReactComponent as HeartPhone } from "../../../../assets/heart-phone.svg";
import { ReactComponent as HeartIcon } from "../../../../assets/heartPhone.svg";
import { ReactComponent as UserPhone } from "../../../../assets/user-phone.svg";
import { ReactComponent as ShoppingPhone } from "../../../../assets/shopping-phone.svg";
import { ReactComponent as ListPhone } from "../../../../assets/list-phone.svg";

const OwnCardList = () => {
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
    {
      id: 7,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
    {
      id: 8,
      title: "Тактичний костюм idoger G3...",
      paragraph: "799 ₴ / дроп ціна",
      sale: "НОВИНКА",
      imageUrl: "https://picsum.photos/285/302",
      rating: 2,
    },
  ];

  return (
    <div className={css.containerTitleSvg}>
      <div className={css.titleSvg}>
        <svg
          href="http://www.w3.org/2000/svg"
          width="32"
          height="4"
          className={css.icon}
        >
          <Rectangle />
        </svg>
        <h2 className={css.ownTitle}>Новинки</h2>
        <svg
          href="http://www.w3.org/2000/svg"
          width="32"
          height="4"
          className={css.icon}
        >
          <Rectangle />
        </svg>
      </div>
      <p className={css.ownParagraph}>
        Інтернет-магазин BuyMe — це доступні ціни та широкий асортимент товарів
        зі щоденним оновленням
      </p>

      <div className={css.phoneNavigationContainer}>
        <ul className={css.phoneNavigation}>
          <li className={css.phoneNavigationItem}>
            <NavLink to="/">
              <div className={css.iconContainerPhone}>
                <div
                  href="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className={css.iconPhoneNavigation}
                >
                  <ListPhone />
                </div>
                <span className={css.svgTitle}>Каталог</span>
              </div>
            </NavLink>
          </li>

          <li className={css.phoneNavigationItem}>
            <NavLink to="/">
              <div className={css.iconContainerPhone}>
                <div
                  href="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className={css.iconPhoneNavigation}
                >
                  <ShoppingPhone />
                </div>
                <span className={css.svgTitle}>Кошик</span>
              </div>
            </NavLink>
          </li>

          <li className={css.phoneNavigationItem}>
            <NavLink to="/desirable">
              <div className={css.iconContainerPhone}>
                <div
                  href="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className={css.iconPhoneNavigation}
                >
                  <HeartIcon />
                </div>
                <span className={css.svgTitle}>Бажане</span>
              </div>
            </NavLink>
          </li>

          <li className={css.phoneNavigationItem}>
            <NavLink to="/">
              <div className={css.iconContainerPhone}>
                <div
                  href="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className={css.iconPhoneNavigation}
                >
                  <UserPhone />
                </div>
                <span className={css.svgTitle}>Кабінет</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={css.containerOwnCard}>
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
        <button className={css.ownButton}>Дивитися усі</button>
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
    <div className={css.containerImgOwn}>
      <div className={css.ownSvgOverlay} onClick={handleClick}>
        {isClicked ? (
          <HeartClick className={css.svgOverlay} />
        ) : (
          <HeartSaved className={css.svgOverlay} />
        )}
      </div>
      <img className={css.ownImg} src={imageUrl} alt={title} />
      <div className={css.containerFrame}>
        <div className={css.frame}>
          <span className={css.titleFrame}>{sale}</span>
        </div>
        <h3 className={css.titleOwn}>{title}</h3>
        <div className={css.rating}>
          <span className={css.starsContainer}>{stars}</span>
          <span className={css.emptyStarsContainer}>{emptyStars}</span>
        </div>
        <p className={css.paragraphOwn}>{paragraph}</p>
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

export default OwnCardList;
