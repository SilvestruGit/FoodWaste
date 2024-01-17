import React from 'react';
import '../CSS/friendList.css';

const MyFriends = () => {
  const friendsList = [
    { id: 1, name: 'Alice', dietaryPreference: 'vegan' },
    { id: 2, name: 'Bob', dietaryPreference: 'vegetarian' },
    { id: 3, name: 'Charlie', dietaryPreference: 'carnivore' },
    // Add more friends as needed
  ];

  return (
    <div>
      <h2>My Friends</h2>
      <ul>
        {friendsList.map((friend) => (
          <li key={friend.id}>
            {friend.name} - {friend.dietaryPreference}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFriends;
