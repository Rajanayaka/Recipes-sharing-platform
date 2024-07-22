// pages/api/recipes.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';


// Define TypeScript interface for request body
interface RecipeRequestBody {
  title: string;
  ingredients: string[];
  instructions: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
  const db = client.db('recipe-database');

    switch (req.method) {
      case 'POST':
        // Ensure request body is of the correct type
        const { title, ingredients, instructions }: RecipeRequestBody = req.body;

        if (!title || !ingredients || !instructions) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        // Insert the new recipe into the database
        const result = await db.collection('recipes').insertOne({
          title,
          ingredients,
          instructions,
          createdAt: new Date(),
        });

        // Fetch the inserted recipe
        const insertedRecipe = await db.collection('recipes').findOne({ _id: result.insertedId });

        // Return the inserted recipe
        res.status(201).json(insertedRecipe);
        break;

      case 'GET':
        // Fetch all recipes from the database
        const recipes = await db.collection('recipes').find({}).toArray();

        // Return the list of recipes
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
