import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

interface RecipeRequestBody {
    title: string;
    ingredients: string[];
    instructions: string;
    prepTime: string;
    cookTime: string;
    imageUrl: string;
    userRatings: number[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await clientPromise;
        const db = client.db('recipe-database');

        switch (req.method) {
            case 'POST':
                const { title, ingredients, instructions, prepTime, cookTime, imageUrl, userRatings }: RecipeRequestBody = req.body;

                if (!title || !ingredients || !instructions || !prepTime || !cookTime || !imageUrl) {
                    return res.status(400).json({ error: 'Missing required fields' });
                }

                const result = await db.collection('recipes').insertOne({
                    title,
                    ingredients,
                    instructions,
                    prepTime,
                    cookTime,
                    imageUrl,
                    userRatings: userRatings || [],
                    createdAt: new Date(),
                });

                const insertedRecipe = await db.collection('recipes').findOne({ _id: result.insertedId });

                res.status(201).json(insertedRecipe);
                break;

            case 'GET':
                const recipes = await db.collection('recipes').find({}).toArray();
                res.status(200).json(recipes);
                break;

            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).json({ error: `Method ${req.method} Not Allowed` });
                break;
        }
    } catch (error) {
        console.error('Error handling API request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
