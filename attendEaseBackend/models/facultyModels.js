const mongoose = require ('mongoose');


const FacultySchema = new mongoose.Schema ({
    facultyName: {
        type: String,
        required: [true, "Faculty name required!"]
    },
    facultyAbrev: {
        type: String,
        required: true
    }
    
}, {timestamps: true});
const Faculties = mongoose.model("Faculty", FacultySchema);
module.exports = Faculties;