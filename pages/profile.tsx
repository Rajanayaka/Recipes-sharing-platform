import React, { useEffect, useState } from 'react';

type UserProfile = {
  name: string;
  email: string;
  // Add other fields as needed
};

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Fetch user profile from API
    const fetchUserProfile = async () => {
      const response = await fetch('/api/profile');
      if (response.ok) {
        const profile = await response.json();
        setUserProfile(profile);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {userProfile ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <p className="text-lg mb-2">Name: {userProfile.name}</p>
          <p className="text-lg mb-2">Email: {userProfile.email}</p>
          {/* Add other profile fields as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
