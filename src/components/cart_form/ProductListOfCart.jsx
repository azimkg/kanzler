import React, { useContext, useEffect, useState } from "react";
import down from "../../assets/ip.svg";
import up from "../../assets/up.svg";

import { cartContext } from "../../context/cartContext";
import { products } from "../../data/data";

const ProductListOfCart = ({ cart, getCart }) => {
  const { addProductToCart, deleteFromCart, changeProductCount, cartLength } =
    useContext(cartContext);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    addAllProduct();
  }, []);
  function addAllProduct() {
    products?.map((item) => addProductToCart(item));
  }
  return (
    <div className="">
      <h1 className="title">Оформление заказа</h1>
      <div className="product_cart">
        <p className="product_cart-title" onClick={() => setVis(!vis)}>
          Корзина({cartLength})
        </p>
        {vis ? (
          <img
            className="product_cart-img"
            onClick={() => setVis(false)}
            src={down}
            alt="up"
          />
        ) : (
          <img
            className="product_cart-img"
            onClick={() => setVis(true)}
            src={up}
            alt="up"
          />
        )}
      </div>
      {vis ? (
        <table className="productCart_table">
          <tbody className="productCart_tbody">
            <tr className="productCart_th">
              <th className="productCart_photo all_text">Фото</th>
              <th className="productCart_name all_text">Название</th>
              <th className="productCart_artikul all_text">Артикул</th>
              <th className="productCart_sum all_text">Кол-во</th>
              <th className="productCart_price all_text">Цена</th>
              <th></th>
            </tr>
            {cart.products?.map((item) => (
              <>
                <div key={item.item.id} className="div_line"></div>
                <tr className="productCart_td">
                  <td className="productCart_photo all_text">
                    <img className="img_cart" src={item.item.img} alt="photo" />
                  </td>
                  <td className="productCart_name main_name">
                    {item.item.name}
                  </td>
                  <td className="productCart_artikul main_name">
                    {item.item.artikul}
                  </td>
                  <td className="productCart_sum main_summary">
                    <span
                      onClick={() =>
                        changeProductCount(item.count - 1, item.item.id)
                      }
                      className="span_incOrDec"
                    >
                      -
                    </span>
                    {item.count}
                    <span
                      onClick={() =>
                        changeProductCount(item.count + 1, item.item.id)
                      }
                      className="span_incOrDec"
                    >
                      +
                    </span>
                  </td>
                  <td className="productCart_price main_name-price">
                    {item.subPrice}с
                  </td>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    cursor="pointer"
                    onClick={() => deleteFromCart(item.item.id)}
                  >
                    <path
                      d="M1 1L7 7M13 13L7 7M7 7L13 1M7 7L1 13"
                      stroke="#EA5A5A"
                    />
                  </svg>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ProductListOfCart;
