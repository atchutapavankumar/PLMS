import './index.css'
import React, { useState, useEffect } from 'react';
import ApplyHeader from '../ApplyHeader';
import PrincipalLeaveRequestsCard from '../PrincipalLeaveRequestCard';
import { LinkItem } from '../Header/StyledComponents';

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




const Principal = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [reqData, setReqData] = useState([])
    const removeLocalstorageData = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
    }

    useEffect(() => {
        fetchReqData();
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const fetchReqData = async () => {
        const res = await fetch("http://localhost:3030/get/hodapproved/leaves")
        const data = await res.json();
        setReqData(data)
} 
    const formatDate = (date) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };
  
    const formatTime = (date) => {
      const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return date.toLocaleTimeString('en-US', options);
    };

    const userdata = JSON.parse(localStorage.getItem('user'))
    const {username, userId} = userdata
return(
    <div className="hod-main-container">
        <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>
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
                <div className='user-profile-card'>
                <div className='profile-username'>
                <img src={sampleData[0].profile} alt={sampleData[0].id} className='profile-image'/>
                <div className='name-id'>
                <div className='name'>{username} <br/><span className='id'>{userId}</span>
                <br/>
                <div className='principal-card-nav'>
                <p className='designtion'>Pricipal</p>
                <LinkItem to="/hod-history-search"><p>History</p></LinkItem>

                <LinkItem to="/"><p onClick={removeLocalstorageData}>Logout</p></LinkItem>
                </div>

                
</div>
            </div>
            </div>

                </div>
            </div>
            <div className='count-containers'>
                <div className='count-container-1'>
                <p className='card-description'>Total Requests</p>
                <p className='count-txt'>53</p>
                </div>

                <div className='count-container-2'>
                <p className='card-description'>New Requests</p>
                <p className='count-txt-2'>40</p>
                </div>

                <div className='count-container-3'>
                <p className='card-description'>Rejected</p>
                <p className='count-txt-3'>3</p>
                </div>

                <div className='count-container-4'>
                <p className='card-description'>
                Pending Requests</p>
                <p className='count-txt-4'>15</p>
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
                {reqData.map(eachData => (
                    <PrincipalLeaveRequestsCard key={eachData.id} data={eachData}/>
                ))}
            </div>
    </div>)

}
export default Principal