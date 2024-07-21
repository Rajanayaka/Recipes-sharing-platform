import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();

    switch (req.method) {
      case 'POST':
        const { title, ingredients, instructions } = req.body;
        const result = await db.collection('recipes').insertOne({
          title,
          ingredients,
          instructions,
          createdAt: new Date(),
        });
        res.status(201).json(result.ops[0]);
        break;
      case 'GET':
        const recipes = await db.collection('recipes').find({}).toArray();
        res.status(200).json(recipes);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
