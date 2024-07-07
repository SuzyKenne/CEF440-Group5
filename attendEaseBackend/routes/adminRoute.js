// routes/adminRoutes.js
const express = require('express');
const { registerAdmin, loginAdmin, getAllAdmins, getAdminById, updateAdmin, deleteAdmin} = require('../controllers/adminController');

const router = express.Router();

//register admin
router.post('/register', registerAdmin);

//login admin
router.post('/login', loginAdmin);

//get all admin
router.get('/', getAllAdmins);

//get one admin
router.get('/:id', getAdminById);

//update admin
router.put('/:id', updateAdmin);

//delete admin
router.delete('/:id', deleteAdmin);

module.exports = router;
