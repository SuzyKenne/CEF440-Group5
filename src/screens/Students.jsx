import React from "react";
import Sidebar from "../reusable component/Sidebar";
import Navbar from "../reusable component/Navbar";
import styles from "./Home.module.css";
const Students = () => {
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar buttonValue="Add Students" />
      </div>
    </div>
  );
};

export default Students;
