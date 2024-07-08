const  Express = require ("express");
const  { getAllLevels, getOneLevel, createLevel, updateLevel, deleteLevel } = require("../controllers/levelController");


const router = Express.Router();

//get all Levels
router.get("/",getAllLevels);


//get one Level
router.get("/:id", getOneLevel);

// create a Level
router.post("/", createLevel);

//update a Level
router.patch("/:id", updateLevel);

//delete a level
router.delete("/:id",deleteLevel);

module.exports = router;