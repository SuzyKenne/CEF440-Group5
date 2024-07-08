const mongoose = require ('mongoose')
const Faculties = require ("../models/facultyModels")


//functions to get all the faculties in the database
async function getAllFaculty(req, res, next){
    try {
        const faculties = await Faculties.find({})

        return next(
            res.status(200).json(faculties)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one faculties
async function getOneFaculty(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const faculty = await Faculties.findById({_id : id })

    if(!faculty){
        return next(
            res.status(404).json({
                message: "faculty  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (faculty)
    )
}


//function to create a faculty
async function createFaculty(req, res, next){
    const facultyData= req.body;

    try {
        const newFaculty = await Faculties.create(facultyData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Faculty succefully added!"
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


//function to update  a faculty
async  function updateFaculty(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const faculty = await Faculties.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!faculty){
        return next(
            res.status(404).json({
                message: "Faculty Not Found"
            })
        )
    }

    return next(
        res.status(200).json(faculty)
    )
}  

//function to delete a faculty from database
async function deleteFaculty(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const faculty = await Faculties.findByIdAndDelete({_id: id })

if(!faculty){
        return next(
            res.status(404).json({
                message: "Faculty Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Faculty succefully deleted!"
        })
       
    )
}


module.exports = { getAllFaculty, getOneFaculty, createFaculty, updateFaculty, deleteFaculty }