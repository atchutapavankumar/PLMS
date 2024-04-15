import React, { useState, useEffect } from 'react';
import ApplyHeader from '../ApplyHeader';
import Hodheader from '../HODHeader';
import LeaveRequestsCard from '../LeaveRequestsCard';
import ExtraClassRequestCard from '../ExtraClassRequestCard';
import Header from '../Header';

const FacultyRequests = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [extraClassRequests, setExtraClassRequests] = useState([]);


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const { userId } = userData;
        const fetchData = async () => {
            try {
                const response = await fetch(`https://leave-ms-server.onrender.com/api/workload/search`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId }) // Assuming userId needs to be sent in the request body
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setExtraClassRequests(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []); 
    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (date) => {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleTimeString('en-US', options);
    };
    const count = extraClassRequests.length

    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>
            <Header/>
            <div className="nav-container">
                <div className='top-container'>
                    <div >
                        <h2 className="nav-bar-title">Leave
                        <span> Management</span></h2>
                        <div className='blue-line-container'>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <li className='blue-dot'></li>
                            <div className='blue-line'></div>
                        </div>
                        <p className='description'> {formatDate(dateTime)} &  {formatTime(dateTime)}</p>   
                    </div>
                </div>
                <div className='count-containers'>
                    <div className='count-container-1'>
                        <p className='card-description'>New Requests</p>
                        <p className='count-txt'>{count}</p>
                    </div>
                </div>
            </div>
            <h2 className="nav-bar-title-2 sub-t">Extra
                    <span> Classes Requests</span></h2>
            <div className='blue-line-container-2'>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <div className='blue-line'></div>
            </div>
            <div className='data-container'>
                {extraClassRequests.map(eachRequest => {
                     const {_id} = eachRequest 
                     return (
                
                    <ExtraClassRequestCard key={_id} data={eachRequest}/>)
                }
                )}
            </div>
        </div>
    );
}

export default FacultyRequests;
