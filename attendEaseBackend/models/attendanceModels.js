const mongoose = require ('mongoose');


const AttendanceSchema = new mongoose.Schema ({
    attendanceId: {
        type: String,
        required: true,
    },
    attendanceDate: {
        type: Date,
        required: true
    },
    
    attendancePeriod: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true
    },
    
}, {timestamps: true});

const Attendances = mongoose.model("Attendance", AttendanceSchema);
module.exports = {Attendances}