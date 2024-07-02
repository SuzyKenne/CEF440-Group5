const mongoose = require ('mongoose');


const CourseSchema = new Schema ({
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
const Courses = mongoose.model("Course", CourseSchema);
module.exports = {Courses}
