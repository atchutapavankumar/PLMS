import React, { useState, useEffect } from 'react';
import ApplyHeader from '../ApplyHeader';
import Hodheader from '../HODHeader';
import WorkloadHistroyCard from '../WorkLoadHistoryCard';
import ExtraClassRequestCard from '../ExtraClassRequestCard';
import Header from '../Header';


const WorkloadHistroy = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [workloadData, setWorkLoadData] = useState([]);
    const userData = JSON.parse(localStorage.getItem('user'));


    const department = userData.department


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const { userId } = userData;
        const fetchData = async () => {
            try {
                const response = await fetch(`https://leave-ms-server.onrender.com/api/workload/requests`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setWorkLoadData(data);
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

    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>
            <Hodheader/>
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
               
            </div>

           <>  <h2 className="nav-bar-title-2 sub-t">Work Load
                    <span> History</span></h2>
            <div className='blue-line-container-2'>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <li className='blue-dot'></li>
                <div className='blue-line'></div>
            </div>
            <div className='data-container'>
                <div className='table-header'>
                    <p>Name</p>
                    <p>Class</p>
                    <p>Date</p>
                    <p>Period</p>
                    <p>Assigned To</p>
                    <p>Status</p>
                </div>
                {workloadData.map(eachData => (
                    <WorkloadHistroyCard key={eachData.id} data={eachData}/>
                ))}
            </div>
            </>
            
        
        </div>
    );
}

export default WorkloadHistroy;
