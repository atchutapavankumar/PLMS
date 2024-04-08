import React, { useState, useEffect } from 'react';
import Hodheader from '../HODHeader';

const HODMain = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [leaveCounts, setLeaveCounts] = useState({
        casualLeave: 0,
        earnLeave: 0,
        medicalLeave: 0,
        maternityLeave: 0,
        specialCasualLeave: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Fetch leave counts from localStorage
        const hod = JSON.parse(localStorage.getItem('user'));
        if (hod) {
            const { casualLeave, earnLeave, medicalLeave, maternityLeave, specialCasualLeave } = hod;
            setLeaveCounts({
                casualLeave,
                earnLeave,
                medicalLeave,
                maternityLeave,
                specialCasualLeave
            });
        }

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

    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>
            <Hodheader/>
            <div className="nav-container">
                <div className='top-container'>
                    <div >
                        <h2 className="nav-bar-title">Leave<span> Management</span></h2>
                        <div className='blue-line-container'>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <div className='blue-line'></div>
                        </div>
                        <p className='description'>{formatDate(dateTime)} & {formatTime(dateTime)}</p>
                    </div>
                </div>
                <div className='count-containers'>
                    <div className='count-container-1'>
                        <p className='card-description'>Remaining Earn Leaves</p>
                        <p className='count-txt'>{leaveCounts.earnLeave}</p>
                    </div>
                    <div className='count-container-2'>
                        <p className='card-description'>Remaining Medical Leaves</p>
                        <p className='count-txt-2'>{leaveCounts.medicalLeave}</p>
                    </div>
                    <div className='count-container-3'>
                        <p className='card-description'>Remaining Casual Leaves</p>
                        <p className='count-txt-3'>{leaveCounts.casualLeave}</p>
                    </div>
                    <div className='count-container-4'>
                        <p className='card-description'>Remaining Meternity Leaves</p>
                        <p className='count-txt-4'>{leaveCounts.maternityLeave}</p>
                    </div>
                    <div className='count-container-6'>
                        <p className='card-description'>Remaining Special Casual Leaves</p>
                        <p className='count-txt-6'>{leaveCounts.specialCasualLeave}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HODMain;
