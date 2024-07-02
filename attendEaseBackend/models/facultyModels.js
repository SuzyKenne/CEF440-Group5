const mongoose = require ('mongoose');


const FacultySchema = new mongoose.Schema ({
    facultyName: {
        type: String,
        required: [true, "Faculty name required!"]
    }
    
}, {timestamps: true});
const Faculties = mongoose.model("Faculty", FacultySchema);
module.exports = {Faculties};