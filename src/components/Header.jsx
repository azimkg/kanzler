import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import searchs from "../assets/search.svg";
import account from "../assets/account.svg";
import app from "../assets/app.svg";
import carts from "../assets/cart.svg";
import down from "../assets/down.svg";
import { cartContext } from "../context/cartContext";

const Header = () => {
  const { cartLength, cart } = useContext(cartContext);
  const [search, setSearch] = useState("");
  const [searchVis, setSearchVis] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const modalRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSearchVis(false);
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [search]);

  const filteredItems = cart.products?.filter((item) =>
    item.item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container header">
      <div className="header_logoPlace">
        <img className="header_logoPlace-img" src={logo} alt="logo" />
      </div>
      <div className="header_block one">
        <img className="header_block-img" src={app} alt="app" />
        <p className="header_block-text">Каталог</p>
        <img className="header_block-img" src={down} alt="down" />
      </div>
      <div className="header_block two">
        <img className="header_blockImg" src={searchs} alt="search" />
        <input
          type="search"
          className="header_block-search"
          placeholder="Найти товар"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchVis(false);
            setSearchVisible(true);
          }}
          onClick={() => setSearchVis(true)}
        />
        <div className="search_absolute" ref={modalRef}>
          {searchVisible
            ? filteredItems?.map((item) => (
                <div className="search_absolute-block" key={item.item.id}>
                  <div className="search_absolute-block1">
                    <img
                      className="search_absolute-img"
                      src={item.item.img}
                      alt="image"
                    />
                    <h4 className="search_absolute-title">{item.item.name}</h4>
                  </div>
                  <p className="search_absolute-title">{item.item.price}c</p>
                </div>
              ))
            : null}
          {searchVis
            ? cart.products?.slice(0, 2).map((item) => (
                <div className="search_absolute-block" key={item.item.id}>
                  <div className="search_absolute-block1">
                    <img
                      className="search_absolute-img"
                      src={item.item.img}
                      alt="image"
                    />
                    <h4 className="search_absolute-title">{item.item.name}</h4>
                  </div>
                  <p className="search_absolute-title">{item.item.price}c</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="header_block-left three">
        <div className="header_block-div">
          <span className="cart_res">{cartLength}</span>
          <img src={carts} alt="cart" />
        </div>
        <div className="header_block-div">
          <img src={account} alt="account" />
        </div>
      </div>
    </div>
  );
};

export default Header;
