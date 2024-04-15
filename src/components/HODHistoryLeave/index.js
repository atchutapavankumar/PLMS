import { useState, useEffect } from 'react';
import './index.css';

const HODHistoryLeave = (props) => {
    const { data } = props;
    const [status, setStatus] = useState(data.leaveStatus);

    useEffect(() => {
        if (status === "HOD-Approved") {
            setStatus("Pending");
        } else {
            setStatus(data.leaveStatus);
        }
    }, [data.leaveStatus]); // Only re-run the effect if data.leaveStatus changes

    const handleCancel = async () => {
        try {
            const response = await fetch(`https://leave-ms-server.onrender.com/leave/${data._id}/cancel`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            console.log('Leave cancelled successfully');
            alert('Leave cancelled successfully');
        } catch (error) {
            console.error('Error cancelling leave:', error.message);
        }
    };

    return (
        <div className='table-row'>
            <p>{data.startDate}</p>
            <p>{data.endDate}</p>
            <p>{data.leaveType}</p>
            <p className="approved">{status}</p>
            <p>{data.reason}</p>
            {data.leaveStatus !== 'Cancelled' ? (
                <p className="cancel" onClick={handleCancel}>Cancel</p>
            ) : (
                <p className="cancel">Cancelled</p>
            )}
        </div>
    );
};

export default HODHistoryLeave;
