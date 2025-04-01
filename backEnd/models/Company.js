const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const CompanySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    unique: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  phone: { 
    type: String, 
    required: true,
    match: [/^\+?[0-9]{7,15}$/, "Please enter a valid 10-digit phone number"]
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8
  },
  logo: { 
    type: String, 
    required: false
  }, // Will store image URL after upload
  location: { 
    type: String, 
    required: true 
  },
  description: {
    type: String,
    required: false
  },
  website: { 
    type: String, 
    required: false,
    match: [/^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/, 'Please enter a valid URL']
  },
  companyType: {
    type: String,
    enum: ['Private', 'Public', 'NGO', 'Government'],
    required: true
  },
  // Qaybta ay shirkaddu ka shaqeyso ma IT baa  etc ...
  industry: {
    type: String,
    required: false
  },
  establishedYear: {
    type: Number,
    required: false,
    min: 1900,
    max: new Date().getFullYear()
  }
}, { timestamps: true });

CompanySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Company", CompanySchema);