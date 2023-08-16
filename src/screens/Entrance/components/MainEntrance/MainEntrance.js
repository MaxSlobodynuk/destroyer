import React from 'react'
import { NavLink } from "react-router-dom";
import css from "./MainEntrance.module.css";

const MainEntrance = () => {
  return (
    <div className={css.modalContent}>
      <h2 className={css.titleButton}>Вхід</h2>
      <div className={css.modalBody}>
        <label className={css.labelBody} htmlFor="phone">
          Телефон
        </label>
        <input
          type="text"
          id="phone"
          placeholder="+38 (0__) ___-__-__"
          className={css.phoneCheckbox}
        />
        <div className={css.privacyCheckbox}>
          <label className={css.labeCheckbox} htmlFor="privacy">
            <input type="checkbox" id="privacy" className={css.checkbox} />
            <span className={css.fake}></span>
            Запам’ятати мене
          </label>
        </div>
      </div>
      <div className={css.modalFooter}>
        <button className={css.submitButton}>
          <span className={css.submitButtonTitle}>Увійти</span>
        </button>
      </div>
      <NavLink to="/registration">
        <div className={css.registerButton}>Зареєструватися</div>
      </NavLink>
    </div>
  );
}

export default MainEntrance