const mongoose = require ('mongoose');


const StudentSchema = new mongoose.Schema ({
    matricule: {
        type: String,
        required: [true, "matricule required!"],
        unique: [true, "Matricule must be unique, insert another!"]
    },
    studentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Password required!"],
        unique: [true, "Password must be unique"]
    },
    faculty: {
        type:String,
        required: true
    },
    departement: {
        type: String,
        required: true
    },
    biometricData: {
        type: String,
        required: [true, "BiometricData required"],
        unique: [true, "Biometric data must  be unique!"]
    },

}, {timestamps: true});

const Students = mongoose.model('Student', StudentSchema);
module.exports = {Students}
