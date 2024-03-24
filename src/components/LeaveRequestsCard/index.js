import './index.css'

const LeaveRequestsCard = (props) => {
    const {data} = props;
    console.log(data)
    return (
        <div className='data-res-card'>
            <div className='card-left-container'>
            <div className='p-a'>         
               <div className='profile-name'>
                <img src={data.profile} alt={data.id} className='profile-image'/>
                <div className='name-id'>
                <div className='name'>{data.name} <br/><span className='id'>{data.id}</span></div>
            </div>
            <p className="id-2">{data.available} "Available"</p>
            </div>


            </div>
            <div className='card-mid'>
            <div className='card-des-container'>
                <p className='description-2'> {data.reason}</p>
                <p className='id-3'>{data.start} - {data.end}</p>
            </div>
            <div className='card-des-container'>
                <p className='description-2'> {data.type}</p>
                <p className='id-3'>{data.totalDays} Days</p>
            </div>
            </div>

            <div className='btn-container'>
                <button className='accept-btn'>Approve</button>
                <button className='reject-btn'>Deny</button>

            </div>
               
            </div>
        </div>
    )
}

export default LeaveRequestsCard;