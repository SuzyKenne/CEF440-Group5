const mongoose = require ('mongoose');


const biometricDataSchema = new Schema ({
    biometricData: {
        type: String,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    }
}, {timestamps: true})
