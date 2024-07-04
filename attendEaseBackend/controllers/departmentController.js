const mongoose = require ('mongoose')
const Departments = require ("../models/departmentModels")


//functions to get all the department in the database
async function getAllDepartment(req, res, next){
    try {
        const departments = await Departments.find({})

        return next(
            res.status(200).json(departments)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one department
async function getOneDepartment(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const department = await Departments.findById({_id : id })

    if(!department){
        return next(
            res.status(404).json({
                message: "Department  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (department)
    )
}


//function to create a department
async function createDepartment(req, res, next){
    const departmentData= req.body;

    try {
        const newDepartment = await Departments.create(departmentData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Department succefully added!"
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


//function to update  a department
async  function updateDepartment(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const department = await Departments.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!department){
        return next(
            res.status(404).json({
                message: "Department Not Found"
            })
        )
    }

    return next(
        res.status(200).json(department)
    )
}  

//function to delete a department from database
async function deleteDepartment(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const department = await Departments.findByIdAndDelete({_id: id })

if(!department){
        return next(
            res.status(404).json({
                message: "Department Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Department succefully deleted!"
        })
       
    )
}


module.exports = { getAllDepartment, getOneDepartment, createDepartment, updateDepartment, deleteDepartment}