import { GetServerSideProps } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import Image from 'next/image';

type Recipe = {
    _id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    prepTime: string;
    cookTime: string;
    imageUrl: string;
    userRatings: number[];  // Assuming you have a field for user ratings
};

type RecipePageProps = {
    recipe: Recipe;
};

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => {
    const averageRating = recipe.userRatings.reduce((a, b) => a + b, 0) / recipe.userRatings.length || 0;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <Image src={recipe.imageUrl} alt={recipe.title} className="w-full h-96 object-cover mb-4" />
            
            <p className="text-gray-700 text-base">Prep Time: {recipe.prepTime}</p>
            <p className="text-gray-700 text-base">Cook Time: {recipe.cookTime}</p>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients</h2>
            <ul className="list-disc pl-5">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
            <p>{recipe.instructions}</p>
            <h2 className="text-2xl font-semibold mt-4 mb-2">User Ratings</h2>
            <p>Average Rating: {averageRating.toFixed(1)}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const client = await clientPromise;
    const db = client.db('recipe-database');
    const recipe = await db.collection('recipes').findOne({ _id: new ObjectId(id as string) });

    if (!recipe) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            recipe: JSON.parse(JSON.stringify(recipe)),
        },
    };
};

export default RecipePage;
