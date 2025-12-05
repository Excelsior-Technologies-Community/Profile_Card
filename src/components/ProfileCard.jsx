import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, title, email, phone, socialLinks }) => {
  // Your SVG as data URI
  const userIcon = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23646cff%22%3E%0A%20%20%3Cpath%20d%3D%22M12%2012c2.67%200%208%201.34%208%204v2H4v-2c0-2.66%205.33-4%208-4zm0-2c-1.66%200-3-1.34-3-3s1.34-3%203-3%0A%20%203%201.34%203%203-1.34%203-3%203z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A";

  return (
    <div className="profile-card">
      <img src={userIcon} alt="User" className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      <div className="profile-contact">
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
      </div>
      <div className="profile-social">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
