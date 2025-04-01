const Company = require("../models/Company");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    const { name, phone, companyType, industry, description, establishedYear, location, website, email, password } = req.body;
    const logo = req.file ? `/uploads/${req.file.filename}` : "";

    const securePassword = password || crypto.randomBytes(16).toString("hex");

    const company = await Company.create({ name, phone, companyType, industry, description, establishedYear, logo, location, website, email, password: securePassword });
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a company
exports.updateCompany = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) updates.logo = `/uploads/${req.file.filename}`;

    const company = await Company.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!company) return res.status(404).json({ message: "Company not found" });

    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });

    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
