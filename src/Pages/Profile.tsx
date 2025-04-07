import { useState } from "react";

 const ProfilePage = () => {
    const [profile] = useState({
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Software Engineer',
      location: 'New York',
    });
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <div className="bg-white rounded shadow p-4">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          {/* Add edit profile functionality here */}
        </div>
      </div>
    );
  };

  export default ProfilePage