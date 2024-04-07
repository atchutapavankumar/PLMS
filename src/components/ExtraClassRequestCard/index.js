import './index.css'



const ExtraClassRequestCard = (props) => {
    const {data} = props;
    const {username, userId, day, period, sub, date} = data;
    console.log(data)

    const acceptRequest = async () => {
        const {_id}  = data
        const response = await fetch(`http://localhost:3030/api/update-request-status/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: _id,
                status: 'Accepted',
            }),
        });
  
        if (response.ok){
            alert("Class Accepted Successfully")
        }
       
    }

    const rejectRequest = async () => {
        const { _id } = data;
        console.log(_id);
        try {
            const response = await fetch(`http://localhost:3030/api/update-request-status/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'Rejected',
                }),
            });

            if (response.ok) {
                alert("Extra Class Rejected Successfully");
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
                <div className='name'>{username} <br/><span className='id'>{userId}</span></div>
            </div>
            </div>


            </div>
            <div className='card-mid'>
            <div className='card-des-container'>
                <p className='description-2'> {data.class}</p>
                <p className='id-3'>{date}-{day}</p>
            </div>
            <div className='card-des-container'>
                <p className='description-2'>Period: {period}</p>
                <p className='id-3'>Sub: {sub}</p>
            </div>
            </div>
            <div className='card-mid'>
            {/* <input type="text" className='comment' placeholder='Comment'/> */}
            </div>

            <div className='btn-container'>
                <button className='accept-btn' onClick={acceptRequest}>Accept</button>
                <button className='reject-btn' onClick={rejectRequest}>Reject</button>

            </div>
               
            </div>
        </div>
    )
}

export default ExtraClassRequestCard;