const mongoose = require ('mongoose')
const Instructors = require ("../models/instructorModels")


//functions to get all instructors in the database
async function getAllInstructors(req, res, next){
    try {
        const instructors = await Instructors.find({})

        return next(
            res.status(200).json(instructors)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one instructor
async function getOneInstructor(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const instructor = await Instructors.findById({_id : id })

    if(!instructor){
        return next(
            res.status(404).json({
                message: "Instructor  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (instructor)
    )
}


//function to create an instructor
async function createInstructor(req, res, next){
    const instructorData= req.body;

    try {
        const newInstructor = await Instructors.create(instructorData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Instructor succefully added!"
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


//function to update  an instructor
async  function updateInstructor(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const instructor = await Instructors.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!instructor){
        return next(
            res.status(404).json({
                message: "Instructor Not Found"
            })
        )
    }

    return next(
        res.status(200).json(instructor)
    )
}  

//function to delete an instructor from database
async function deleteInstructor(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const instructor = await Instructors.findByIdAndDelete({_id: id })

if(!instructor){
        return next(
            res.status(404).json({
                message: "Instructor Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Instructor succefully deleted!"
        })
       
    )
}


module.exports = { getAllInstructors, getOneInstructor, createInstructor, updateInstructor, deleteInstructor}