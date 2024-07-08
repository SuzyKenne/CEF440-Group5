// src/components/Dashboard.js
import React from "react";
import Sidebar from "../reusable component/Sidebar";
import TotalInfo from "../reusable component/Totalinfo";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
// import TotalinfoStudent from "../reusable component/TotalinfoCourse";
// import TotalCourse from "../reusable component/TotalinfoCourse";
import TotalinfoCourse from "../reusable component/TotalinfoCourse";
import TotalinfoStudent from "../reusable component/TotalinfoStudent";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.second}>
        <div className={styles.log}>
          <IoIosNotifications />
          <p>
            {" "}
            <Link to="/" className={styles.Logout}>
              Log out
            </Link>{" "}
          </p>
        </div>
        <h1 className={styles.welcome}> welcome admin</h1>
        <div className={styles.total}>
          <TotalinfoCourse />
          <TotalinfoStudent />
          <TotalInfo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
