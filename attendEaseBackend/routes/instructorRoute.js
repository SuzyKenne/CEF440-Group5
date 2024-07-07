// routes/instructorRoutes.js
const express = require('express');
const router = express.Router();
const { registerInstructor,
    loginInstructor,
    getAllInstructors,
    getInstructorById,
    updateInstructor,
    deleteInstructor
} = require('../controllers/instructorController');

router.post('/register',  registerInstructor);
router.post('/login',  loginInstructor);
router.get('/',  getAllInstructors);
router.get('/:id',  getInstructorById);
router.put('/:id',  updateInstructor);
router.delete('/:id',  deleteInstructor);

module.exports = router;
