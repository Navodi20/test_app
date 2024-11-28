export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Mock user data
    const mockUser = { email: 'test@restaurant.com', password: 'password123' };

    if (email === mockUser.email && password === mockUser.password) {
      return res.status(200).json({ message: 'Login successful!' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
