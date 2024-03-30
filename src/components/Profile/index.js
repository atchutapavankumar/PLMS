import React, { useState, useEffect } from 'react';
import Header from '../Header';

const Profile = () => {
    const [userName, setUserName] = useState('');
    const [gmail, setGmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userId, setUserId] = useState('');
    const [department, setDepartment] = useState('');
    const [reason, setReason] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserName(user.userName || '');
            setGmail(user.gmail || '');
            setPhoneNumber(user.phoneNumber || '');
            setUserId(user.userId || '');
            setDepartment(user.department || '');
            setReason(user.reason || '');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "userName":
                setUserName(value);
                break;
            case "gmail":
                setGmail(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                break;
            case "userId":
                setUserId(value);
                break;
            case "department":
                setDepartment(value);
                break;
            case "reason":
                setReason(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo" />
            <Header />
            <div className="nav-container">
                <h2 className="nav-bar-title sub-t">Profile <span></span></h2>
                <div className='data-container'>
                    <div className="create-task-popup-container">
                        <h4 className="Form-Title">Update Profile</h4>
                        <div className="create-task-form-container">
                            <form className="create-task-form" onSubmit={handleSubmit}>

                                <div className="create-task-form-input">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="userName"
                                        value={userName}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    />
                                </div>
                                <br />
                                <div className="create-task-form-input">
                                    <label htmlFor="gmail">Gmail</label>
                                    <input
                                        type="text"
                                        id="gmail"
                                        name="gmail"
                                        value={gmail}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    />
                                </div>
                                <div className="create-task-form-input">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    />
                                </div>
                                <div className="create-task-form-input">
                                    <label htmlFor="userId">Id</label>
                                    <input
                                        type="text"
                                        id="userId"
                                        name="userId"
                                        value={userId}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    />
                                </div>
                                <div className="create-task-form-input">
                                    <label htmlFor="department">Department</label>
                                    <input
                                        type="text"
                                        id="department"
                                        name="department"
                                        value={department}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    />
                                </div>
                                <div className="create-task-form-input">
                                    <label htmlFor="reason">Years of Experience</label>
                                    <input
                                        type="text"
                                        id="reason"
                                        name="reason"
                                        value={reason}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    />
                                </div>
                                <div className="btn-container-pop">
                                    <button type="submit" className="create-btn">
                                        Update Profile
                                    </button>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
