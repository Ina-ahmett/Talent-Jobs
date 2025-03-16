const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Stores image URL
});

module.exports = mongoose.model("Job", JobSchema);