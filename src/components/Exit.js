import React, { useState } from "react";
import css from "./Exit.module.css";
import { ReactComponent as CrossExit } from "../assets/cross-exit.svg";

const Exit = ({ isOpen, onClose }) => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2 className={css.titleButton}>Вхід</h2>
          <button className={css.closeButton}>
            <div
              href="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className={css.crossExit}
            >
              <CrossExit />
            </div>
          </button>
        </div>
        <div className={css.line}></div>
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
            <span className={css.submitButtonTitle}>Відправити</span>
          </button>
        </div>
        <div className={css.registerButton}>Зареєструватися</div>
      </div>
    </div>
  );
};

export default Exit;
