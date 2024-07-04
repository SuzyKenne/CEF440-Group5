const mongoose = require ('mongoose')
const Attendances = require ("../models/attendanceModels")


//functions to get all the attendances in the database
async function getAllAttendance(req, res, next){
    try {
        const attendances = await Attendances.find({})

        return next(
            res.status(200).json(attendances)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one attendance
async function getOneAttendance(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const attendance = await Attendances.findById({_id : id })

    if(!attendance){
        return next(
            res.status(404).json({
                message: "attendance  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (attendance)
    )
}


//function to create an attendance session
async function createAttendance(req, res, next){
    const attendanceData= req.body;

    try {
        const newAttendance = await Attendances.create(attendanceData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Attendance succefully added!"
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


//function to update  an attendance
async  function updateAttendance(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const attendance = await Attendances.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!attendance){
        return next(
            res.status(404).json({
                message: "Attendance Not Found"
            })
        )
    }

    return next(
        res.status(200).json(attendance)
    )
}  

//function to delete an attendance from database
async function deleteAttendance(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const attendance = await Attendances.findByIdAndDelete({_id: id })

if(!department){
        return next(
            res.status(404).json({
                message: "Attendance Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Attendance succefully deleted!"
        })
       
    )
}


module.exports = { getAllAttendance, getOneAttendance, createAttendance, updateAttendance, deleteAttendance }