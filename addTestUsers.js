import mongoose from "mongoose";
import { User } from "./backend/models/userSchema.js";
import { config } from "dotenv";

// Load environment variables
config({ path: "./backend/.env" });

const addTestUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DB_URL, {
      dbName: "Job_Portal"
    });
    console.log("Connected to MongoDB");

    // Check if users already exist
    const existingJobSeeker = await User.findOne({ email: "j@gmail.com" });
    const existingEmployer = await User.findOne({ email: "e@gmail.com" });

    if (!existingJobSeeker) {
      // Create Job Seeker
      const jobSeeker = await User.create({
        name: "Job Seeker",
        email: "j@gmail.com",
        phone: "1234567890",
        password: "12345678",
        role: "Job Seeker",
      });
      console.log("✅ Job Seeker created:", jobSeeker.email);
    } else {
      console.log("⚠️  Job Seeker already exists");
    }

    if (!existingEmployer) {
      // Create Employer
      const employer = await User.create({
        name: "Employer",
        email: "e@gmail.com",
        phone: "0987654321",
        password: "12345678",
        role: "Employer",
      });
      console.log("✅ Employer created:", employer.email);
    } else {
      console.log("⚠️  Employer already exists");
    }

    console.log("\n🎉 Test users setup complete!");
    console.log("📧 Job Seeker: j@gmail.com / 12345678");
    console.log("📧 Employer: e@gmail.com / 12345678");

  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed");
  }
};

addTestUsers();