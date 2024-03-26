import React, { useState, useEffect } from 'react';
import AdminLeaveRulesItems from '../AdminLeaveRulesItems';
import './index.css';
import Adminheader from '../AdminHeader';


// Add more objects as needed
const sampleData = [
    {
        sl: 1,
        designation: 'Head Of Department',
        availableCasual: 4,
        totalCasual: 10,
        availableEarn: 2,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 0,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5
    },
    {
        sl: 2,
        designation: 'Assistant Professor',
        availableCasual: 3,
        totalCasual: 10,
        availableEarn: 5,
        totalEarn: 10,
        availableOneHour: 1,
        totalOneHour: 2,
        availableMedical: 8,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 2,
        totalSpecialCasual: 5
    },
    {
        sl: 3,
        designation: 'Associate Professor',
        availableCasual: 0,
        totalCasual: 10,
        availableEarn: 6,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 5,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5
    },
    {
        sl: 4,
        designation: 'Professor',
        availableCasual: 1,
        totalCasual: 10,
        availableEarn: 4,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 10,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5
    },
    {
        sl: 5,
        designation: 'Dean Academics',
        availableCasual: 2,
        totalCasual: 10,
        availableEarn: 8,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 0,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 3,
        totalSpecialCasual: 5
    },
    {
        sl: 6,
        designation: 'Principal',
        availableCasual: 0,
        totalCasual: 10,
        availableEarn: 15,
        totalEarn: 15,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 5,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5
    },
    
];

       




const AdminLeaveRules= () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [selectedYear, setSelectedYear] = useState(2024);
    const [showApplyForm, setShowApplyForm] = useState(false);

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

    const handleSearch = () => {
        console.log("Search data for year:", selectedYear);
    };

    const renderForm = () => {
        setShowApplyForm(true);
    };

    const closeForm = () => {
        setShowApplyForm(false);
    };

    return (
        <div className="admin-main-container">
                <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>

            <Adminheader />
            <div className="nav-container">
                <div className='top-container'>
                    <div>
                    <h2 className="nav-bar-title">Leave
                    <span> Rules</span></h2>
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
                    <p>S.No</p>
                    <p>Designation</p>
                    <p>Casual Leave</p>
                    <p>Earn Leave</p>
                    <p>One Hour</p>
                    <p>Medical Leave</p>
                    <p>Maternity Leave</p>
                    <p>Special Casual Leave</p>
                    <p>Update</p>

                </div>
                {sampleData.map(eachData => (
                    <AdminLeaveRulesItems key={eachData.id} data={eachData} />
                ))}
            </div>
        </div>
    );
};

export default AdminLeaveRules;
