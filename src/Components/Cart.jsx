import React, { useSyncExternalStore } from "react";
import style from "../Css/Cart.module.css";
import Navbar from "../Allsimiler/Navbar";
import Footer from "../Allsimiler/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartpro, handleUpdatePro, handleFilterIt, handleSinglepro,auth } =
    React.useContext(Authcontext);

  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [alsobuy, setAlsobuy] = useState([]);

  async function getData1() {
    try {
      let res1 = await fetch(
        "https://costco-backend.onrender.com/detergent/getdetergent"
      );
      let res2 = await res1.json();

      setAlsobuy(res2.detergents);
      // getData2()
    } catch (error) {
      console.log(error);
    }
  }

  function calculateTotal() {
    let all = 0;
    cartpro.forEach((ele) => {
      all = all + ele.price * ele.qty;
    });
    all = all.toFixed(2);
    setTotal(all);
  }

  function handleCheckout() {
    if(auth == true){
      navigate("/checkout");
    }
    else{
      navigate("/login")
    }
 
  }

  function handleHomego() {
    navigate("/");
  }

  // let alsocanbuy = [
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m8qn4gmcbvv482vh349s759/66791-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Ritz Crackers Handi-Snacks, Crackers 'N Cheese Dip",
  //     price: 14.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m3jgq5b7kpqnbm4cnpp8936/1700048-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Tide Pods HE Laundry Detergent Pods",
  //     price: 34.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m8qn4gmcbvv482vh349s759/66791-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Ritz Crackers Handi-Snacks, Crackers 'N Cheese Dip",
  //     price: 14.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m3jgq5b7kpqnbm4cnpp8936/1700048-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Tide Pods HE Laundry Detergent Pods",
  //     price: 34.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m8qn4gmcbvv482vh349s759/66791-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Ritz Crackers Handi-Snacks, Crackers 'N Cheese Dip",
  //     price: 14.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m3jgq5b7kpqnbm4cnpp8936/1700048-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Tide Pods HE Laundry Detergent Pods",
  //     price: 34.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m8qn4gmcbvv482vh349s759/66791-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Ritz Crackers Handi-Snacks, Crackers 'N Cheese Dip",
  //     price: 14.99,
  //   },
  //   {
  //     img: "https://cdn.bfldr.com/U447IH35/as/m3jgq5b7kpqnbm4cnpp8936/1700048-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350",
  //     title: "Tide Pods HE Laundry Detergent Pods",
  //     price: 34.99,
  //   },
  // ];

  function handleQtyChange(ele, val) {
    console.log(ele._id);
    console.log(+val);

    handleUpdatePro(ele._id, +val);
  }

  function handleProduct(ele) {
    navigate("/productdetails");
    handleSinglepro(ele);
  }

  function handleRemove(ele) {
    console.log(ele);
    handleFilterIt(ele._id);
  }

  useEffect(() => {
    if (cartpro.length > 0) {
      getData1();
    }
    document.title = "Shopping Cart | Costco"
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartpro]);

  const responsive6 = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
  };

  return (
    <div className={style.maincart}>
      <Navbar />

      <p className={style.cartp1}>Cart</p>

      {cartpro.length > 0 && <p className={style.cartp2}>2-Day Delivery</p>}
      {cartpro.length > 0 && (
        <p className={style.cartp3}>
          2-Day Delivery orders are delivered within 2 business days when
          ordered by 12 p.m.
        </p>
      )}

      {cartpro.length > 0 &&
        cartpro.map((ele, index) => {
          return (
            <div className={style.cartpro} key={index}>
              <div>
                <img className={style.cartimg} src={ele.img} alt="" />
              </div>
              <div className={style.div2}>
                <p className={style.cartp4}>{ele.title}</p>
                <p className={style.cartp5}>Item 3160408</p>
                <div className={style.removediv}>
                  <p className={style.cartp6}>${ele.price}</p>
                  <p
                    className={style.remove}
                    onClick={() => {
                      handleRemove(ele);
                    }}
                  >
                    Remove
                  </p>
                </div>
              </div>
              <div>
                <select
                  className={style.selectcart}
                  value={ele.qty}
                  onChange={(e) => {
                    handleQtyChange(ele, e.target.value);
                  }}
                >
                  <option value="1">Qty: 1</option>
                  <option value="2">Qty: 2</option>
                  <option value="3">Qty: 3</option>
                  <option value="4">Qty: 4</option>
                </select>
              </div>

              <div>
                <p className={style.sintotal}>Total : ${ele.price * ele.qty}</p>
              </div>
            </div>
          );
        })}

      {cartpro.length > 0 && (
        <p className={style.estotal}>Estimated Total : ${total}</p>
      )}
      {cartpro.length > 0 && (
        <button className={style.checkout} onClick={handleCheckout}>
          Checkout
        </button>
      )}

      {cartpro.length > 0 && <p className={style.canbuy}>Can Also Buy</p>}

      <Carousel responsive={responsive6} className={style.crousel7}>
        {cartpro.length > 0 &&
          alsobuy.map((ele, index) => {
            return (
              <div
                key={index}
                className={style.alsobuyit}
                onClick={() => {
                  handleProduct(ele);
                }}
              >
                <img className={style.crouselimg} src={ele.img} alt="" />
                <p className={style.crouselp1}>${ele.price}</p>
                <p className={style.crouselp2}>{ele.title}</p>
              </div>
            );
          })}
      </Carousel>

      {cartpro.length == 0 && (
        <div>
          <p className={style.cartshop}>Shopping Cart is empty</p>
        </div>
      )}
      {cartpro.length == 0 && (
        <button className={style.startshop} onClick={handleHomego}>
          Start Shopping
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
