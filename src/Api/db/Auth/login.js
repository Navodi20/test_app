import { query } from "@/lib/db"; // Adjust path based on your setup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Query database for user
      const result = await query("SELECT * FROM users WHERE email = $1", [email]);

      if (result.rows.length === 0) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const user = result.rows[0];

      // Validate password (add hashing in production!)
      if (user.password !== password) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Return success response
      res.status(200).json({ message: "Login successful" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
