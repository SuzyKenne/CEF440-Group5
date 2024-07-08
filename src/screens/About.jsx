import React from "react";
import fingerprint from "../assets/Fingerprint-pana.png";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.About}>
        <img src={fingerprint} alt="" />
        <div>About</div>
      </div>
    </div>
  );
};

export default About;
