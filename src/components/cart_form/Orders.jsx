import React, { useState } from "react";

const Orders = () => {
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
    <>
      <div className="orders">
        <h2 className="order_title">Оформление заказа</h2>
        <form className="order_form">
          <div className="order_form-blocks">
            <label className="order_form-label">Имя</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="Татьяна"
            />
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Фамилия</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="Смолянинова"
            />
          </div>
          <div className="order_form-block">
            <div className="order_form-blocks_div1">
              <label className="order_form-label">Телефон</label>
              <input
                type="text"
                className="order_form-inp"
                placeholder="+996 555 50 50 50"
              />
            </div>
            <div className="order_form-blocks_div2">
              <label className="order_form-label">Доб</label>
              <input type="text" className="order_form-inp" placeholder="0" />
            </div>
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Email</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="Tatyana@gmail.com"
            />
          </div>
          <div className="order_form-blocks">
            <label className="order_form-label">Доп телефон или whatsapp</label>
            <input
              type="text"
              className="order_form-inp"
              placeholder="+996 555 50 50 50"
            />
          </div>
        </form>
      </div>
      <div className="order_check">
        <h2 className="order_check-title">Я</h2>
        <div className="order_check-block">
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
          <p className="order_check-text">Физическое лицо</p>
        </div>
        <div className="order_check-block">
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
          <p className="order_check-text">Юридическое лицо</p>
        </div>
      </div>
    </>
  );
};

export default Orders;
