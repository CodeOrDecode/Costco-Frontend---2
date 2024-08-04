import React from "react";
import style from "../Css/Conformation.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Conformation = () => {
  const navigate = useNavigate();

  
  function handleHome() {
    navigate("/");
  }

  useEffect(() => {
  document.title = "Costco - Conformation"
  }, [])
  

  return (
    <div className={style.maincon1}>
      <p className={style.maincon1p1}>THANK YOU!</p>
      <img
        className={style.maincon1img1}
        src="https://clipartcraft.com/images/check-mark-clipart-color-5.png"
        alt=""
      />
      <p className={style.maincon1p2}>
        Your coupon is on its way to your email. But first ...
      </p>
      <p className={style.maincon1p3}>
        Click here to book Your appointment online instantly. It only takes a
        minute
      </p>
      <p className={style.maincon1p2}>We can't wait to meet you and your do!</p>
      <button className={style.homebutt1} onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default Conformation;
