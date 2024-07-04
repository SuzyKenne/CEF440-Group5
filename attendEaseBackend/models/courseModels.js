const mongoose = require ('mongoose');


const CourseSchema = new mongoose.Schema ({
    courseCode: {
        type: String,
        required: true
    },
    courseName: {
      type: String,
      required: true
    },
    courseLevel: {
      type: String,
      required: true
    },
    courseInstructor: {
      type: String,
      required: true
    }
    
}, {timestamps: true});
const Courses = mongoose.model("Courses", CourseSchema);
module.exports = Courses
