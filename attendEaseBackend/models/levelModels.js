const mongoose = require ('mongoose');


const LevelSchema = new mongoose.Schema ({
    levelName: {
        type: String,
        required: [true, "Level name required!"]
    }
    
}, {timestamps: true});
const Levels = mongoose.model("Level", LevelSchema);
module.exports = {Levels};