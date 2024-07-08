import React, { useState, useEffect } from "react";
import Sidebar from "../reusable component/Sidebar";
import Navbar from "../reusable component/Navbar";
import styles from "./Home.module.css";
import Infoteacher from "../reusable component/Infoteacher";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../reusable component/Button";
import { BiFontSize } from "react-icons/bi";

const Teacher = () => {
  const [inputValues, setInputValues] = useState({
    NameTeachers: "",
    IdTeachers: "",
    facultyTeacher: "",
    phone: "",
  });
  const [isFormVisible, setFormVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [teacherToDelete, setTeacherToDelete] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTeachers = localStorage.getItem("teachers");
    if (storedTeachers) {
      setTeachers(JSON.parse(storedTeachers));
    }
  }, []);

  const inputFields = [
    {
      id: "NameTeachers",
      type: "text",
      name: "NameTeachers",
      value: inputValues.NameTeachers,
      placeholder: "Enter Your Name",
      label: "Name",
      visibility: true,
    },
    {
      id: "IdTeachers",
      type: "text",
      name: "IdTeachers",
      value: inputValues.IdTeachers,
      placeholder: "Enter your Id",
      label: "Id",
      visibility: true,
    },
    {
      id: "facultyTeacher",
      type: "text",
      name: "facultyTeacher",
      value: inputValues.facultyTeacher,
      placeholder: "Enter Your Faculty",
      label: "Faculty",
      visibility: true,
    },
    {
      id: "phone",
      type: "tel",
      name: "phone",
      value: inputValues.phone,
      placeholder: "Enter Phone Number",
      label: "Phone",
      visibility: false,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      const updatedTeachers = teachers.map((teacher, index) =>
        index === editIndex ? inputValues : teacher
      );
      setTeachers(updatedTeachers);
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      const updatedTeachers = [...teachers, inputValues];
      setTeachers(updatedTeachers);
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
    }
    setInputValues({
      NameTeachers: "",
      IdTeachers: "",
      facultyTeacher: "",
      phone: "",
    });
    // setFormVisible(false);
  };
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
    setIsEditMode(false);
    setInputValues({
      NameTeachers: "",
      IdTeachers: "",
      facultyTeacher: "",
      phone: "",
    });
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditMode(true);
    setInputValues(teachers[index]);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    setTeacherToDelete(index);
  };
  const confirmDelete = () => {
    const updatedTeachers = teachers.filter(
      (_, index) => index !== teacherToDelete
    );
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
    setTeacherToDelete(null);
  };
  const cancelDelete = () => {
    setTeacherToDelete(null);
  };
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.secondContainer}>
        <Navbar
          buttonValue="Add Teacher"
          onButtonClick={toggleFormVisibility}
        />
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Faculty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.NameTeachers}</td>
                  <td>{teacher.IdTeachers}</td>
                  <td>{teacher.facultyTeacher}</td>
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
            buttonValue={isEditMode ? "Update" : "Add Teacher"}
          />
        </div>
      )}
      {teacherToDelete !== null && (
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

export default Teacher;
