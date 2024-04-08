import React, { useState, useEffect } from 'react';
import AdminHistoryItem from '../AdminHistoryItem';
import './index.css';
import AdminHeader from '../AdminHeader'; // Assuming this is the correct import

const sampleData = [
    // Your sample data objects
];

const AdminPage = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [selectedYear, setSelectedYear] = useState(2024);
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [leaveInfo, setLeaveInfo] = useState(null);

    useEffect(() => {
        const fetchLeaveInfo = async () => {
            try {
                const response = await fetch('http://localhost:3030/api/users/leave-info');
                const data = await response.json();
                setLeaveInfo(data);
            } catch (error) {
                console.error('Error fetching leave information:', error);
            }
        };

        fetchLeaveInfo();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (date) => {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleTimeString('en-US', options);
    };

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    return (
        <div>
        <div className="admin-page">
            <AdminHeader dateTime={dateTime} />
            <div className="admin-content">
                <div className="admin-history">
                    <h2 className="admin-history-title">History</h2>
                   
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

export default AdminPage;
