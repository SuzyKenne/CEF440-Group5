const  Express = require ("express");
const  { getAllCourses, getOneCourse, createCourse, updateCourse, deleteCourse} = require("../controllers/courseController");


const router = Express.Router();

//get all Courses
router.get("/", getAllCourses);


//get one Course
router.get("/:id", getOneCourse);

// create a Course
router.post("/", createCourse);

//update a Course
router.patch("/:id", updateCourse);

//delete a Course
router.delete("/:id",deleteCourse);

module.exports = router;