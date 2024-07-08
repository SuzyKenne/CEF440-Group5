import React from "react";
import { useEffect, useState } from "react";
import styles from "./Totalinfo.module.css";
import { FaBook } from "react-icons/fa";
const TotalinfoCourse = ({ total }) => {
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    if (storedCourses) {
      const courses = JSON.parse(storedCourses);
      setTotalCourses(courses.length);
    }
  }, []);

  return (
    <div className={styles.TotalInfo}>
      <FaBook className={styles.icon} /> <br />
      Total courses: <br /> <span> {totalCourses}</span>
    </div>
  );
};

export default TotalinfoCourse;
