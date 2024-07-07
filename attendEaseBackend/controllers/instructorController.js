// controllers/instructorController.js
const jwt = require('jsonwebtoken');
const Instructors = require('../models/instructorModels');

// Register Instructor
async function registerInstructor(req, res) {
  const { instructorId, instructorName, email, password } = req.body;

  if (!instructorId || !instructorName || !email || !password) {
    return res.status(400).json({
      message: "All fields are required: instructorId, instructorName, email, and password"
    });
  }

  try {
    const newInstructor = await Instructors.create({ instructorId, instructorName, email, password });

    return res.status(201).json({
      status: "OK",
      message: "Instructor successfully registered!",
      instructor: newInstructor
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email or Instructor ID already exists"
      });
    }
    return res.status(500).json({
      message: "An error occurred while registering the instructor"
    });
  }
}

// Login Instructor
async function loginInstructor(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required: email and password"
    });
  }

  try {
    const instructor = await Instructors.findOne({ email });
    if (!instructor) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await instructor.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign({ id: instructor._id }, 'your_jwt_secret', { expiresIn: '1h' });

    return res.status(200).json({
      status: "OK",
      message: "Instructor successfully logged in!",
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while logging in the instructor"
    });
  }
}

// Get all instructors
async function getAllInstructors(req, res) {
  try {
    const instructors = await Instructors.find();
    return res.status(200).json(instructors);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching instructors"
    });
  }
}

// Get instructor by ID
async function getInstructorById(req, res) {
  const { id } = req.params;

  try {
    const instructor = await Instructors.findById(id);
    if (!instructor) {
      return res.status(404).json({
        message: "Instructor not found"
      });
    }
    return res.status(200).json(instructor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching the instructor"
    });
  }
}

// Update instructor
async function updateInstructor(req, res) {
  const { id } = req.params;
  const updates = req.body;

  try {
    const instructor = await Instructors.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!instructor) {
      return res.status(404).json({
        message: "Instructor not found"
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Instructor successfully updated!",
      instructor
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the instructor"
    });
  }
}

// Delete instructor
async function deleteInstructor(req, res) {
  const { id } = req.params;

  try {
    const instructor = await Instructors.findByIdAndDelete(id);
    if (!instructor) {
      return res.status(404).json({
        message: "Instructor not found"
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Instructor successfully deleted!"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while deleting the instructor"
    });
  }
}

module.exports = {
  registerInstructor,
  loginInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor
};
