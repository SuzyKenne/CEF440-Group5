import React, { useState, useEffect } from "react";
import Sidebar from "../reusable component/Sidebar";
import Navbar from "../reusable component/Navbar";
import styles from "./Home.module.css";
import Infoteacher from "../reusable component/Infoteacher";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../reusable component/Button";
import { BiFontSize } from "react-icons/bi";
const Course = () => {
  const [inputValues, setInputValues] = useState({
    NameCourse: "",
    CourseCode: "",
    FacultyCourse: "",
    departmentCourse: "",
  });
  const [isFormVisible, setFormVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  const inputFields = [
    {
      id: "NameCourse",
      type: "text",
      name: "NameCourse",
      value: inputValues.NameCourse,
      placeholder: "Enter course title",
      label: "Course Title",
      visibility: true,
    },
    {
      id: "CourseCode",
      type: "text",
      name: "CourseCode",
      value: inputValues.CourseCode,
      placeholder: "Enter course code",
      label: "Course Code",
      visibility: true,
    },
    {
      id: "FacultyCourse",
      type: "text",
      name: "FacultyCourse",
      value: inputValues.FacultyCourse,
      placeholder: "Enter Faculty",
      label: "Faculty",
      visibility: true,
    },
    {
      id: "departmentCourse",
      type: "text",
      name: "departmentCourse",
      value: inputValues.departmentCourse,
      placeholder: "Enter Department",
      label: "Department",
      visibility: true,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      const updatedTeachers = courses.map((teacher, index) =>
        index === editIndex ? inputValues : teacher
      );
      setCourses(updatedTeachers);
      localStorage.setItem("courses", JSON.stringify(updatedTeachers));
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      const updatedTeachers = [...courses, inputValues];
      setCourses(updatedTeachers);
      localStorage.setItem("courses", JSON.stringify(updatedTeachers));
    }
    setInputValues({
      NameCourse: "",
      CourseCode: "",
      FacultyCourse: "",
      departmentCourse: "",
    });
    // setFormVisible(false);
  };
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
    setIsEditMode(false);
    setInputValues({
      NameCourse: "",
      CourseCode: "",
      FacultyCourse: "",
      departmentCourse: "",
    });
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditMode(true);
    setInputValues(courses[index]);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    setCourseToDelete(index);
  };
  const confirmDelete = () => {
    const updatedTeachers = courses.filter(
      (_, index) => index !== courseToDelete
    );
    setCourses(updatedTeachers);
    localStorage.setItem("courses", JSON.stringify(updatedTeachers));
    setCourseToDelete(null);
  };
  const cancelDelete = () => {
    setCourseToDelete(null);
  };
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.secondContainer}>
        <Navbar
          buttonValue="Add courses"
          onButtonClick={toggleFormVisibility}
        />
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Course Code</th>
                <th>Faculty</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.NameCourse}</td>
                  <td>{teacher.CourseCode}</td>
                  <td>{teacher.FacultyCourse}</td>
                  <td>{teacher.departmentCourse}</td>
                  <td>
                    <div className={styles.actionGoup}>
                      <FaTrashAlt
                        className={styles.trash}
                        onClick={() => handleDelete(index)}
                      />
                      <Button
                        onClick={() => handleEdit(index)}
                        value="Edit"
                        style={{
                          fontSize: "13px",
                          padding: "6px",
                          backgroundColor: "green",
                          letterSpacing: "1.5px",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isFormVisible && (
        <div className={styles.overlay}>
          <Infoteacher
            inputFields={inputFields}
            onChangeForm={handleInputChange}
            onClose={toggleFormVisibility}
            onSumitForm={handleFormSubmit}
            buttonValue={isEditMode ? "Update" : "Add courses"}
          />
        </div>
      )}
      {courseToDelete !== null && (
        <div className={styles.confirmationOverlay}>
          <div className={styles.confirmationBox}>
            <p>Are you sure you want to delete this teacher?</p>
            <div className={styles.confirmButton}>
              <Button
                value="Yes"
                onClick={confirmDelete}
                style={{
                  fontSize: "13px",
                  padding: "8px",
                  backgroundColor: "green",
                }}
              />
              <Button
                value="No"
                onClick={cancelDelete}
                style={{
                  fontSize: "13px",
                  padding: "8px",
                  backgroundColor: "red",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Course;
