const express = require("express");
const mongoose = require("mongoose");
const companyRoutes = require("./routers/companyRoutes");
const employeeRoutes = require("./routers/employeeRoutes");
const jobRoutes = require("./routers/jobRoutes");
const path = require("path");
require("dotenv").config();
const cors = require('cors')

const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(companyRoutes);
app.use(employeeRoutes);
app.use(jobRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
