import React, { useState } from "react";
import "./LoginSignUp.css";
import email_Icon from "../../Assets/mail.png";
import person_Icon from "../../Assets/user.png";
import password_Icon from "../../Assets/padlock.png";

const LoginSignUp = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person_Icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_Icon} alt="" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={password_Icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot_password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit_container">
        <div
          onClick={() => {
            setAction("Sign Up");
          }}
          className={action === "Login" ? "submit gray" : "submit"}
        >
          Sign Up
        </div>
        <div
          onClick={() => {
            setAction("Login");
          }}
          className={action === "Sign Up" ? "submit gray" : "submit"}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
