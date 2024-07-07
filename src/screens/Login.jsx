import styles from "./login.module.css";
import React, { useState } from "react";
import Inputbox from "../reusable component/Inputbox";
import loginImage from "../assets/loginImage.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function goToDashboard() {
    navigate("/dashboard");
  }

  const [input, setInput] = useState({ AdminName: "", password: "" });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className={styles.logingPage}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmit} className="form">
          <Inputbox
            id="AdminName"
            type="text"
            name="AdminName"
            value={input.AdminName}
            label="Name"
            placeholder="Enter Admin Name"
            onChange={handleOnChange}
            visibility="true"
          />
          <Inputbox
            id="password"
            type="password"
            name="password"
            value={input.password}
            label="Password"
            placeholder="Enter your password"
            onChange={handleOnChange}
            visibility="true"
          />
          <div className="forgot-password">
            <a href="/">Forgot password?</a>
          </div>
          <button onClick={goToDashboard}>Login</button>
        </form>
      </div>
      <div className={styles.imagelog}>
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
