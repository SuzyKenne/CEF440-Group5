require('dotenv').config();
const express = require ('express');
const path = require('path');
const mongoose = require ('mongoose');
const cors = require("cors");

//importing routes
const studentRoute = require("./routes/studentRoute");
const instructorRoute = require("./routes/instructorRoute");
const attendanceRoute = require("./routes/attendanceRoute")
const facultyRoute = require("./routes/facultyRoute")
const departmentRoute = require("./routes/departmentRoute");
const biometricDataRoute = require("./routes/biometricDataRoute")
const levelRoute = require("./routes/levelRoute")
const courseRoute = require("./routes/courseRoute")


const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})


//Check database connect or not

mongoose.connect(process.env.DATABASE1_URL)
.then(()=>{
    console.log("Database1 Connected Successfully");
})
 .catch(()=>{
  console.log("Database was not connected");
})

//Check the second datbase connection
mongoose.connect(process.env.DATABASE2_URL)
.then(()=>{
    console.log("Database2 Connected Successfully");
})
 .catch(()=>{
  console.log("Database was not connected");
})


// middleware
app.use(express.json());
app.use( (req, res, next) =>{
    console.log(req.path, req.method);
    next();
});
app.use(cors({
    "origin" : ["http://127.0.0.1:3000"],
    "methods" : ["GET", "POST", "DELETE", "PATCH"]
}));


//defining route
app.use("/students", studentRoute);
app.use("/courses", courseRoute);
app.use("/instructors", instructorRoute)
app.use("/faculties", facultyRoute);
app.use("/attendances", attendanceRoute);
app.use("/levels", levelRoute);
app.use("/departments", departmentRoute);
app.use("/biometricDatas", biometricDataRoute)

app.use("/", (req, res)=>{
    return (
        res.status(200).json({
            message: "Root URL, Please navigate to a valid Endpoint"
        })
    )
})


console.log('studentRoute:', typeof studentRoute);
console.log('instructorRoute:', typeof instructorRoute);
console.log('attendanceRoute:', typeof attendanceRoute);
console.log('facultyRoute:', typeof facultyRoute);
console.log('departmentRoute:', typeof departmentRoute);
console.log('biometricRoute:', typeof biometricRoute);
console.log('levelRoute:', typeof levelRoute);
console.log('courseRoute:', typeof courseRoute);
