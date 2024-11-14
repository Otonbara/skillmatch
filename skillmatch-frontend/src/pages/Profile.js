// src/pages/Profile.js
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data here (simulated)
    const fetchUserData = () => {
      setUser({
        name: 'John Doe',
        email: 'john@example.com',
        location: 'Lagos, Nigeria',
        bio: 'Passionate about front-end development with React.',
      });
    };
    fetchUserData();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Location:</strong> {user.location}
        </div>
        <div>
          <strong>Bio:</strong> {user.bio}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
