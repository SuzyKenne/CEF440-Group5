// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const {
    registerStudent,
    loginStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
  } = require('../controllers/studentController');

router.post('/register',   registerStudent);
router.post('/login',   loginStudent);
router.get('/',   getAllStudents);
router.get('/:id',   getStudentById);
router.put('/:id',   updateStudent);
router.delete('/:id',   deleteStudent);

module.exports = router;
