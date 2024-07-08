const mongoose = require ('mongoose')
const Levels = require ("../models/levelModels")


//functions to get all the levels in the database
async function getAllLevels(req, res, next){
    try {
        const levels = await Levels.find({})

        return next(
            res.status(200).json(levels)
            
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message: error
            })
        )
    }
}


//function to get one level
async function getOneLevel(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const level = await Levels.findById({_id : id })

    if(!level){
        return next(
            res.status(404).json({
                message: "Level  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (level)
    )
}


//function to create a level
async function createLevel(req, res, next){
    const levelData= req.body;

    try {
        const newLevel = await Levels.create(levelData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Level succefully added!"
            })
        
        )
    } catch (error) {
        console.log(error)
        return next(
            res.status(400).json({
                message: "level wasn't added!"
            })
        )
    }
    
}


//function to update  a level
async  function updateLevel(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const level = await Levels.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!level){
        return next(
            res.status(404).json({
                message: "level Not Found"
            })
        )
    }

    return next(
        res.status(200).json(level)
    )
}  

//function to delete a level from database
async function deleteLevel(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const level = await Levels.findByIdAndDelete({_id: id })

if(!level){
        return next(
            res.status(404).json({
                message: "Level Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Level  succefully deleted!"
        })
       
    )
}


module.exports = { getAllLevels, getOneLevel, createLevel, updateLevel, deleteLevel}