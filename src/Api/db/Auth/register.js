// /src/pages/api/auth/register.js

import { query } from "@/lib/db"; // Your database connection function
import bcrypt from "bcryptjs"; // For password hashing

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Basic validation (check if email and password are provided)
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    try {
      // Check if the email already exists in the database
      const existingUser = await query("SELECT * FROM users WHERE email = $1", [email]);

      if (existingUser.rows.length > 0) {
        return res.status(400).json({ error: "Email already in use" });
      }

      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      await query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);

      // Respond with success message
      res.status(201).json({ message: "Account created successfully!" });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
