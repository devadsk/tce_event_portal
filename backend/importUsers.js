import mongoose from "mongoose";
import fs from "fs";
import csv from "csv-parser";
import bcrypt from "bcryptjs";
import User from "./models/User.js"; // Make sure User.js also uses `export default`

// MongoDB connection
await mongoose.connect("mongodb+srv://devasathish_db_user:12345@tceportalapp.vxker1n.mongodb.net/?retryWrites=true&w=majority&appName=tceportalapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const results = [];

fs.createReadStream("users.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", async () => {
    try {
      for (let user of results) {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = new User({
          email: user.email,
          password: hashedPassword,
          role: user.role,
        });

        await newUser.save();
        console.log(`✅ Imported: ${user.email}`);
      }

      console.log("🎉 All users imported successfully!");
      mongoose.connection.close();
    } catch (error) {
      console.error("❌ Error importing users:", error);
      mongoose.connection.close();
    }
  });
