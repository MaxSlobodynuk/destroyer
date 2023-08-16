import React from 'react'
import css from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Item } from "../assets/instagramIcon.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as PhoneDesk } from "../assets/logo-phone.svg";

const Footer = () => {
  return (
    <div className={css.containerFooter}>
      <div className={css.footerLogo}>
        <NavLink to="/">
          <div href="http://www.w3.org/2000/svg" className={css.logolink}>
            <Logo />
          </div>
        </NavLink>
      </div>

      <div className={css.footerLogoDesk}>
        <NavLink to="/">
          <div href="http://www.w3.org/2000/svg" className={css.logolinkDesk}>
            <PhoneDesk />
          </div>
        </NavLink>
      </div>

      <ul className={css.containerList}>
        <li className={css.footerList}>
          <NavLink to="/" className={css.footerTitle}>
            Про нас
          </NavLink>
        </li>

        <li className={css.footerList}>
          <NavLink to="/" className={css.footerTitle}>
            Контакти
          </NavLink>
        </li>

        <li className={css.footerList}>
          <NavLink to="/" className={css.footerTitle}>
            Блог
          </NavLink>
        </li>

        <li className={css.footerList}>
          <NavLink to="/" className={css.footerTitle}>
            Політика конфіденційності
          </NavLink>
        </li>
      </ul>

      <div className={css.footerPhoneDesk}>
        <NavLink to="/">
          <div
            href="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className={css.footerIconPhoneDesk}
          >
            <Phone />
            <span className={css.svgTitleDesk}>0 800 32 32 44</span>
          </div>
        </NavLink>
      </div>

      <ul className={css.footerIconList}>
        <li className={css.footerItem}>
          <NavLink to="/">
            <div className={css.footerItemContainer}>
              <div
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.footerIcon}
              >
                <Item />
              </div>
            </div>
          </NavLink>
        </li>

        <li className={css.footerItem}>
          <NavLink to="/">
            <div className={css.footerItemContainer}>
              <div
                href="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={css.footerIcon}
              >
                <Facebook />
              </div>
            </div>
          </NavLink>
        </li>
      </ul>

      <div className={css.footerPhone}>
        <NavLink to="/">
          <div
            href="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className={css.footerIconPhone}
          >
            <Phone />
            <span className={css.svgTitle}>0 800 32 32 44</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;