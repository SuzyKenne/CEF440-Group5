// controllers/registerController.js
const Faculties = require('../models/facultyModels');
const Departments = require('../models/departmentModels');
const Levels = require('../models/levelModels');
const Courses = require('../models/courseModels');
const Students = require('../models/studentModels');

// Get all faculties
exports.getFaculties = async (req, res) => {
  try {
    const faculties = await Faculties.find();
    res.status(200).json(faculties);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching faculties' });
  }
};

// Get departments by faculty
exports.getDepartmentsByFaculty = async (req, res) => {
  try {
    const { facultyId } = req.params;
    const departments = await Departments.find({ faculty: facultyId });
    res.status(200).json(departments);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching departments' });
  }
};

// Get levels by department
exports.getLevelsByDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const levels = await Levels.find({ department: departmentId });
    res.status(200).json(levels);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching levels' });
  }
};

// Get courses by level
exports.getCoursesByLevel = async (req, res) => {
  try {
    const { levelId } = req.params;
    const courses = await Courses.find({ level: levelId });
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching courses' });
  }
};

// Register courses for a student
exports.registerCourses = async (req, res) => {
  try {
    const { studentId, courseIds } = req.body;
    const student = await Students.findById(studentId);
    student.courses = courseIds;
    await student.save();
    res.status(200).json({ message: 'Courses registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering courses' });
  }
};
