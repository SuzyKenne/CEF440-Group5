const mongoose = require ('mongoose')
const BiometricDAtas = require ("../models/biometricDataModels")


//functions to get all the biometrics in the database
async function getAllBiometricData(req, res, next){
    try {
        const biometrics = await BiometricDAtas.find({})

        return next(
            res.status(200).json(biometrics)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one biometric data
async function getOneBiometricData(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const biometric = await BiometricDAtas.findById({_id : id })

    if(!biometric){
        return next(
            res.status(404).json({
                message: "biometric   Not Found"
            })
        )
    }

    return next(
        res.status(200).json (biometric)
    )
}


//function to create a biometricData
async function createBiometricData(req, res, next){
    const biometricData= req.body;

    try {
        const newBiometric = await BiometricDAtas.create(facultyData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Biometric succefully added!"
            })
        
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
    
}


//function to update  a Biometric
async  function updateBiometricData(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const biometric = await BiometricDAtas.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!biometric){
        return next(
            res.status(404).json({
                message: "Biometric Not Found"
            })
        )
    }

    return next(
        res.status(200).json(biometric)
    )
}  

//function to delete a biometricData from database
async function deleteBiometricData(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const biometric = await BiometricDAtas.findByIdAndDelete({_id: id })

if(!biometric){
        return next(
            res.status(404).json({
                message: "Biometric Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Biometric succefully deleted!"
        })
       
    )
}


module.exports = { getAllBiometricData, getOneBiometricData, createBiometricData, updateBiometricData, deleteBiometricData }