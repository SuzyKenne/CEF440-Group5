const mongoose = require ('mongoose');


const courseSchema = new mongoose.Schema ({
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    courseTitle: {
      type: String,
      required: true,
    },
    courseLevel: {
      type: String,
      required: true
    },
    
}, {timestamps: true});
const Courses = mongoose.model ("Courses", courseSchema);
module.exports = Courses
