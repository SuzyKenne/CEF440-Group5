import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./searchbar.module.css";
const Searchbar = ({ value, type, placeholder, onChange }) => {
  return (
    <div>
      <div className={styles.searchgroup}>
        <input
          className={styles.searchbar}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <IoSearchOutline className={styles.loopicon} />
      </div>
    </div>
  );
};

export default Searchbar;
