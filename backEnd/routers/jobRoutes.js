const express = require("express");
const { createJob, getJobs, getJobById, updateJob, deleteJob } = require("../controllers/jobController");
const upload = require("../Middleware/uploadMiddleware");
const router = express.Router();

router.post("/create/jobs", upload.single("image"), createJob);
router.get("/read/jobs", getJobs);
router.get("/readSingle/jobs/:id", getJobById);
router.put("/update/jobs/:id", upload.single("image"), updateJob);
router.delete("/delete/jobs/:id", deleteJob);

module.exports = router;
