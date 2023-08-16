import React from 'react'
import css from "./MainRegistration.module.css";

const MainRegistration = () => {
  return (
    <div className={css.modalContent}>
          <h2 className={css.titleButton}>Реєстрація</h2>
        <div className={css.modalBody}>
          <label className={css.labelBody} htmlFor="phone">
            Ім'я
          </label>
          <input type="text" id="name" className={css.phoneCheckbox} />

          <label className={css.labelBody} htmlFor="phone">
            Телефон
          </label>
          <input
            type="text"
            id="phone"
            placeholder="+38 (0__) ___-__-__"
            className={css.phoneCheckbox}
          />
        </div>
        <p className={css.text}>
          Реєструючись, ви погоджуєтеся з умовами{" "}
          <a href="https://developer.mozilla.org" className={css.redText}>
            положення про обробку і захист персональних даних
          </a>{" "}
          та{" "}
          <a href="https://developer.mozilla.org" className={css.redText}>
            угодою користувача
          </a>
        </p>
        <div className={css.modalFooter}>
          <button className={css.submitButton}>
            <span className={css.submitButtonTitle}>Зареєструватися</span>
          </button>
        </div>
        <div className={css.registerButton}>Я вже зареєстрований</div>
      </div>
  )
}

export default MainRegistration