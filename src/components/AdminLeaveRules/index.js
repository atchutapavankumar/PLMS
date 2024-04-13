import React, { useState, useEffect } from 'react';
import AdminLeaveRulesItems from '../AdminLeaveRulesItems';
import './index.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminHeader from '../AdminHeader';

const AdminLeaveRules = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [selectedYear, setSelectedYear] = useState(2024);
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [designations, setDesignations] = useState([]);
    const [newDesignation, setNewDesignation] = useState({
        designation: '',
        leavePolicy: {
            casualLeave: 0,
            earnLeave: 0,
            medicalLeave: 0,
            maternityLeave: 0,
            specialCasualLeave: 0
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchDesignations();
    }, []);

    const fetchDesignations = async () => {
        try {
            const response = await fetch('http://localhost:3030/api/designations');
            const data = await response.json();
            setDesignations(data);
        } catch (error) {
            console.error('Error fetching designations:', error);
        }
    };

    const handleAddDesignation = async () => {
        try {
            const response = await fetch('http://localhost:3030/api/designations/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDesignation)
            });
            if (response.ok) {
                fetchDesignations();
                showToast("Designation added successfully");
            } else {
                console.error('Failed to add designation:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding designation:', error);
        }
    };

    const handleLeaveUpdate = async (designationId, leaveCounts) => {
        try {
            const response = await fetch(`http://localhost:3030/api/designations/${designationId}/leave`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(leaveCounts)
            });
            if (response.ok) {
                fetchDesignations();
                alert("Leave Count Updated!!")
                showToast("Leave counts updated successfully");
            } else {
                console.error('Failed to update leave counts:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating leave counts:', error);
        }
    };

    const showToast = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handleInputChange = (e) => {
        setNewDesignation({ ...newDesignation, [e.target.name]: e.target.value });
    };

    return (
        <div className="admin-main-container">
                    <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo" />

            <AdminHeader />
            <div className="nav-container">
                <div className='top-container'>
                    <div>
                        <h2 className="nav-bar-title">Leave Rules</h2>
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
                    <p>Designation</p>
                    <p>Casual Leave</p>
                    <p>Earn Leave</p>
                    <p>Medical Leave</p>
                    <p>Maternity Leave</p>
                    <p>Special Casual Leave</p>
                    <p>Update</p>
                </div>
                <ToastContainer />

                {designations.map(eachData => (
                    <AdminLeaveRulesItems key={eachData._id} data={eachData} onUpdateLeave={handleLeaveUpdate} />
                ))}
              
            </div>
        </div>
    );
};

export default AdminLeaveRules;
