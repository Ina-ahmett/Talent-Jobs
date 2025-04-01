const mongoose = require('mongoose');
const Company = require('../models/Company');
require('dotenv').config();

// ✅ Update logo paths in database
const updateLogos = async () => {
    try {
        const company = await Company.find();
  
         for (let user of company) {
            // Haddii logo uu yahay '/uploads/filename.png', u beddel '/uploads/logos/filename.png'
            if (
            user.logo &&
            user.logo.startsWith('/uploads/') &&! user.logo.startsWith('/uploads/logos/')
            ){
            const oldPath = user.logo;
            const newPath = oldPath.replace('/uploads/', '/uploads/logos/');
            user.logo = newPath;
            await user.save();
            console.log(`✅ Updated: ${user.fullName} → ${newPath}`);
            }
        }
        console.log("🎉 All logo paths updated successfully!");
        process.exit(); // Ka bax script-ka

    } catch (err) {
        console.error("❌ Error during update:", err.message);
        process.exit(1);
    }
};

updateLogos();
