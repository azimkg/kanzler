import React, { useContext, useState } from "react";
import letter from "../assets/letter.svg";
import phone from "../assets/phone.svg";
import down from "../assets/down.svg";
import menu from "../assets/menu.svg";
import cart from "../assets/cart.svg";
import acc from "../assets/account.svg";

import { cartContext } from "../context/cartContext";

const Navbar = () => {
  const { cartLength } = useContext(cartContext);
  const [burger, setBurger] = useState(false);

  return (
    <div className="navbar">
      {burger ? (
        <div className="navbar_burger">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={() => setBurger(false)}
          >
            <path d="M1 1L7 7M13 13L7 7M7 7L13 1M7 7L1 13" stroke="black" />
          </svg>
          <ul className="navbar_burger-block">
            <li className="navbar_burger-list list_actived">Акции</li>
            <li className="navbar_burger-list list_actived">Каталог</li>
            <li className="navbar_burger-list list_actived">
              Популярные товары
            </li>
            <li className="navbar_burger-list list_actived">Новинки</li>
            <li className="navbar_burger-list list_actived">Новости</li>
            <li className="navbar_burger-list list_actived">О компании</li>
            <li className="navbar_burger-list list_actived">Контакты</li>
          </ul>
          <ul className="navbar_burger-block burger_block">
            <li className="navbar_burger-list list_actived">
              <img className="navbar_block-listImg" src={letter} alt="letter" />
              <a href="#" className="navbar_burger-listA">
                info@Kanzler.kg
              </a>
            </li>
            <li className="navbar_burger-list border_red">
              <img className="navbar_block-listImg" src={phone} alt="phone" />
              <a href="#" className="navbar_burger-listA text_red">
                Позвонить
              </a>
              <img className="navbar_block-listImg" src={down} alt="down" />
            </li>
          </ul>
        </div>
      ) : null}
      <div className="container navbar_main">
        <img
          src={menu}
          alt="menu"
          onClick={() => setBurger(true)}
          className="burger_menu"
        />
        <div className="burger_menu-block">
          <img src={cart} alt="cart" className="burger_menu-img" />
          <span className="cart_length">{cartLength}</span>
          <img src={acc} alt="acc" className="burger_menu-img" />
        </div>
        <ul className="navbar_block">
          <li className="navbar_block-list active">Каталог</li>
          <li className="navbar_block-list active">Акции</li>
          <li className="navbar_block-list active">Популярные товары</li>
          <li className="navbar_block-list active">Новинки</li>
          <li className="navbar_block-list active">Новости</li>
          <li className="navbar_block-list active">О компании</li>
          <li className="navbar_block-list active">Контакты</li>
        </ul>
        <ul className="navbar_block">
          <li className="navbar_block-list active">
            <img className="navbar_block-listImg" src={letter} alt="letter" />
            <a href="#" className="navbar_block-listA">
              info@Kanzler.kg
            </a>
          </li>
          <li className="navbar_block-list border_red">
            <img className="navbar_block-listImg" src={phone} alt="phone" />
            <a href="#" className="navbar_block-listA text_red">
              Позвонить
            </a>
            <img className="navbar_block-listImg" src={down} alt="down" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
