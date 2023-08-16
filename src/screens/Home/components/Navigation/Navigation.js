import React from "react";
import css from "./Navigation.module.css";
import { ReactComponent as Chat } from "../../../../assets/chat.svg";

const Navigation = () => {
  const handleChatClick = () => {
    window.location.href = "https://t.me/your_telegram_bot_username";
  };

  return (
    <div className={css.navigationButtonContainer}>
      <button className={css.navigationButton} onClick={handleChatClick}>
        <svg
          href="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={css.iconNavigation}
        >
          <Chat />
        </svg>
        Чат
      </button>
    </div>
  );
};

export default Navigation;
