// middleware/validateCompany.js
const Company = require("../models/Company");

const validateCompany = async (req, res, next) => {
  const { name, email, password, phone, establishedYear } = req.body;

  // Check required fields
  if (!name || !email || !password || !phone || !establishedYear) {
    return res.status(400).json({ message: "All required fields must be filled" });
  }

  // Validate unique email & company name
  const existingCompany = await Company.findOne({ $or: [{ email }, { name }] });
  if (existingCompany) {
    return res.status(400).json({ message: "Company name or email already exists" });
  }

  // Strong password policy
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: "Password must be at least 8 characters, contain 1 uppercase and 1 number" });
  }

  // File upload validation (logo)
  if (req.file) {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ message: "Only JPG and PNG formats are allowed" });
    }
  }

  next();
};

module.exports = validateCompany;