import React from 'react';
import './index.css';

const Temp = ({ name, userId, department, gmail, designation }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-user-id">User ID: {userId}</p>
      </div>
      <div className="profile-details">
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Gmail:</strong> {gmail}</p>
        <p><strong>Designation:</strong> {designation}</p>
      </div>
    </div>
  );
};

export default Temp;
