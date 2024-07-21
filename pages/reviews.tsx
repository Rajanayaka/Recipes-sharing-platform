import React from 'react';
import ReviewForm from '../components/ReviewForm';

const ReviewsPage: React.FC = () => {
  const recipeId = '1'; // Replace with the actual recipe ID

  return (
    <div className="container mx-auto p-4">
      <ReviewForm recipeId={recipeId} />
    </div>
  );
};

export default ReviewsPage;

