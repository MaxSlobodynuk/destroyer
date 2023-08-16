import React from 'react'
import css from "./Product.module.css";

const Product = () => {
  const {
    title = "Тактичний костюм idoger G3...",
    paragraph = "799 ₴ / дроп ціна",
    description = "Костюм складається з сорочки Ubacs та штанів. До комплекту також входять запатентовані знімні наколінники та налокітники AirFlex Combat",
    imageUrl = "https://picsum.photos/345/371",
    rating = 4,
  } = {};


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
    <div className={css.containerProduct}>
      <img className={css.productImg} src={imageUrl} alt={title} />
      <div className={css.containerDescription}>
        <h3 className={css.titleProduct}>{title}</h3>
        <div className={css.rating}>
          <span className={css.starsContainer}>{stars}</span>
          <span className={css.emptyStarsContainer}>{emptyStars}</span>
        </div>
        <p className={css.paragraphProduct}>{paragraph}</p>
        <p className={css.descriptionProduct}>{description}</p>
        <div className={css.ownButtonContainer}>
          <button className={css.ownButton}>Купити</button>
        </div>
      </div>
    </div>
  );
}

export default Product