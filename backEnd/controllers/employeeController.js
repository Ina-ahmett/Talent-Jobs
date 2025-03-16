const Employee = require("../models/Employee");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, address, phoneNumber, description } = req.body;
    const image = req.files["image"] ? `/uploads/${req.files["image"][0].filename}` : "";
    const cv = req.files["cv"] ? `/uploads/${req.files["cv"][0].filename}` : "";

    const employee = await Employee.create({ name, address, phoneNumber, description, image, cv });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const updates = req.body;
    if (req.files["image"]) updates.image = `/uploads/${req.files["image"][0].filename}`;
    if (req.files["cv"]) updates.cv = `/uploads/${req.files["cv"][0].filename}`;

    const employee = await Employee.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!employee) return res.status(404).json({ message: "Employee not found" });

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
