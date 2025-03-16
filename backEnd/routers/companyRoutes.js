const express = require("express");
const { createCompany, getCompanies, getCompanyById, updateCompany, deleteCompany } = require("../controllers/companyController");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/create/company", upload.single("logo"), createCompany);
router.get("/read/company", getCompanies);
router.get("/readSingle/company/:id", getCompanyById);
router.put("/update/company/:id", upload.single("logo"), updateCompany);
router.delete("/delete/company/:id", deleteCompany);

module.exports = router;
