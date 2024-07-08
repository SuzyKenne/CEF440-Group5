import React, { useState, useEffect } from "react";
import Sidebar from "../reusable component/Sidebar";
import Navbar from "../reusable component/Navbar";
import styles from "./Home.module.css";
import Infoteacher from "../reusable component/Infoteacher";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../reusable component/Button";
import { BiFontSize } from "react-icons/bi";
const Students = () => {
  const [inputValues, setInputValues] = useState({
    NameStudents: "",
    Matricule: "",
    facultyStudent: "",
    Department: "",
  });
  const [isFormVisible, setFormVisible] = useState(false);
  const [students, setStudents] = useState([]);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  const inputFields = [
    {
      id: "NameStudents",
      type: "text",
      name: "NameStudents",
      value: inputValues.NameStudents,
      placeholder: "Enter student Name",
      label: "Name",
      visibility: true,
    },
    {
      id: "Matricule",
      type: "text",
      name: "Matricule",
      value: inputValues.Matricule,
      placeholder: "Enter student Matricule",
      label: "Matricule",
      visibility: true,
    },
    {
      id: "facultyStudent",
      type: "text",
      name: "facultyStudent",
      value: inputValues.facultyStudent,
      placeholder: "Enter Student Facullty",
      label: "Faculty",
      visibility: true,
    },
    {
      id: "Department",
      type: "text",
      name: "Department",
      value: inputValues.Department,
      placeholder: "Enter student Department",
      label: "Department",
      visibility: true,
    },
    {
      id: "Level",
      type: "text",
      name: "Level",
      value: inputValues.Level,
      placeholder: "Enter student Level",
      label: "Level",
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
      const updatedTeachers = students.map((teacher, index) =>
        index === editIndex ? inputValues : teacher
      );
      setStudents(updatedTeachers);
      localStorage.setItem("students", JSON.stringify(updatedTeachers));
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      const updatedTeachers = [...students, inputValues];
      setStudents(updatedTeachers);
      localStorage.setItem("students", JSON.stringify(updatedTeachers));
    }
    setInputValues({
      NameStudents: "",
      Matricule: "",
      facultyStudent: "",
      Department: "",
    });
    // setFormVisible(false);
  };
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
    setIsEditMode(false);
    setInputValues({
      NameStudents: "",
      Matricule: "",
      facultyStudent: "",
      Department: "",
    });
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditMode(true);
    setInputValues(students[index]);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    setStudentToDelete(index);
  };
  const confirmDelete = () => {
    const updatedTeachers = students.filter(
      (_, index) => index !== studentToDelete
    );
    setStudents(updatedTeachers);
    localStorage.setItem("students", JSON.stringify(updatedTeachers));
    setStudentToDelete(null);
  };
  const cancelDelete = () => {
    setStudentToDelete(null);
  };
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.secondContainer}>
        <Navbar
          buttonValue="Add Students"
          onButtonClick={toggleFormVisibility}
        />
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Matricule</th>
                <th>Faculty</th>
                <th>Department</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.NameStudents}</td>
                  <td>{teacher.Matricule}</td>
                  <td>{teacher.facultyStudent}</td>
                  <td>{teacher.Department}</td>
                  <td>{teacher.Level}</td>
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
            buttonValue={isEditMode ? "Update" : "Add Students"}
          />
        </div>
      )}
      {studentToDelete !== null && (
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

export default Students;
