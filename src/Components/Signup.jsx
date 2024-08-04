import React from "react";
import style from "../Css/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const { signupandlogin } = React.useContext(Authcontext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [mnumber, setMnumber] = useState("");

  function handleSignin() {
    navigate("/login");
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleCpassword(event) {
    setCpassword(event.target.value);
  }

  function handleMnumber(event) {
    setMnumber(event.target.value);
  }

  function handleCostGo(){
    navigate("/")
  }

  useEffect(() => {
   document.title = "Create Account | Costco"
  }, [])
  
  
  async function handleCreateAccount() {
    try {
      let res = await fetch("https://costco-backend.onrender.com/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, cpassword }),
      });
      let res2 = await res.json();
      if(res2.message == "user registered successfully"){
        toast.success("SignUp Successful 😁", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        signupandlogin()
        setTimeout(() => {
          navigate("/")
        }, 1500);
      }
      else{
        toast.error("SignUp Failed !!", {
          position: "top-right",
          autoClose: 3000000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      // console.log(res2);
    } catch (error) {
      toast.error("SignUp Failed !!", {
        position: "top-right",
        autoClose: 3000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
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
      <div className={style.banner1}>
        <img onClick={handleCostGo} style={{cursor:"pointer"}}
          src="https://signin-ui.costco.com/ecomssoui/32/common/Images/logo-bc-us.svg"
          alt=""
        />
      </div>

      <p className={style.signupp1}>Create Account</p>

      <div className={style.con1}>
        <div>
          <input
            type="text"
            style={{ marginTop: "30px" }}
            className={style.signupin}
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <input
            type="password"
            className={style.signupin}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div>
          <input
            type="password"
            className={style.signupin}
            placeholder="Confirm Password"
            value={cpassword}
            onChange={handleCpassword}
          />
        </div>
        <div>
          <input
            type="number"
            className={style.signupin}
            placeholder="Membership Number (optional)"
            value={mnumber}
            onChange={handleMnumber}
          />
        </div>

        <button className={style.signupbutton} onClick={handleCreateAccount}>
          Create Account
        </button>
        <p className={style.signupalready}>
          Already have an account?{" "}
          <span className={style.gotosignin} onClick={handleSignin}>
            Sign In
          </span>
        </p>
      </div>
    </>
  );
};

export default Signup;
