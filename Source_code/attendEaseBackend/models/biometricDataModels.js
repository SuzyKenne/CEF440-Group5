const mongoose = require ('mongoose');


const BiometricDataSchema = new mongoose.Schema ({
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
const BiometricDAtas = mongoose.model("Biometric", BiometricDataSchema);
module.exports = { BiometricDAtas };