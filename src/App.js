import React from "react";
import "./App.css";
import BreadCrumps from "./components/BreadCrumps";
import MainCart from "./components/cart_form/MainCart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CartContextProvider from "./context/cartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Navbar />
      <Header />
      <BreadCrumps />
      <MainCart />
      <Footer />
    </CartContextProvider>
  );
};

export default App;
