const  Express = require ("express");
const  { getAllInstructors, getOneInstructor, createInstructor, updateInstructor, deleteInstructor} = require("../controllers/instructorController");


const router = Express.Router();

//get all Instructors
router.get("/",getAllInstructors);


//get one Instructor
router.get("/:id", getOneInstructor);

// create a Instructor
router.post("/", createInstructor);

//update a Instructor
router.patch("/:id", updateInstructor);

//delete a Instructor
router.delete("/:id",deleteInstructor);

module.exports = router;