const mongoose = require ('mongoose');


const departmentSchema = new mongoose.Schema ({
    departmentName: {
        type: String,
        required: [true, "Department name required!"]
    },
    departmentAbrev: {
        type: String,
        required:true
    },
    facultyAbrev: {
        type: String,
        required: true
    }
}, {timestamps: true});
const Departments = mongoose.model("Department", departmentSchema);
module.exports = Departments
