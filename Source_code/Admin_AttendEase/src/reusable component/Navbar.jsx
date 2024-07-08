import React, { useState } from "react";
import styles from "./navbar.module.css";
import { IoIosNotifications } from "react-icons/io";
import Searchbar from "./Searchbar";
import Button from "./Button";
import { Link } from "react-router-dom";

const navbar = ({ buttonValue, onButtonClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <Button
          value={buttonValue}
          className={styles.btnSignin}
          onClick={onButtonClick}
        />
        <div className={styles.log}>
          <IoIosNotifications />
          <p>
            {" "}
            <Link to="/" className={styles.Logout}>
              Log out
            </Link>{" "}
          </p>
        </div>
      </div>
      <div>
        <Searchbar
          type="text"
          value={searchValue}
          placeholder="search Teacher"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default navbar;
