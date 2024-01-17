import React from "react";
import "../CSS/friendList.css";

const MyFriends = ({ friendsList }) => {
  return (
    <div className="friends-container">
    <h2>My Friends</h2>
    <ul className="friends-list">
      {friendsList.map((friend) => (
        <li key={friend.id} className="friend-item">
          <span className="friend-name">{friend.name}</span> - <span className="dietary-preference">{friend.dietaryPreference}</span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default MyFriends;
