// controllers/studentController.js
const jwt = require('jsonwebtoken');
const Students = require('../models/studentModels');

// Register Student
async function registerStudent(req, res) {
  const { matricule, studentName, email, password, faculty, department } = req.body;

  if (!matricule || !studentName || !email || !password || !faculty || !department) {
    return res.status(400).json({
      message: "All fields are required: matricule, studentName, email, password, faculty, and department"
    });
  }

  try {
    const newStudent = await Students.create({ matricule, studentName, email, password, faculty, department });

    return res.status(201).json({
      status: "OK",
      message: "Student successfully registered!",
      student: newStudent
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email or Matricule already exists"
      });
    }
    return res.status(500).json({
      message: "An error occurred while registering the student"
    });
  }
}

// Login Student
async function loginStudent(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required: email and password"
    });
  }

  try {
    const student = await Students.findOne({ email });
    if (!student) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await student.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      status: "OK",
      message: "Student successfully logged in!",
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while logging in the student"
    });
  }
}

// Get all students
async function getAllStudents(req, res) {
  try {
    const students = await Students.find();
    return res.status(200).json(students);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching students"
    });
  }
}

// Get student by ID
async function getStudentById(req, res) {
  const { id } = req.params;

  try {
    const student = await Students.findById(id);
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching the student"
    });
  }
}

// Update student
async function updateStudent(req, res) {
  const { id } = req.params;
  const updates = req.body;

  try {
    const student = await Students.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Student successfully updated!",
      student
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the student"
    });
  }
}

// Delete student
async function deleteStudent(req, res) {
  const { id } = req.params;

  try {
    const student = await Students.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Student successfully deleted!"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while deleting the student"
    });
  }
}

module.exports = {
  registerStudent,
  loginStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};
