import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import Address from "./Address";
import Orders from "./Orders";
import ProductListOfCart from "./ProductListOfCart";

const MainCart = () => {
  const { getCart, cart, cartLength } = useContext(cartContext);
  const [elem, setElem] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    getCart();
    setElem(cart.totalPrice);
  }, [cart.totalPrice]);

  useEffect(() => {
    function handleScroll() {
      const firstElem = document.querySelector(".delivary_address-order");
      const topPos = firstElem.getBoundingClientRect().top + window.scrollY;

      if (window.scrollY < topPos) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container main">
      <ProductListOfCart cart={cart} getCart={getCart} />
      <Orders />
      <Address />
      <div
        className={isFixed ? "form_absolute fixed" : "form_absolute absoluted"}
      >
        <h2 className="form_absolute-title">Стоимость заказа</h2>
        <div className="form_absolute-block">
          <p className="form_absolute-text">Товары({cartLength})</p>
          <p className="form_absolute-text">{elem}</p>
        </div>
        <div className="form_absolute-block">
          <p className="form_absolute-text">Доставка</p>
          <p className="form_absolute-text">Бесплатно</p>
        </div>
        <div className="form_absolute-line"></div>
        <div className="form_absolute-block">
          <p className="form_absolute-textbold">Итого</p>
          <p className="form_absolute-textRed">{elem}</p>
        </div>
        <button className="form_absolute-btn">Подтвердить заказ</button>
        <p className="form_absolute-main">
          Подтверждая заказ, я принимаю условия
          <a href="#"> пользовательского соглашения</a>
        </p>
      </div>
    </div>
  );
};

export default MainCart;
