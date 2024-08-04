import React from "react";
import style from "../Css/Loading.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Loading = () => {

  const navigate = useNavigate()

function handleloading(){
  setTimeout(() => {
    navigate("/conformation")
  }, 3000);
}


  useEffect(() => {
    handleloading()
    document.title = "Costco - Loading"
  }, [])
  


  return (
    <div className={style.loadgif}>
      <img
        className={style.loadgif2}
        src="https://cdnl.iconscout.com/lottie/premium/thumb/rotating-blue-circle-loader-5371049-4510668.gif"
        alt=""
      />
    </div>
  );
};

export default Loading;
