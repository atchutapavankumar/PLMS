import './index.css'

const HistoryLeave = (props) => {
    const {data} = props
    console.log(data)

    const handleCancel = async () => {
        try {
            const response = await fetch(`http://localhost:3030/leave/${data._id}/cancel`, {
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
        <p class="approved">{data.leaveStatus}</p>
        <p class="">{data.reason}</p>

        
        {data.leaveStatus !== 'Cancelled' ? ( // Render Cancel button only if leave is not already cancelled
                <p className="cancel" onClick={handleCancel}>Cancel</p>
            ):                 <p className="cancel" >Cancelled</p>
}




    </div>
)
}


export default HistoryLeave