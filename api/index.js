import express from "express";
import dbConnection  from "../backend/database/dbConnection.js";
import jobRouter from "../backend/routes/jobRoutes.js";
import userRouter from "../backend/routes/userRoutes.js";
import applicationRouter from "../backend/routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "../backend/middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();

// Load environment variables
config({ path: "../backend/.env" });

// Connect to database
dbConnection();

app.use(
  cors({
    origin: function(origin, callback) {
      console.log('CORS Origin:', origin);
      const allowedOrigins = [
        "https://your-jobsfrontend.vercel.app",
        "https://yourjobs-frontend.vercel.app", 
        "https://your-jobs-frontend.vercel.app",
        "https://yourjobs-your-jobsfrontend.vercel.app"
      ];
      
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      // Check if origin matches allowed origins or vercel.app pattern
      if (allowedOrigins.includes(origin) || /.*\.vercel\.app$/.test(origin)) {
        return callback(null, true);
      } else {
        console.log('CORS blocked origin:', origin);
        return callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// Root route for health check
app.get("/", (req, res) => {
  res.json({ 
    message: "YourJobs Backend API is running!", 
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "API is working correctly!" });
});

app.use(errorMiddleware);

export default app;