import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./UserCard.css";

const UserCard = ({ user, images, onEdit, onDelete }) => {
  // Pick a random image from the array
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="user-card" onClick={onEdit}> {/* Trigger edit on card click */}
      <div
        className="delete-icon"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering card click
          onDelete();
        }}
      >
        <FaTrashAlt />
      </div>
      <img src={randomImage} alt="User Avatar" className="user-avatar" />
      <h3>{`${user.firstname} ${user.lastname}`}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
