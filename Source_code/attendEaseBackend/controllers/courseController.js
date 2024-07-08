const mongoose = require ('mongoose')
const Courses = require ("../models/courseModels")


//functions to get all the courses in the database
async function getAllCourses(req, res, next){
    try {
        const courses = await Courses.find({})

        return next(
            res.status(200).json(courses)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one course
async function getOneCourse(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const course = await Courses.findById({_id : id })

    if(!course){
        return next(
            res.status(404).json({
                message: "course  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (course)
    )
}


//function to create a course
async function createCourse(req, res, next){
    const courseData= req.body;

    try {
        const newCourse = await Courses.create(courseData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Course succefully added!"
            })
        
        )
    } catch (error) {
        console.log(error)
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
    
}


//function to update  a course
async  function updateCourse(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const course = await Courses.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!course){
        return next(
            res.status(404).json({
                message: "course Not Found"
            })
        )
    }

    return next(
        res.status(200).json(course)
    )
}  

//function to delete a course from database
async function deleteCourse(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const course = await Courses.findByIdAndDelete({_id: id })

if(!course){
        return next(
            res.status(404).json({
                message: "Course Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Course succefully deleted!"
        })
       
    )
}


module.exports = { getAllCourses, getOneCourse, createCourse, updateCourse, deleteCourse}