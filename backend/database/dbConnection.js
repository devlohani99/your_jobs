import mongoose from "mongoose";

// Database connection with better error handling
const dbConnection = () => {
  const DB_URL = process.env.DB_URL;
  
  if (!DB_URL) {
    console.error('DB_URL environment variable is not set');
    return;
  }

  mongoose.connect(DB_URL, {
    dbName: "Job_Portal"
  }).then(() => {
    console.log("MongoDB Connected Successfully!");
  }).catch((error) => {
    console.log(`Failed to connect to MongoDB: ${error.message}`);
  });
};

export default dbConnection;