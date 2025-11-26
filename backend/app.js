import express from "express";
import dbConnection  from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
config({ path: "./.env" });

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

// Root route for health check
app.get('/', (req, res) => {
  res.json({ message: 'YourJobs Backend API is running!', timestamp: new Date() });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!', origin: req.headers.origin });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
dbConnection();

app.use(errorMiddleware);
export default app;
