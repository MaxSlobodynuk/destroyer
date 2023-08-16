import React from 'react'
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HeartIcon } from "../../../../assets/heartPhone.svg";
import { ReactComponent as UserPhone } from "../../../../assets/user-phone.svg";
import { ReactComponent as ShoppingPhone } from "../../../../assets/shopping-phone.svg";
import { ReactComponent as ListPhone } from "../../../../assets/list-phone.svg";


const Navigation = () => {
  return (
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
  );
}

export default Navigation