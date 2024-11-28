// File: /src/pages/api/db/users.js
import { query } from "@/lib/db"; // Import database utility

export default async function handler(req, res) {
  if (req.method === "GET") { // Handle GET requests
    try {
      const result = await query("SELECT * FROM users", []); // Fetch users
      res.status(200).json(result.rows); // Respond with user data
    } catch (err) {
      console.error(err); // Log errors
      res.status(500).json({ error: "Database query failed" }); // Respond with error
    }
  } else { // For unsupported methods
    res.setHeader("Allow", ["GET"]); // Inform supported methods
    res.status(405).end(`Method ${req.method} Not Allowed`); // Method not allowed
  }
}
