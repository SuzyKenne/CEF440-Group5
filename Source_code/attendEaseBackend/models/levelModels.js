const mongoose = require ('mongoose');


const levelSchema = new mongoose.Schema ({
    levelName: {
        type: String,
        required: [true, "Level name required!"],
        unique: [true, "the level name should be unique"]
    }
    
}, {timestamps: true});
const Levels = mongoose.model("Levels", levelSchema);
module.exports = Levels;