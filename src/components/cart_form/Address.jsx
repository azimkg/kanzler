import React, { useState } from "react";

const Address = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  function close() {
    if (check1) {
      setCheck1(!check1);
    }
    setCheck(false);
  }
  function view() {
    if (check1) {
      setCheck1(false);
    }
    setCheck(true);
  }
  function close1() {
    if (check) {
      setCheck(!check);
    }
    setCheck1(false);
  }
  function view2() {
    if (check) {
      setCheck(false);
    }

    setCheck1(true);
  }

  return (
    <div className="delivary_address">
      <h2 className="delivary_address-title">Доставка</h2>
      <div className="delivary_address-order">
        <h3 className="order_address-title">Способ доставки</h3>
        <div className="order_address-block">
          {check ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={close}
            >
              <circle cx="10" cy="10" r="10" fill="#EA5A5A" />
              <path d="M5 9.5L8.68421 13L15 7" stroke="white" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={view}
            >
              <circle
                cx="10"
                cy="10"
                r="9.5"
                stroke="black"
                stroke-opacity="0.1"
              />
            </svg>
          )}

          <p className="order_address-text">Самовывоз</p>
          <a className="order_address-span" href="#">
            режим работы магазина>
          </a>
        </div>
        <div className="order_address-block">
          {check1 ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={close1}
            >
              <circle cx="10" cy="10" r="10" fill="#EA5A5A" />
              <path d="M5 9.5L8.68421 13L15 7" stroke="white" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={view2}
            >
              <circle
                cx="10"
                cy="10"
                r="9.5"
                stroke="black"
                stroke-opacity="0.1"
              />
            </svg>
          )}
          <p className="order_address-text">Доставка</p>
          <a className="order_address-span" href="#">
            условия доставки >
          </a>
        </div>
      </div>
      <div className="delivary_address-form">
        <h3 className="order_address-title">Адрес доставки</h3>
        <form className="order_form">
          <div className="order_form-blocks">
            <label className="order_form-label">Страна</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="Кыргызстан"
            />
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Город</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="Бишкек"
            />
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Улица</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="Чуй 345"
            />
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Квартира</label>
            <input type="text" className="order_form-inp" placeholder="53" />
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Дом</label>
            <input type="text" className="order_form-inp" placeholder="1" />
          </div>
        </form>
        <h4 className="form_for-commTitle">
          Указать домофон, этаж, подъезд и комментарий к адресу
        </h4>
        <div className="order_form-blockForComm">
          <label className="order_form-label">Комментарий</label>
          <input type="text" className="order_form-inp" placeholder="" />
        </div>
      </div>
    </div>
  );
};

export default Address;
