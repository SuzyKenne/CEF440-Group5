const  Express = require ("express");
const  { getAllFaculty, getOneFaculty, createFaculty, updateFaculty, deleteFaculty} = require("../controllers/facultyController");


const router = Express.Router();

//get all Faculties
router.get("/", getAllFaculty);


//get one Faculty
router.get("/:id", getOneFaculty);

// create a Faculty
router.post("/", createFaculty);

//update a Faculty
router.patch("/:id", updateFaculty);

//delete a Faculty
router.delete("/:id",deleteFaculty);

module.exports = router;