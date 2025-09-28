import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// Login API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Normalize email
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) return res.json({ success: false, error: "Invalid email or password" });

    // Compare hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ success: false, error: "Invalid email or password" });

    // Successful login
    res.json({ success: true, token: "fake-jwt-token", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
