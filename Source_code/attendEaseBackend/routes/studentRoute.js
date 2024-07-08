const  Express = require ("express");
const  {  getAllStudent, deleteStudent, updateStudent, createStudent, getOneStudent } = require("../controllers/studentController");


const router = Express.Router();

//get all students
router.get("/", getAllStudent);
 

//get one student
router.get("/:id", getOneStudent);

// create a student
router.post("/", createStudent);

//update a student
router.patch("/:id", updateStudent);

//delete a student
router.delete("/:id",deleteStudent);

module.exports = router;