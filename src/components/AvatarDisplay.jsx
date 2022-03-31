import React from "react";
import blankAvatar from "../images/blank.png";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt="avatar" />
      </div>
    </div>
  );
};

export default AvatarDisplay;
