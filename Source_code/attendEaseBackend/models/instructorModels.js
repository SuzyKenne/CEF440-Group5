const mongoose = require ('mongoose');


const InstructorSchema = new mongoose.Schema ({
    instructorMatricule: {
        type: String,
        required: [true, "Matricule required!"],
        unique: [true, "Matricule be unique"]
    },
    instructorName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email address required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password address required!"],
        unique: [true, "Password must be unique!"]
    }
}, {timestamps: true});


const Instructors = mongoose.model("Instructor", InstructorSchema);
module.exports = {Instructors};
