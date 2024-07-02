const express = require ('express');
const Student = require ("../models/studentModels");
const { default: mongoose } = require('mongoose');



//function to get all student based on their level
async function getAllStudent(req, res, next) {
    try {
        const students = await Student.find({});

        return next(
            res.status(200).json(students)
        )
    } catch (error) {
        return next (
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get a student
async function getOneStudent(req, res, next) {
    const {id}=req.params;
    try {
        const student = await Student.findById();

        return next(
            res.status(200).json(student)
        )
    } catch (error) {
        return next (
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to create a student to the database
async function createStudent(req, res, next) {
    const studentData = req.body;

    try {
        const newStudent = await Student.create(studentData);

        return next (
            res.status(200).json({
                status: "OK",
                message: "Student successfully added!"
            })
        )
    } catch (error) {
        res.status(400).json({
            message: "Failed to create student!"
        })
    }
};


//function to udpate student
async function updateStudent(req, res, next) {
    const {id} = req.params;

    const update = req.body;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const student = await Student.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!student){
        return next(
            res.status(404).json({
                message: "student Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(student)
    )
}


//function to delete a student
async function deleteStudent(req, res, next) {
    const {id} = req.params;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid student Id!"
            })
        )
    }


    const student = await Student.findByIdAndDelete({_id: id})

    if( !student) {
        return next(
            res.status(404).json({
                message: "student Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            message: "Student successfully delleted!"
        })
    )
}

module.export= {getAllStudent, deleteStudent, updateStudent, createStudent, getOneStudent};