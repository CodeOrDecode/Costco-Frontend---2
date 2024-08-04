import React from "react";
import style from "../Css/Checkout.module.css";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";
import { useEffect } from "react";
import { useState } from "react";

const Checkout = () => {
  const { cartpro,resetcartcount } = React.useContext(Authcontext);
  const [total, setTotal] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // console.log(cartpro)

  const navigate = useNavigate();


 async function handleaddOrder(){
    try {
      let res = await fetch(
        "https://costco-backend.onrender.com/order/addorder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fname, lname,address,pincode, email, phone,total,products:cartpro}),
        }
      );
      let res2 = await res.json();
      console.log(res2);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCheckout() {
    handleaddOrder()
    resetcartcount()
    navigate("/loading");

  }

  function handleCostGo(){
    navigate("/")
  }

  function calculateTotal() {
    let all = 0;
    cartpro.forEach((ele) => {
      all = all + ele.price * ele.qty;
    });
    all = all.toFixed(2);
    setTotal(all);
  }

  function handleChange1(event) {
    setFname(event.target.value);
  }

  function handleChange2(event) {
    setLname(event.target.value);
  }

  function handleChange3(event) {
    setAddress(event.target.value);
  }

  function handleChange4(event) {
    setPincode(event.target.value);
  }

  function handleChange5(event) {
    setEmail(event.target.value);
  }

  function handleChange6(event) {
    setPhone(event.target.value);
  }


  useEffect(() => {
    calculateTotal();
    document.title = "Checkout | Costco"
  }, []);

  return (
    <div className={style.checkout11}>
      <div className={style.checkoutmain1}>
        <img onClick={handleCostGo} style={{cursor:"pointer"}}
          src="https://www.costco.com/wcsstore/CostcoGLOBALSAS/images/Costco_Logo-1.png"
          alt=""
        />
      </div>

      <p className={style.checkoutmainp1}>Checkout</p>

      <div className={style.address1}>
        <div className={style.addresspart1}>
          <p className={style.addresspartp1}>Shipping Address</p>
          <div>
            <input
              className={style.cheinput1}
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={handleChange1}
            />
          </div>
          <div>
            <input
              className={style.cheinput1}
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={handleChange2}
            />
          </div>
          <div>
            <input
              className={style.cheinput1}
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleChange3}
            />
          </div>
          <div>
            <input
              className={style.cheinput2}
              type="number"
              placeholder="Zip Code"
              value={pincode}
              onChange={handleChange4}
            />
          </div>
          <div>
            <input
              className={style.cheinput1}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange5}
            />
          </div>
          <div>
            <input
              className={style.cheinput2}
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={handleChange6}
            />
          </div>

          <div className={style.defadd}>
            <input type="checkbox" style={{ cursor: "pointer" }} />
            <p className={style.defaddp1}>Save to address book</p>
          </div>

          <div className={style.defadd}>
            <input type="checkbox" style={{ cursor: "pointer" }} />
            <p className={style.defaddp1}>Save as Default Shipping Address</p>
          </div>
        </div>

        <div className={style.addresspart2}>
          <p className={style.addresspart2p1}>
            Enter your membership number to avoid paying a surcharge on your
            order.
          </p>

          <input
            className={style.cheinput3}
            type="number"
            placeholder="Membership Number"
          />
          <button className={style.cheinputadd1}>Add</button>
          <p className={style.addresspart2p2}>
            Executive Members will earn approximately $0.41 towards their annual
            2% Reward on this purchase
          </p>

          <hr className={style.ruller12} />

          <div className={style.checkouttot}>
            <p>Subtotal</p>
            <p>${total}</p>
          </div>

          <input
            className={style.cheinput4}
            type="number"
            placeholder="Promo Code"
          />
          <button className={style.cheinputadd2}>Apply Code</button>
          <hr className={style.ruller12} />

          <div className={style.checkouttot2}>
            <p>Total</p>
            <p>${total}</p>
          </div>

          <button className={style.placeorder} onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
