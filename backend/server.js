import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use Express JSON parser

// MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://devasathish_db_user:12345@tceportalapp.vxker1n.mongodb.net/?retryWrites=true&w=majority&appName=tceportalapp",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api", authRoutes);

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
