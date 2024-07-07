import React, { useState } from "react";
import "./loginform.css"
import { color } from "framer-motion";


const LoginForm = () => {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  return (
    <div className="cover">
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <div className="login-btn" onClick={popup}>Login</div>

        <p className="text">Or login using</p>

        <div className="alt-login">
            <div><a href="https://ru-ru.facebook.com/"><div className="facebook"></div></a></div>
            <div><a href="https://www.google.com/"><div className="google"></div></a></div>
        </div>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Email or password incorrect</p>
        </div>
         
    </div>
  )
}

export default LoginForm