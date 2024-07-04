const  Express = require ("express");
const  { getAllBiometricData, getOneBiometricData, createBiometricData, updateBiometricData, deleteBiometricData} = require("../controllers/biometricDataController");


const router = Express.Router();

//get all Biometrics
router.get("/",getAllBiometricData);


//get one Biometric
router.get("/:id", getOneBiometricData);

// create a Biometric
router.post("/", createBiometricData);

//update a boimetric
router.patch("/:id", updateBiometricData);

//delete a Biometric
router.delete("/:id",deleteBiometricData);

module.exports = router;
