import mongoose from "mongoose";
import { User } from "./models/userSchema.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const seedUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Delete existing test users if they exist
    await User.deleteMany({
      email: { $in: ["e@gmail.com", "j@gmail.com"] }
    });

    // Create test users
    const testUsers = [
      {
        name: "Test Employer",
        email: "e@gmail.com",
        phone: "1234567890",
        role: "Employer",
        password: "12345678"
      },
      {
        name: "Test Job Seeker",
        email: "j@gmail.com", 
        phone: "0987654321",
        role: "Job Seeker",
        password: "12345678"
      }
    ];

    for (const userData of testUsers) {
      const user = await User.create(userData);
      console.log(`Created user: ${user.email} (${user.role})`);
    }

    console.log("Test users created successfully!");
    process.exit(0);

  } catch (error) {
    console.error("Error seeding users:", error);
    process.exit(1);
  }
};

seedUsers();