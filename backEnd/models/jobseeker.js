const mongoose = require("mongoose");

const jobseekerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minlength: [3, "Full name must be at least 3 characters"],
    maxlength: [100, "Full name cannot exceed 100 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\+?\d{7,15}$/, "Invalid phone number format"], // e.g. +25261xxxxxxx
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth is required"],
  },
  nationality: {
    type: String,
    default: "Somali",
  },
  city: {
    type: String,
    required: [true, "City is required"],
    trim: true,
  },
  educationLevel: {
    type: String,
    required: [true, "Education level is required"],
    enum: ['Primary', 'Secondary', 'Diploma', 'Bachelor', 'Master', 'PhD', 'Other'],
  },
  fieldOfStudy: {
    type: String,
    required: [true, "Field of study is required"],
  },
  placeOfEducation: {
    type: String,
    required: [true, "Place of education is required"],
  },
  experienceYears: {
    type: Number,
    default: 0,
    min: [0, "Experience years cannot be negative"],
    max: [50, "Experience years cannot be more than 50"],
  },
  skills: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.length > 0;
      },
      message: "At least one skill is required",
    },
  },
  resume: {
    type: String,
    required: [true, "Resume file is required"],
  },
  profileImage: {
    type: String,
    required: [true, "Profile image is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
}, { timestamps: true });

module.exports = mongoose.model("Jobseeker", jobseekerSchema);
