import React, { useState } from 'react';

const ReviewForm: React.FC<{ recipeId: string }> = ({ recipeId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipeId, rating, comment }),
    });

    if (response.ok) {
      alert('Review submitted!');
    } else {
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mt-1 p-2 block w-full border rounded"
          min="1"
          max="5"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 p-2 block w-full border rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
