import React from "react";
import styles from "./inputbox.module.css";

const Inputbox = ({
  id,
  name,
  value,
  type,
  placeholder,
  label,
  onChange,
  visibility,
}) => {
  return (
    <div
      className={styles.inputPage}
      style={{ display: visibility ? "block" : "none" }}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputbox;
