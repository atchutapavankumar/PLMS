import React, { useState, useEffect } from 'react';
import AdminHistoryItem from '../AdminHistoryItem';
import './index.css';
import Adminheader from '../AdminHeader';
const sampleData = [
    {
        sl: 1,
        id: 'BEC071001',
        name: 'N.SIVARAM PRASAD',
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
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Fever',
        type: 'Medical Leave',
        start: '14 NOV',
        end: '17 NOV',
        totalDays: 3,
        available: 10,
        isApproved: false,
        isRejected: false
    },
    {
        sl: 2,
        id: 'BEC071002',
        name: 'John Doe',
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
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Injury',
        type: 'Sick Leave',
        start: '20 NOV',
        end: '22 NOV',
        totalDays: 3,
        available: 7,
        isApproved: false,
        isRejected: true
    },
    {
        sl: 3,
        id: 'BEC071003',
        name: 'Alice Johnson',
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
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Family Emergency',
        type: 'Emergency Leave',
        start: '25 NOV',
        end: '27 NOV',
        totalDays: 3,
        available: 5,
        isApproved: true,
        isRejected: false
    },
    {
        sl: 4,
        id: 'BEC071004',
        name: 'Bob Smith',
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
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Flu',
        type: 'Medical Leave',
        start: '01 DEC',
        end: '03 DEC',
        totalDays: 3,
        available: 10,
        isApproved: true,
        isRejected: false
    },
    {
        sl: 5,
        id: 'BEC071005',
        name: 'Eva Martinez',
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
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Dental Appointment',
        type: 'Medical Appointment',
        start: '10 DEC',
        end: '10 DEC',
        totalDays: 1,
        available: 8,
        isApproved: false,
        isRejected: false
    },
    {
        sl: 6,
        id: 'BEC071006',
        name: 'Michael Brown',
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
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Stress',
        type: 'Mental Health Leave',
        start: '15 DEC',
        end: '20 DEC',
        totalDays: 6,
        available: 15,
        isApproved: true,
        isRejected: false
    },
    {
        sl: 7,
        id: 'BEC071007',
        name: 'Sophia Lee',
        availableCasual: 2,
        totalCasual: 10,
        availableEarn: 5,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 0,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 1,
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Allergic Reaction',
        type: 'Sick Leave',
        start: '22 DEC',
        end: '24 DEC',
        totalDays: 3,
        available: 10,
        isApproved: false,
        isRejected: false
    },
    {
        sl: 8,
        id: 'BEC071008',
        name: 'David Wilson',
        availableCasual: 0,
        totalCasual: 10,
        availableEarn: 12,
        totalEarn: 12,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 0,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Surgery',
        type: 'Medical Leave',
        start: '02 JAN',
        end: '05 JAN',
        totalDays: 4,
        available: 12,
        isApproved: true,
        isRejected: false
    },
    {
        sl: 9,
        id: 'BEC071009',
        name: 'Olivia Taylor',
        availableCasual: 3,
        totalCasual: 10,
        availableEarn: 9,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 0,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Eye Checkup',
        type: 'Medical Appointment',
        start: '10 JAN',
        end: '10 JAN',
        totalDays: 1,
        available: 9,
        isApproved: true,
        isRejected: false
    },
    {
        sl: 10,
        id: 'BEC071010',
        name: 'Daniel Garcia',
        availableCasual: 1,
        totalCasual: 10,
        availableEarn: 6,
        totalEarn: 10,
        availableOneHour: 0,
        totalOneHour: 2,
        availableMedical: 0,
        totalMedical: 15,
        availableMeternity: 0,
        totalMeternity: 90,
        availableSpecialCasual: 0,
        totalSpecialCasual: 5,
        profile: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp',
        reason: 'Back Pain',
        type: 'Medical Leave',
        start: '15 JAN',
        end: '17 JAN',
        totalDays: 3,
        available: 6,
        isApproved: false,
        isRejected: true
    }
];

// Add more objects as needed

       




const AdminPage = () => {
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
                    <span> Management</span></h2>
                        <div className='blue-line-container'>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <div className='blue-line'></div>
                        </div>
                        <div className="select-form">
                            <select className = "select-item" value={selectedYear} onChange={handleYearChange}>
                                {Array.from({ length: 11 }, (_, i) => 2014 + i).map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            <button onClick={handleSearch} className='search-btn'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="nav-bar-title- sub-t">Leave History</h2>
            <div className='blue-line-container-2'>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <div className='blue-line'></div>
            </div>
            <div className='data-container'>
                <div className='table-header'>
                    <p>S.No</p>
                    <p>ID</p>
                    <p>Name</p>
                    <p>Casual Leave</p>
                    <p>Earn Leave</p>
                    <p>One Hour</p>
                    <p>Medical Leave</p>
                    <p>Maternity Leave</p>
                    <p>Special Casual Leave</p>
                </div>
                {sampleData.map(eachData => (
                    <AdminHistoryItem key={eachData.id} data={eachData} />
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
