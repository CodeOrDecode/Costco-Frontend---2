import React from "react";
import style from "../Css/Productdetails.module.css";
import Navbar from "../Allsimiler/Navbar";
import Footer from "../Allsimiler/Footer";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Productdetails = () => {
  const { singlepro, addToCart, handleBuyNow } = React.useContext(Authcontext);
  // console.log(singlepro)

  const navigate = useNavigate();

  function handleCart() {
    handleBuyNow(singlepro);
    navigate("/cart");
  }

  function handleAddTo() {
    toast.success("Product is added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    addToCart(singlepro);
  }

  useEffect(() => {
   document.title = singlepro.title
  }, [])
  
  return (
    <div className={style.prommmain}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />

      <div className={style.prodetails}>
        <div className={style.prodetails1}>
          <img src={singlepro.img} alt="" />
        </div>

        <div className={style.prodetails2}>
          <p className={style.delever}>2-Day Delivery</p>
          <p className={style.descrip}>{singlepro.title}</p>
          <p className={style.descrip2}>${singlepro.price}</p>

          <p className={style.descrip3}>
            2 Business Day Delivery when ordered by 12pm noon local time.
          </p>
          <p className={style.descrip4}>
            No separate delivery fee with 2-Day orders of $75 or more.
          </p>

          <div>
            <button className={style.cartbutton} onClick={handleAddTo}>
              Add to Cart
            </button>
            <button className={style.cartbutton2} onClick={handleCart}>
              Buy Now
            </button>
          </div>

          <div>
            <button className={style.cartbutton3}>Add to List</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Productdetails;
