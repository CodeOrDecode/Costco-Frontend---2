import React from "react";
import Navbar from "../Allsimiler/Navbar";
import style from "../Css/Snacks.module.css";
import Footer from "../Allsimiler/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";

const Snacks = () => {

  const navigate = useNavigate()
  const {handleSinglepro} = React.useContext(Authcontext)
  const [data, setData] = useState([]);

  function handleProduct(ele) {
    navigate("/productdetails")
    handleSinglepro(ele)
  }



  async function handleSnacksData() {
    try {
      let res = await fetch(
        "https://costco-backend.onrender.com/snacks/getsnacks"
      );
      let res2 = await res.json();
      // console.log(res2.snacks);
      setData(res2.snacks)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSnacksData();
    document.title = "Snacks | Costco"
  }, []);

  return (
    <div className={style.pro}>
      <Navbar />
      <div className={style.promain}>
        <div className={style.promain1}>
          <p className={style.filter1}>Filter Results</p>
          <hr className={style.ruller4} />

          <p className={style.category}>Category</p>
          <p className={style.progrop1}>
            Grocery, Household Essentials &amp; Pet
          </p>
          <p className={style.progrop1}>Snacks</p>
          <p className={style.progrop1}>Cookies</p>

          <hr className={style.ruller5} />

          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Delivery</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>2-Day Delivery</p>
          </div>

          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Buy in Warehouse</p>
          </div>
          <hr className={style.ruller5} />

          <p className={style.category}>Price</p>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>$0 to $25</p>
          </div>

          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>$25 to $50</p>
          </div>

          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>$50 to $100</p>
          </div>

          <hr className={style.ruller5} />

          <p className={style.category}>Brand</p>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Annie's</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Biscoff</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Black Forest</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Blue Diamond</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Bobo's Oat Bites</p>
          </div>

          <hr className={style.ruller5} />
          <p className={style.category}>Dietary Features</p>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Cholesterol Free</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Dairy Free</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Fat Free</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Gluten Free</p>
          </div>
          <div className={style.duo}>
            <div className={style.selectsmall}></div>
            <p className={style.selectsmallp1}>Grain Free</p>
          </div>
        </div>

        <div className={style.promain2}>
          <p className={style.promain2cat}>Snacks</p>
          {data &&
            data.map((ele, index) => {
              return (
                <div key={index} className={style.smallpro} onClick={()=>{handleProduct(ele)}}>
                  <img src={ele.img} alt="" />
                  <p className={style.smallprop1}>${ele.price}</p>
                  <p className={style.smallprop2}>{ele.title}</p>
                </div>
              );
            })}
        </div>
      </div>

      <select className={style.selectpro}>
        <option value="All Products">All Products</option>
        <option value="High to Low">High to Low</option>
        <option value="Low to High">Low to High</option>
      </select>

      <Footer />
    </div>
  );
};

export default Snacks;
