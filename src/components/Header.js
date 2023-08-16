import React, { useState } from "react";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Shopping } from "../assets/shopping.svg";
import { ReactComponent as List } from "../assets/list.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { ReactComponent as PhoneDesk } from "../assets/logo-phone.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";
import { ReactComponent as CrossMenu } from "../assets/cross-menu.svg";
import Categories from "./Categories";
import MenuComponent from "./Menu";

const Header = ({ setIsCatalogOpen, isCatalogOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className={css.containerHeader}>
      <div className={css.headerLogo}>
        <NavLink to="/">
          <div
            href="http://www.w3.org/2000/svg"
            width="180"
            height="40"
            className={css.logolink}
          >
            <Logo />
          </div>
        </NavLink>
      </div>
      <div className={css.headerLogoPhone}>
        <NavLink to="/">
          <div
            href="http://www.w3.org/2000/svg"
            width="132"
            height="29"
            className={css.logolinkPhone}
          >
            <PhoneDesk />
          </div>
        </NavLink>
      </div>
      <button
        className={css.catalogFrame}
        onClick={() => setIsCatalogOpen((prev) => !prev)}
      >
        <div
          href="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={css.iconFrame}
        >
          {isCatalogOpen ? <Cross /> : <List />}
        </div>
        <p className={css.titleFrame}>Каталог</p>
      </button>
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
              width="24"
              height="24"
              className={css.iconSearch}
            >
              <Search />
            </div>
          </button>
        </form>
      </div>
      <ul className={css.list}>
        <li className={css.iconList}>
          <NavLink to="/desirable">
            <div className={css.iconContainer}>
              <div
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.icon}
              >
                <Heart />
              </div>
              <span className={css.svgTitle}>Бажане</span>
            </div>
          </NavLink>
        </li>

        <li className={css.iconList}>
          <NavLink to="/">
            <div className={css.iconContainer}>
              <div
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.icon}
              >
                <Shopping />
              </div>
              <span className={css.svgTitle}>Кошик</span>
            </div>
          </NavLink>
        </li>

        <li className={css.iconList}>
          <NavLink to="/entrance">
            <div className={css.iconContainer}>
              <div
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.icon}
              >
                <User />
              </div>
              <span className={css.svgTitle}>Увійти</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className={css.menu} onClick={handleMenuClick}>
        {isMenuOpen ? <CrossMenu /> : <Menu />}
      </div>
      {isMenuOpen && <MenuComponent />}
    </div>
  );
};

export default Header;
