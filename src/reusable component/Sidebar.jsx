import React, { useState } from "react";
import styles from "./sidebar.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaUser,
  FaLock,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(""); // State to track the selected item

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, navigateTo: "/dashboard" },
    {
      name: "Add Teachers",
      icon: <FaChalkboardTeacher />,
      navigateTo: "/teacher",
    },
    {
      name: "Add Students",
      icon: <FaUserGraduate />,
      navigateTo: "/students",
    },
    { name: "Add Courses", icon: <FaBook />, navigateTo: "/course" },
    { name: "Profile", icon: <FaUser />, navigateTo: "/profile" },
    { name: "Privacy", icon: <FaLock />, navigateTo: "/privacy" },
    { name: "Help", icon: <FaQuestionCircle />, navigateTo: "/help" },
  ];

  const handleItemClick = (name, navigateTo) => {
    setSelected(name);
    navigate(navigateTo);
  };

  return (
    <div className={styles.sidebarComponent}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={selected === item.name ? styles.selected : ""}
              onClick={() => handleItemClick(item.name, item.navigateTo)}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
