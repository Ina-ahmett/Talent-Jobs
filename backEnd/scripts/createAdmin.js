require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin.js');

async function createInitialAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Check if admin exists
    const adminExists = await Admin.findOne({ email: 'admin@admin.com' });
    if (adminExists) {
      console.log('Admin already exists');
      process.exit(0);
    }

    // Create admin
    const admin = await Admin.create({
      email: 'admin@admin.com',
      password: 'admin123'
    });

    console.log('Admin created successfully:', {
      id: admin._id,
      email: admin.email,
      role: admin.role
    });
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

createInitialAdmin(); 