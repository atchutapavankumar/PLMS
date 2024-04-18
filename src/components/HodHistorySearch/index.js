import React, { useState, useEffect } from 'react';
import AdminHistoryItem from '../AdminHistoryItem';
import './index.css';
import Adminheader from '../AdminHeader';
import Hodheader from '../HODHeader';

const HodHistorySearch = () => {
    const [leaveInfo, setLeaveInfo] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const department = userData.department
        const fetchLeaveInfo = async () => {
            try {
                const response = await fetch(`http://localhost:3030/api/users/leave-info/${department}`);
                const data = await response.json();
                setLeaveInfo(data);
            } catch (error) {
                console.error('Error fetching leave information:', error);
            }
        };

        fetchLeaveInfo();
    }, []);

    return (
        <div className="admin-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>
            <Hodheader />
            <div className="nav-container">
                <div className='top-container'>
                    <div>
                    <h2 className="nav-bar-title">Leave
                    <span> History</span></h2>
                        <div className='blue-line-container'>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <div className='blue-line'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='data-container'>
                <div className='table-header'>
                    <p>ID</p>
                    <p>Name</p>
                    <p>Casual Leave</p>
                    <p>Earn Leave</p>
                    <p>Medical Leave</p>
                    <p>Maternity Leave</p>
                    <p>Special Casual Leave</p>
                </div>
                {/* Render AdminHistoryItem component with leave information */}
                {leaveInfo && leaveInfo.map(eachData => (
                    <AdminHistoryItem key={eachData.id} data={eachData} />
                ))}
            </div>
        </div>
    );
};

export default HodHistorySearch;
