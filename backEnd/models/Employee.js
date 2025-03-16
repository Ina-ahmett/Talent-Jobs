const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Stores image URL
  cv: { type: String, required: true }, // Stores CV file URL
});

module.exports = mongoose.model("Employee", EmployeeSchema);