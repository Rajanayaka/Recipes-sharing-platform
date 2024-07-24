import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import TrendingRecipes from '../components/TrendingRecipes';

type Recipe = {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookTime: string;
    imageUrl: string;
    userRatings: number[];
};

const HomePage: React.FC = () => {
    const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const sampleRecipes: Recipe[] = [
            {
                id: '1',
                title: 'Spaghetti Carbonara',
                ingredients: 'Spaghetti, Eggs, Cheese, Bacon',
                instructions: 'Boil pasta, cook bacon, mix with eggs and cheese',
                prepTime: '15 mins',
                cookTime: '20 mins',
                imageUrl: '/images/spaghetti-carbonara.jpg',
                userRatings: [4, 5, 5],
            },
            {
                id: '2',
                title: 'Chicken Curry',
                ingredients: 'Chicken, Curry Powder, Coconut Milk',
                instructions: 'Cook chicken, add curry powder, stir in coconut milk',
                prepTime: '20 mins',
                cookTime: '40 mins',
                imageUrl: '/images/chicken-curry.jpg',
                userRatings: [5, 4, 4],
            },
            {
                id: '3',
                title: 'Beef Stroganoff',
                ingredients: 'Beef, Mushrooms, Sour Cream',
                instructions: 'Cook beef, add mushrooms and sour cream',
                prepTime: '25 mins',
                cookTime: '35 mins',
                imageUrl: '/images/Beef-Stroganoff.jpg',
                userRatings: [5, 4, 3],
            },
            {
                id: '4',
                title: 'Vegetable Stir Fry',
                ingredients: 'Mixed Vegetables, Soy Sauce, Garlic',
                instructions: 'Stir fry vegetables, add soy sauce and garlic',
                prepTime: '10 mins',
                cookTime: '15 mins',
                imageUrl: '/images/Vegetable-Stir-Fry.jpg',
                userRatings: [4, 4, 4],
            },
            {
                id: '5',
                title: 'Chocolate Cake',
                ingredients: 'Flour, Cocoa, Eggs, Sugar',
                instructions: 'Mix ingredients, bake in oven',
                prepTime: '20 mins',
                cookTime: '30 mins',
                imageUrl: '/images/Chocolate-Cake.jpg',
                userRatings: [5, 5, 5],
            },
        ];

        setFeaturedRecipes(sampleRecipes);
    }, []);

    return (
        <div className="container mx-auto p-4 bg-[#F8F8F8]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold"> Welcome to the Chef&apos;s Palette </h1>
                <div>
                    <Link href="/login" className="text-lg text-red-600 mr-2">Login</Link>
                    <span className="mx-2">|</span>
                    <Link href="/signup" className="text-lg text-red-600">SignUp</Link>
                </div>
            </div>
            <SearchBar />
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
                <div className="flex space-x-4">
                    <Link href="/recipes?category=breakfast" className="px-4 py-2 bg-blue-500 text-white rounded">Breakfast</Link>
                    <Link href="/recipes?category=lunch" className="px-4 py-2 bg-green-500 text-white rounded">Lunch</Link>
                    <Link href="/recipes?category=dinner" className="px-4 py-2 bg-red-500 text-white rounded">Dinner</Link>
                    <Link href="/recipes?category=dessert" className="px-4 py-2 bg-yellow-500 text-white rounded">Dessert</Link>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Shared Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {featuredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
            <TrendingRecipes />
        </div>
    );
};

export default HomePage;
