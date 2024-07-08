import React from "react";
import { useEffect, useState } from "react";
import styles from "./Totalinfo.module.css";
import { FaUserGraduate } from "react-icons/fa";
const TotalinfoStudent = ({ total }) => {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      const students = JSON.parse(storedStudents);
      setTotalStudents(students.length);
    }
  }, []);

  return (
    <div className={styles.TotalInfo}>
      <FaUserGraduate className={styles.icon} /> <br />
      Total students: <br /> <span> {totalStudents}</span>
    </div>
  );
};

export default TotalinfoStudent;
