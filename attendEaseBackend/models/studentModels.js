const mongoose = require ('mongoose');
const bcryptjs = require ('bcryptjs');


const StudentSchema = new mongoose.Schema ({
    matricule: {
        type: String,
        required: [true, "matricule required!"],
        unique: [true, "Matricule must be unique, insert another!"]
    },
    studentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Password required!"],
        unique: [true, "Password must be unique"]
    },
    faculty: {
        type:String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
}, {timestamps: true});


// Hash password before saving the student
StudentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcryptjs.genSalt(10);
      this.password = await bcryptjs.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });
  
  // Compare password method for login
  StudentSchema.methods.comparePassword = async function (candidatePassword) {
    return bcryptjs.compare(candidatePassword, this.password);
  };
  
const Students = mongoose.model('Students', StudentSchema);
module.exports = {Students}
