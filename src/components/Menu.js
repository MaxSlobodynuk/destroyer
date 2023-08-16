import React, { useEffect, useRef } from "react";
import css from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HeartBlack } from "../assets/heart-black.svg";
import { ReactComponent as UserBlack } from "../assets/user-black.svg";
import { ReactComponent as ShoppingBlack } from "../assets/shopping-black.svg";
import { ReactComponent as ListBlack } from "../assets/list-black.svg";
import { ReactComponent as SearchPhone } from "../assets/search-phone.svg";
import { ReactComponent as PhoneBlack } from "../assets/phone-black.svg";
import { ReactComponent as InstagramBlack } from "../assets/instagram-black.svg";
import { ReactComponent as FacebookBlack } from "../assets/facebook-black.svg";

const Menu = () => {
  return (
    <div className={css.menu}>
      <div className={css.formDiv}>
        <form className={css.search} id="search-form">
          <input
            className={css.input}
            type="text"
            placeholder="Введіть назву товару або артикул"
          />
          <button type="submit" className={css.buttonSearch}>
            <div
              href="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className={css.iconSearch}
            >
              <SearchPhone />
            </div>
          </button>
        </form>
      </div>
      <ul className={css.menuNavigation}>
        <li className={css.menuNavigationItem}>
          <NavLink to="/">
            <div className={css.iconContainerMenu}>
              <svg
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.iconMenuNavigation}
              >
                <ListBlack />
              </svg>
              <span className={css.svgTitleMenu}>Каталог</span>
            </div>
          </NavLink>
        </li>

        <li className={css.menuNavigationItem}>
          <NavLink to="/">
            <div className={css.iconContainerMenu}>
              <svg
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.iconMenuNavigation}
              >
                <ShoppingBlack />
              </svg>
              <span className={css.svgTitleMenu}>Кошик</span>
            </div>
          </NavLink>
        </li>

        <li className={css.menuNavigationItem}>
          <NavLink to="/">
            <div className={css.iconContainerMenu}>
              <svg
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.iconMenuNavigation}
              >
                <HeartBlack />
              </svg>
              <span className={css.svgTitleMenu}>Бажане</span>
            </div>
          </NavLink>
        </li>

        <li className={css.menuNavigationItem}>
          <NavLink to="/">
            <div className={css.iconContainerMenu}>
              <svg
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.iconMenuNavigation}
              >
                <UserBlack />
              </svg>
              <span className={css.svgTitleMenu}>Увійти</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className={css.menuLine}></div>
      <div className={css.menuPhone}>
        <NavLink to="/">
          <div
            href="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className={css.menuIconPhone}
          >
            <PhoneBlack />
            <span className={css.menuTitle}>0 800 32 32 44</span>
          </div>
        </NavLink>
      </div>

      <ul className={css.menuIconList}>
        <li className={css.menuItem}>
          <NavLink to="/">
            <svg
              href="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className={css.menuIcon}
            >
              <InstagramBlack />
            </svg>
          </NavLink>
        </li>

        <li className={css.menuItem}>
          <NavLink to="/">
            <svg
              href="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className={css.menuIcon}
            >
              <FacebookBlack />
            </svg>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
