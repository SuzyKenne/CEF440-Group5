const  Express = require ("express");
const  { getAllAttendance, getOneAttendance, createAttendance, updateAttendance, deleteAttendance  } = require("../controllers/attendanceController");


const router = Express.Router();

//get all Attendances
router.get("/",getAllAttendance);


//get one attendance
router.get("/:id", getOneAttendance);

// create an attendance
router.post("/", createAttendance);

//update an attendance
router.patch("/:id", updateAttendance);

//delete an attendance
router.delete("/:id",deleteAttendance);

module.exports = router;