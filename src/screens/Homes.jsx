import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../reusable component/Button";
import logo from "../assets/logo.png";
import styles from "./Homes.module.css";
import phone from "../assets/phone.png";
import dowload from "../assets/dowload.png";
import vector from "../assets/Vector 112.png";
import { MdMargin, MdPadding } from "react-icons/md";
const Homes = () => {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }
  return (
    <div>
      <div className={styles.Homes}>
        <div className={styles.hearder}>
          <img src={logo} alt="" />
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/home" className={styles.itemNav}>
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/about" className={styles.itemNav}>
                  About
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/features" className={styles.itemNav}>
                  Feature
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/getintouch" className={styles.itemNav}>
                  Get in touch
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <div>
            <div>
              <p>
                <span className={styles.welcome}>welcome to AttendEase</span>{" "}
                <br /> make quick accurate and easy attendance
              </p>
              <p>click below to dowload</p>
            </div>
            <img src={dowload} className={styles.dowloadImg} alt="" />
            <Button
              onClick={goToLogin}
              style={{
                padding: "15px 80px",
                margin: "60px 55px 0px  55px",
                backgroundColor: "white",
                color: "#1360ee",
              }}
              value="Sign In"
            />
          </div>
          <img src={phone} alt="" className={styles.phoneImg} />
        </div>
      </div>
      <img src={vector} className={styles.vectorImg} alt="" />
    </div>
  );
};

export default Homes;
