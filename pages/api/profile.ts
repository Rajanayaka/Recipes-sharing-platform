import { NextApiRequest, NextApiResponse } from 'next';

const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  // Add other fields as needed
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(userProfile);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
