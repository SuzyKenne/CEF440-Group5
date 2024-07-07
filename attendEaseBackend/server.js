require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require("cors");

// Importing routes
const studentRoute = require("./routes/studentRoute");
const instructorRoute = require("./routes/instructorRoute");
const attendanceRoute = require("./routes/attendanceRoute");
const facultyRoute = require("./routes/facultyRoute");
const departmentRoute = require("./routes/departmentRoute");
const levelRoute = require("./routes/levelRoute");
const courseRoute = require("./routes/courseRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use(cors({
    origin: ["http://127.0.0.1:3000", "http://127.0.0.1:8081"],
    methods: ["GET", "POST", "DELETE", "PATCH"]
}));

// Defining routes
app.use("/students", studentRoute);
app.use("/courses", courseRoute);
app.use("/instructors", instructorRoute);
app.use("/faculties", facultyRoute);
app.use("/attendances", attendanceRoute);
app.use("/levels", levelRoute);
app.use("/departments", departmentRoute);
app.use("/administrators", adminRoute);

app.use("/", (req, res) => {
    return res.status(200).json({
        message: "Root URL, Please navigate to a valid Endpoint"
    });
});

// Log route imports
console.log('studentRoute:', typeof studentRoute);
console.log('instructorRoute:', typeof instructorRoute);
console.log('attendanceRoute:', typeof attendanceRoute);
console.log('facultyRoute:', typeof facultyRoute);
console.log('departmentRoute:', typeof departmentRoute);
console.log('levelRoute:', typeof levelRoute);
console.log('courseRoute:', typeof courseRoute);
console.log('adminRoute:', typeof adminRoute);

const PORT = process.env.PORT || 3000;



// Check database connections


const connectToDatabase = async (dbUrl, dbName) => {
    try {
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true , dbName: dbName});
        console.log(`${dbName} Connected Successfully`);
    } catch (error) {
        console.error(`${dbName} was not connected:`, error);
    }
};

connectToDatabase(process.env.DATABASE1_URL, "attendEaseDatabase");
//connectToDatabase(process.env.DATABASE2_URL, "school_info")
//db.copyDatabase("attendEaseDatabase","school_info");
// mongoose.connect(process.env.DATABASE1_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Database1 Connected Successfully");
//     })
//     .catch((error) => {
//         console.error("Database1 was not connected:", error);
//     });


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
