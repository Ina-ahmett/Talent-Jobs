const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create upload directories if they don't exist
const uploadDirs = ["uploads/profile", "uploads/resume", "uploads/others"];
uploadDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// File filter for validation
const fileFilter = (req, file, cb) => {
  const imageTypes = /jpeg|jpg|png/;
  const docTypes = /pdf|doc|docx/;
  const extname = path.extname(file.originalname).toLowerCase().slice(1);

  if (file.fieldname === "profileImage") {
    if (imageTypes.test(extname)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, PNG, or JPEG images are allowed for profile image"));
    }
  } else if (file.fieldname === "resume") {
    if (docTypes.test(extname)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, or DOCX files are allowed for resume"));
    }
  } else {
    cb(null, true); // Allow other fields by default
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "profileImage") {
      cb(null, "uploads/profile");
    } else if (file.fieldname === "resume") {
      cb(null, "uploads/resume");
    } else {
      cb(null, "uploads/others");
    }
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueName + ext);
  },
});

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

module.exports = upload;