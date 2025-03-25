const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const companyRoutes = require("./routers/companyRoutes");
const employeeRoutes = require("./routers/employeeRoutes");
const jobRoutes = require("./routers/jobRoutes");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/", companyRoutes);
app.use("/", employeeRoutes);
app.use("/", jobRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
