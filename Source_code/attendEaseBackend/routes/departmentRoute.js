const  Express = require ("express");
const  { getAllDepartment, getOneDepartment, createDepartment, updateDepartment, deleteDepartment} = require("../controllers/departmentController");


const router = Express.Router();

//get all Departments
router.get("/",getAllDepartment);


//get one Department
router.get("/:id", getOneDepartment);

// create a Department
router.post("/", createDepartment);

//update a Department
router.patch("/:id", updateDepartment);

//delete a Department
router.delete("/:id",deleteDepartment);

module.exports = router;