import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Detergent from "../Components/Detergent";
import Snacks from "../Components/Snacks";
import Productdetails from "../Components/Productdetails";
import Conformation from "../Components/Conformation";
import Checkout from "../Components/Checkout";
import Cart from "../Components/Cart";
import Loading from "../Allsimiler/Loading";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detergent" element={<Detergent />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/productdetails" element={<Productdetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/conformation" element={<Conformation />} />
      </Routes>
    </>
  );
};

export default Allroutes;
