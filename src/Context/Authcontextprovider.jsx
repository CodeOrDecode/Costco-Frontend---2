import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const [singlepro, setSinglepro] = useState({});
  const [cartpro, setCartpro] = useState([]);
  const [cartcount, setCartcount] = useState(0);
  const [auth, setAuth] = useState(false)

  function addToCart(ele) {
    let ele2 = { ...ele, qty: 1 };
    setCartpro([...cartpro, ele2]);
    setCartcount(cartcount + 1);
  }

  function handleBuyNow(ele) {
    let ele2 = { ...ele, qty: 1 };
    setCartpro([ele2]);
    setCartcount(1);
  }

  function signupandlogin(){
    setAuth(true)
  }


  function handleLogout(){
    setAuth(false)
  }

  //  console.log(cartpro)

  function handleUpdatePro(id, val) {
    let updatepro = cartpro.map((ele) => {
      if (ele._id == id) {
        ele.qty = val;
        return ele;
      } else {
        return ele;
      }
    });
    setCartpro(updatepro);
  }

function resetcartcount(){
  setCartcount(0)
  setCartpro([])
}


  function handleFilterIt(val){
    let filterPro = cartpro.filter((ele)=>{
      if(ele._id != val){
        return ele
      }
    })
    setCartpro(filterPro);
    setCartcount(cartcount - 1)
  }


  function handleSinglepro(data) {
    console.log(data);
    setSinglepro(data);
  }

  return (
    <Authcontext.Provider
      value={{
        singlepro,
        handleSinglepro,
        cartcount,
        addToCart,
        handleBuyNow,
        cartpro,
        handleUpdatePro,
        handleFilterIt,
        resetcartcount,
        auth,
        signupandlogin,
        handleLogout
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontextprovider;
