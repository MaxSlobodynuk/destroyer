import React from 'react'
import css from "./Discount.module.css";
import { ReactComponent as Gift } from "../../../../assets/gift.svg";

const Discount = () => {
  return (
    <div className={css.containerDiscount}>
      <div>
        <svg
          href="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          className={css.iconDiscount}
        >
          <Gift />
        </svg>
        <h1 className={css.titleDiscount}>50% Знижка на улюблені товари</h1>
        <p className={css.paragraphDiscount}>
          Варто поспішити, оскільки кількість обмежена
        </p>
      </div>
    </div>
  );
}

export default Discount