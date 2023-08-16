import React from 'react'
import css from "./Verification.module.css";
import { ReactComponent as CrossExit } from "../assets/cross-exit.svg";

const Verification = () => {
    return (
      <div className={css.modal}>
        <div className={css.modalContent}>
          <div className={css.modalHeader}>
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
          <p className={css.text}>
            Для підтвердження входу в обліковий запис, відкрийте{" "}
            <a href="https://developer.mozilla.org" className={css.blackText}>
              Telegram
            </a>{" "}
            та натисніть кнопку з цифрою:
          </p>
          <span className={css.number}>67</span>
          <div className={css.modalFooter}>
            <button className={css.submitButton}>
              <span className={css.submitButtonTitle}>Відновлення доступу</span>
            </button>
            <button className={css.abolitionButton}>
              <span className={css.abolitionButtonTitle}>Відмінити вхід</span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Verification