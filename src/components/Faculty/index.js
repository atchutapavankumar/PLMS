import React, { useState, useEffect } from 'react';
import './index.css';
import HistoryLeave from '../HistoryLeave';
import Header from '../Header';

const Faculty = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [historyData, setHistoryData] = useState([]);  

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array triggers the effect only once on mount

    const fetchData = async () => {
        const user = localStorage.getItem('user');
        const userParse = JSON.parse(user)
        console.log(userParse.userId)
        try {
            const response = await fetch('http://localhost:3030/get/leaves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userParse.userId,
                }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
                console.log('User History successfully fetched');
                setHistoryData(data);
            } else {
                console.error('User History failed fetching:', data.message);
            }
        } catch (error) {
            console.error('Error fetching user history:', error.message);
        }
    };

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (date) => {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleTimeString('en-US', options);
    };

    const renderForm = () => {
        setShowApplyForm(true);
    };
    
    const closeForm = () => {
        setShowApplyForm(false);
    };

    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>
            <Header/>
            <div className="nav-container">
                <div className='top-container'>
                    <div>
                        <h2 className="nav-bar-title">Leave<span> Management</span></h2>
                        <div className='blue-line-container'>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <div className='blue-line'></div>
                        </div>
                        <p className='description'> {formatDate(dateTime)} &  {formatTime(dateTime)}</p>   
                    </div>
                </div>
            </div>
            <h2 className="nav-bar-title- sub-t">Leave<span> History</span></h2>
            <div className='blue-line-container-2'>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <div className='blue-line'></div>
            </div>
            <div className='data-container'>
                <div className='table-header'>
                    <p>Leave Start Date</p>
                    <p>Leave End Date</p>
                    <p>Type</p>
                    <p>Status</p>
                    <p>Reason</p>
                    <p>Cancel</p>
                </div>
                {historyData.map(eachData => (
                    <HistoryLeave key={eachData.id} data={eachData}/>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
