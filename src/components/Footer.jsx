import React from "react";
import logo from "../assets/logo.svg";
import studio from "../assets/mstudio.svg";
import mobile from "../assets/mobile.svg";
import phone from "../assets/phones.svg";
import ins from "../assets/ins.svg";
import fee from "../assets/fee.svg";
import wha from "../assets/wha.svg";
import k from "../assets/kanzler.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_title-block">
          <h2 className="footer_title">Kanzler&Bürger</h2>
          <span className="footer_title-line"></span>
        </div>
        <div className="footer_lists">
          <ul className="footer_listUl">
            <li className="footer_listLiTitle">Меню</li>
            <li className="footer_listLi">Каталог</li>
            <li className="footer_listLi">Акции</li>
            <li className="footer_listLi">Популярные товары</li>
            <li className="footer_listLi">Новинки</li>
            <li className="footer_listLi">Новости</li>
            <li className="footer_listLi">О компании</li>
            <li className="footer_listLi">Контакты</li>
            <li className="li_logoImg1">
              <img src={logo} alt="logo" />
            </li>
          </ul>
          <ul className="footer_listUl">
            <li className="footer_listLiTitle">Категории</li>
            <li className="footer_listLi">Бумага</li>
            <li className="footer_listLi">Письмо и графика</li>
            <li className="footer_listLi">Канц товары</li>
            <li className="footer_listLi">Художественные товары</li>
            <li className="footer_listLi">Творчество</li>
            <li className="footer_listLi">Полиграфические материалы</li>
            <li className="footer_listLi">Распродажи</li>
            <li className="footer_listLi">Офисное оборудование</li>
            <li className="footer_listLi">Игры и игрушки</li>
            <li className="footer_listLi">Сувенирная продукция</li>
          </ul>
          <ul className="footer_listUl">
            <li className="footer_listLiTitle">Контакты</li>
            <li className="footer_listAddress">Огонбаева, 222</li>
            <li className="footer_listLi">
              <img src={mobile} alt="mobile" className="list_img" />
              0777 90 22 33
            </li>
            <li className="footer_listLi">
              <img src={phone} alt="phone" className="list_img" />
              0312 90 22 33
            </li>
            <li className="footer_listAddress">Эркиндик, 7</li>
            <li className="footer_listLi">
              <img src={mobile} alt="mobile" className="list_img" />
              0777 90 22 34
            </li>
            <li className="footer_listLi">
              <img src={phone} alt="phone" className="list_img" />
              0312 90 22 34
            </li>
            <li className="footer_listAddress">Уметалиева, 84</li>
            <li className="footer_listLi">
              <img src={mobile} alt="mobile" className="list_img" />
              0777 90 22 36
            </li>
            <li className="footer_listLi">
              <img src={phone} alt="phone" className="list_img" />
              0312 90 22 36
            </li>
          </ul>
          <ul className="footer_listUl">
            <li className="footer_listLiTitle">Мы в соц сетях</li>
            <li className="footer_listLi">
              <img src={ins} alt="instagram" className="list_img" />
              Instagram
            </li>
            <li className="footer_listLi">
              <img src={fee} alt="instagram" className="list_img" />
              Facebook
            </li>
            <li className="footer_listLi">
              <img src={wha} alt="instagram" className="list_img" />
              What’s App
            </li>
            <li className="li_logoImg2">
              <img src={studio} alt="studio" />
            </li>
          </ul>
        </div>
        <div className="footer_down-line"></div>
        <h4 className="footer_down-text">
          Kanzler & Burger (c) 2017. All rights reserved
        </h4>
      </div>
      <img src={k} alt="kanzler" className="absolute" />
    </div>
  );
};

export default Footer;
