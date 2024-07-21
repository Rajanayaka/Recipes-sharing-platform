import React, { useState } from 'react';

const AddRecipeForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const recipe = { title, ingredients, instructions, prepTime, cookTime, imageUrl };

    // Call your API to save the recipe
    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });

    if (response.ok) {
      alert('Recipe added successfully!');
    } else {
      alert('Failed to add recipe');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Prep Time</label>
        <input
          type="text"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Cook Time</label>
        <input
          type="text"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;


