import { NextApiRequest, NextApiResponse } from 'next';

let reviews = [
  // Add some initial sample reviews here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(reviews);
  } else if (req.method === 'POST') {
    const newReview = req.body;
    reviews.push(newReview);
    res.status(201).json(newReview);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
