// controllers/adminController.js
const jwt = require('jsonwebtoken');
const Administrator = require('../models/adminModels');

// Register Admin
async function registerAdmin(req, res) {
  const { adminName, email, password } = req.body;

  if (!adminName || !email || !password) {
    return res.status(400).json({
      message: "All fields are required: adminName, email, and password"
    });
  }

  try {
    const newAdmin = await Administrator.create({ adminName, email, password });

    return res.status(201).json({
      status: "OK",
      message: "Admin successfully registered!",
      admin: newAdmin
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }
    return res.status(500).json({
      message: "An error occurred while registering the admin"
    });
  }
}

// Login Admin
async function loginAdmin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required: email and password"
    });
  }

  try {
    const admin = await Administrator.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign({ id: admin._id }, 'your_jwt_secret', { expiresIn: '1h' });

    return res.status(200).json({
      status: "OK",
      message: "Admin successfully logged in!",
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while logging in the admin"
    });
  }
}

// Get all admins
async function getAllAdmins(req, res) {
  try {
    const admins = await Administrator.find();
    return res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching admins"
    });
  }
}

// Get admin by ID
async function getAdminById(req, res) {
  const { id } = req.params;

  try {
    const admin = await Administrator.findById(id);
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }
    return res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching the admin"
    });
  }
}

// Update admin
async function updateAdmin(req, res) {
  const { id } = req.params;
  const updates = req.body;

  try {
    const admin = await Administrator.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Admin successfully updated!",
      admin
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the admin"
    });
  }
}

// Delete admin
async function deleteAdmin(req, res) {
  const { id } = req.params;

  try {
    const admin = await Administrator.findByIdAndDelete(id);
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }
    return res.status(200).json({
      status: "OK",
      message: "Admin successfully deleted!"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while deleting the admin"
    });
  }
}

module.exports = {
  registerAdmin,
  loginAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
};
