import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Recipe = {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookTime: string;
    imageUrl: string;
};

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
    return (
        <div className="border rounded overflow-hidden shadow-lg">
            <Image src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover" width={500} height={300} />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                <p className="text-gray-700 text-base">Prep Time: {recipe.prepTime}</p>
                <p className="text-gray-700 text-base">Cook Time: {recipe.cookTime}</p>
                <Link href={`/recipe/${recipe.id}`}>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Recipe</button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;
