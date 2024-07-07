import React from "react";
import styles from "./button.module.css";

const Button = ({ type, value, style, onClick  }) => {
  return (
    <div>
      <button className={styles.button} type={type} style={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Button;
