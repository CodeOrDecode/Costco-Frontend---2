import React from "react";
import style from "../Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate(Authcontext);
  const { signupandlogin } = React.useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    navigate("/Signup");
  }

  function handleemail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleCostGo(){
    navigate("/")
  }

  useEffect(() => {
  document.title = "Sign In | Costco"
  }, [])
  

  async function handleSignInIs() {
    try {
      let res = await fetch("https://costco-backend.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      let res2 = await res.json();
      console.log(res2);
      if (res2.message == "login successfully") {
        toast.success("Login Successful 😁", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        signupandlogin();
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error("Login Failed !!", {
          position: "top-right",
          autoClose: 3000,
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
      toast.error("Login Failed !!", {
        position: "top-right",
        autoClose: 3000,
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

      <p className={style.signupp1}>Sign In</p>

      <div className={style.con1}>
        <div>
          <input
            type="text"
            style={{ marginTop: "30px" }}
            className={style.signupin}
            placeholder="Email Address"
            value={email}
            onChange={handleemail}
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

        <button className={style.signupbutton} onClick={handleSignInIs}>
          Sign In
        </button>
        <hr className={style.ruller1} />

        <p className={style.newcome}>New to Costco?</p>

        <button className={style.signupbutton2} onClick={handleSignup}>
          Create Account
        </button>
      </div>
    </>
  );
};

export default Login;
