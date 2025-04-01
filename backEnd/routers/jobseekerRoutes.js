const express = require("express");
const { createJobseeker, getAllJobseekers, getJobseekerById, updateJobseeker, deleteJobseeker } = require("../controllers/jobseekerController");
const upload = require("../Middleware/uploadMiddleware");
const router = express.Router();

router.post("/create/jobseeker", upload.fields([{name: "profileImage", maxCount: 1}, { name: "resume", maxCount: 1 }]), createJobseeker);
router.get("/read/jobseeker", getAllJobseekers);
router.get("/readSingle/jobseeker/:id", getJobseekerById);
router.put("/update/jobseeker/:id", upload.fields([{ name: "profileImage", maxCount: 1 }, { name: "resume", maxCount: 1 }]), updateJobseeker);
router.delete("/delete/jobseeker/:id", deleteJobseeker);

module.exports = router;