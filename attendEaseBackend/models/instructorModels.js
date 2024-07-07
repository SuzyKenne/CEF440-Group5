const mongoose = require ('mongoose');
const bcryptjs = require ('bcryptjs');


const InstructorSchema = new mongoose.Schema ({
    instructorId: {
        type: String,
        required: [true, "Matricule required!"],
        unique: [true, "Matricule be unique"]
    },
    instructorName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email address required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password address required!"],
        unique: [true, "Password must be unique!"]
    }
}, {timestamps: true});

// Hash password before saving the instructor
InstructorSchema.pre('save', async function (next) {
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
  InstructorSchema.methods.comparePassword = async function (candidatePassword) {
    return bcryptjs.compare(candidatePassword, this.password);
  };


const Instructors = mongoose.model("Instructors", InstructorSchema);
module.exports = Instructors;
