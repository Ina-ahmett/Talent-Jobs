const express = require("express");
const { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require("../controllers/employeeController");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/create/employee", upload.fields([{ name: "image", maxCount: 1 }, { name: "cv", maxCount: 1 }]), createEmployee);
router.get("/read/employee", getEmployees);
router.get("/readSingle/employee/:id", getEmployeeById);
router.put("/update/employee/:id", upload.fields([{ name: "image", maxCount: 1 }, { name: "cv", maxCount: 1 }]), updateEmployee);
router.delete("/delete/employee/:id", deleteEmployee);

module.exports = router;