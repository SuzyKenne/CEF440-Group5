import React from "react";
import { useEffect, useState } from "react";
import styles from "./Totalinfo.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";
const Totalinfo = ({ total }) => {
  const [totalLecturers, setTotalLecturers] = useState(0);

  useEffect(() => {
    const storedTeachers = localStorage.getItem("teachers");
    if (storedTeachers) {
      const teachers = JSON.parse(storedTeachers);
      setTotalLecturers(teachers.length);
    }
  }, []);

  return (
    <div className={styles.TotalInfo}>
      <FaChalkboardTeacher className={styles.icon} /> <br />
      Total Lecturers: <br /> <span> {totalLecturers}</span>
    </div>
  );
};

export default Totalinfo;
