import './index.css'
import { useEffect, useState } from 'react';

const PrincipalLeaveRequestsCard = (props) => {
    const {data} = props;

    const approveLeave = async () => {
        const { _id, userId, startDate, endDate, leaveType } = data;
        const response = await fetch(`http://localhost:3030/api/update-leave-status/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
                leaveStatus: 'Approved',
                startDate,
                endDate,
                leaveType
            }),
        });
    
        if (response.ok){
            alert("Leave Approved Successfully")
        }
    }
    

    const denyLeave = async () => {
        const { _id } = data;
        console.log(_id);
        try {
            const response = await fetch(`http://localhost:3030/api/update-leave-status/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    leaveStatus: 'Denied',
                }),
            });

            if (response.ok) {
                alert("Leave Denied Successfully");
            } else {
                throw new Error('Failed to deny leave');
            }
        } catch (error) {
            console.error('Error denying leave:', error.message);
            // Handle error
        }
    };
    return (
        <div className='data-res-card'>
            <div className='card-left-container'>
            <div className='p-a'>         
               <div className='profile-name'>
                <img src="https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp" alt={data.id} className='profile-image'/>
                <div className='name-id'>
                <div className='name'>{data.userName} <br/><span className='id'>{data.userId}</span></div>
            </div>
            {/* <p className="id-2">{data.available} "Available"</p> */}
            </div>


            </div>
            <div className='card-mid'>
            <div className='card-des-container'>
                <p className='description-2'> {data.reason}</p>
                <p className='id-3'>{data.startDate} <b>To</b> {data.endDate}</p>
            </div>
            <div className='card-des-container'>
                <p className='description-2'> {data.leaveType}</p>
                {/* <p className='id-3'>{data.totalDays} Days</p> */}
            </div>
            </div>
            <div className='card-mid'>
            <input type="text" className='comment' placeholder='Comment'/>
            </div>

            <div className='btn-container'>
                <button className='accept-btn' onClick={approveLeave}>Approve</button>
                <button className='reject-btn' onClick={denyLeave}>Deny</button>

            </div>
               
            </div>
        </div>
    )
}

export default PrincipalLeaveRequestsCard;