const Jobseeker = require('../models/jobseeker');
const bcrypt = require('bcryptjs');

// ➕ CREATE Jobseeker
exports.createJobseeker = async (req, res) => {
  try {
    const {
      fullName, email, phone, gender, dateOfBirth,
      nationality, city, educationLevel, fieldOfStudy,
      placeOfEducation, experienceYears, desiredJobTitle,
      skills, password
    } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle files
    const resume = req.files?.resume?.[0]?.filename
    const profileImage = req.files?.profileImage?.[0]?.filename
    console.log("FILES:", req.files);
    console.log("BODY:", req.body);

    const newJobseeker = new Jobseeker({
      fullName,
      email,
      phone,
      gender,
      dateOfBirth,
      nationality,
      city,
      educationLevel,
      fieldOfStudy,
      placeOfEducation,
      experienceYears,
      desiredJobTitle,
      skills,
      resume,
      profileImage,
      password: hashedPassword,
    });

    console.log("✅ REQ.BODY:", req.body);
    console.log("📁 REQ.FILES:", req.files);
    // code-kaaga oo kale...

    await newJobseeker.save();
    res.status(201).json({ message: "Jobseeker registered successfully!" });
  } catch (error) {
    console.error("❌ BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// 📥 GET ALL Jobseekers
exports.getAllJobseekers = async (req, res) => {
  try {
    const jobseekers = await Jobseeker.find();
    res.status(200).json(jobseekers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 GET SINGLE Jobseeker by ID
exports.getJobseekerById = async (req, res) => {
  try {
    const jobseeker = await Jobseeker.findById(req.params.id);
    if (!jobseeker) {
      return res.status(404).json({ message: "Jobseeker not found" });
    }
    res.status(200).json(jobseeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE Jobseeker
exports.updateJobseeker = async (req, res) => {
  try {
    const updates = req.body;

    // Haddii password lasoo update-gareynayo
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    // Update file paths haddii la helay
    if (req.files?.resume?.[0]) {
      updates.resume = req.files.resume[0].filename;
    }
    if (req.files?.profileImage?.[0]) {
      updates.profileImage = req.files.profileImage[0].filename;
    }

    const updatedJobseeker = await Jobseeker.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    res.status(200).json(updatedJobseeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ DELETE Jobseeker
exports.deleteJobseeker = async (req, res) => {
  try {
    const deleted = await Jobseeker.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Jobseeker not found" });
    }
    res.status(200).json({ message: "Jobseeker deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
