import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Simulate user registration
    if (email && password && name) {
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      res.status(400).json({ message: 'Invalid data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
