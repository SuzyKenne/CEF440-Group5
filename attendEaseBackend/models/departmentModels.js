const mongoose = require ('mongoose');


const DepartmentSchema = new mongoose.Schema ({
    departmentName: {
        type: String,
        required: [true, "Department name required!"]
    },
    
    
}, {timestamps: true});
const Departments = mongoose.model("Department", DepartmentSchema);
module.exports = {Departments}
