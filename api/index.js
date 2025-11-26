import app from '../backend/app.js';
import { config } from "dotenv";

// Load environment variables for serverless
config({ path: "./backend/.env" });

// Initialize database connection and cloudinary when module loads
import '../backend/database/dbConnection.js';

// Configure Cloudinary
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default app;