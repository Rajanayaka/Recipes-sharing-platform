import React from 'react';
import Link from 'next/link';

type Recipe = {
  id: string;
  title: string;
  imageUrl: string;
};

const trendingRecipes: Recipe[] = [
  {
    id: '6',
    title: 'Avocado Toast',
    imageUrl: '/images/avocado-toast.jpg',
  },
  {
    id: '7',
    title: 'Mango Smoothie',
    imageUrl: '/images/mango-smoothie.jpg',
  },
  {
    id: '8',
    title: 'Greek Salad',
    imageUrl: '/images/greek-salad.jpg',
  },
  {
    id: '9',
    title: 'Pumpkin Soup',
    imageUrl: '/images/pumpkin-soup.jpg',
  },
  // Add more trending recipes as needed
];

const TrendingRecipes: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Trending Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trendingRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-lg">
            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <Link href={`/recipes/${recipe.id}`} className="text-blue-500 mt-2 block">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingRecipes;
