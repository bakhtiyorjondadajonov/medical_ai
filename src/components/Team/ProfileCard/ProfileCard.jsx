import React from "react";
import "./profile_card.css"; // For styling

const ProfileCard = ({ imageSrc, name, title }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={imageSrc} alt={`${name}'s profile`} />
      </div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
    </div>
  );
};

export default ProfileCard;
