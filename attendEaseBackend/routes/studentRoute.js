const express = require("express");
const {getAllStudent, deleteStudent, updateStudent, createStudent, getOneStudent} = require("../controllers/studentController")

const router = express.Router();


/**
 * Get all students
 */
router.get("/", getAllStudent);


/**
 * Get one student
 */
router.get("/:id", getOneStudent);


/**
 * Create a student
 */

router.post("/", createStudent);

/**
 * update student info
 */
router.patch("/:id", updateStudent);

/**
 * delete student
 */

router.delete("/:id", deleteStudent);


module.export = {router};