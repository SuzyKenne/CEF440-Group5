const mongoose = require ('mongoose');


const enrollementSchema = new Schema ({
    enrollementId: {
        type: String,
        required: true
    },
    enrollementDate: {
        type: String,
        required: true
    },
    studentMatricule: {
        type: String,
        required: true
    }
    
}, {timestamps: true})