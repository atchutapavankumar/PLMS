import React, { useState, useEffect } from 'react';
import Header from '../Header';
import './index.css'; 

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [gmail, setGmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState(''); // Add for designation

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data
    if (user) {
      setUserName(user.username || '');
      setGmail(user.gmail || '');
      setPhoneNumber(user.phoneNumber || '');
      setUserId(user.userId || '');
      setDepartment('IT' || 'IT');
      setDesignation(user.position || ''); // Fetch designation
    }
  }, []);

  return (
    <div>
      <img 
        src='https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg'
        className="clg-logo" 
        alt="College Logo" 
      />
      <Header /> 
      <div className="profile-container"> 
        <div className="profile-card">
          <img 
            src='https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp' 
            alt="Profile" 
            className="profile-image" 
          />
          <h2>{userName}</h2>
          <div className="profile-info">
            <p><strong>ID:</strong> {userId}</p> 
            <p><strong>Gmail:</strong> {gmail}</p>
            <p><strong>Phone Number:</strong> {phoneNumber}</p>
            <p><strong>Designation:</strong> {designation}</p> {/* Display designation */}
            <p><strong>Department:</strong> {department}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
