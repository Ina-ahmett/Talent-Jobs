const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true }, // Will store image URL after upload
  website: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

CompanySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Company", CompanySchema);