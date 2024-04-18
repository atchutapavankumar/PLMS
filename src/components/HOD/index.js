import './index.css'
import React, { useState, useEffect } from 'react';
import ApplyHeader from '../ApplyHeader';
import Hodheader from '../HODHeader';
import LeaveRequestsCard from '../LeaveRequestsCard';

const sampleData = [
        {
            id: 'BEC071001',
            name: 'N.SIVARAM PRASAD',
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
            id: 'BEC071002',
            name: 'John Doe',
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
            id: 'BEC071003',
            name: 'Alice Johnson',
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
            id: 'BEC071004',
            name: 'Bob Smith',
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
            id: 'BEC071005',
            name: 'Eva Martinez',
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
            id: 'BEC071006',
            name: 'Michael Brown',
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
            id: 'BEC071007',
            name: 'Sophia Lee',
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
            id: 'BEC071008',
            name: 'David Wilson',
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
            id: 'BEC071009',
            name: 'Olivia Taylor',
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
            id: 'BEC071010',
            name: 'Daniel Garcia',
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




const HOD = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [requestsData, setRequestsData] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))
    const department = user.department

    useEffect(() => {
        fetchRequestsData(department)

      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const fetchRequestsData = async (department) => {
        try {
            const res = await fetch(`https://leave-ms-server.onrender.com/get/pending/leaves/${department}`);
            const data = await res.json();
            setRequestsData(data);
        } catch (error) {
            console.error("Error fetching pending leaves:", error);
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

    let count = requestsData.length

return(
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
            <div className='count-containers'>
                <div className='count-container-1'>
                <p className='card-description'>New Requests</p>
                <p className='count-txt'>{count}</p>
                </div>

                
            </div>

            </div>
            <h2 className="nav-bar-title-2 sub-t">Leave
                    <span> Approval</span></h2>
                    <div className='blue-line-container-2'>
                        <li className='blue-dot'></li>
                        <li className='blue-dot'></li>
                        <li className='blue-dot'></li>
                        <div className='blue-line'></div>
                    </div>
                
            <div className='data-container'>
                {requestsData.map(eachData => (
                    <LeaveRequestsCard key={eachData.id} data={eachData}/>
                ))}
            </div>
    </div>)

}
export default HOD
