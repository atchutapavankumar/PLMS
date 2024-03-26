import './index.css'

const ExtraClassRequestCard = (props) => {
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
            </div>


            </div>
            <div className='card-mid'>
            <div className='card-des-container'>
                <p className='description-2'> IT</p>
                <p className='id-3'>{data.start}</p>
            </div>
            <div className='card-des-container'>
                <p className='description-2'> AI/ML</p>
                <p className='id-3'>11:30PM - 1:00PM</p>
            </div>
            </div>
            <div className='card-mid'>
            <input type="text" className='comment' placeholder='Comment'/>
            </div>

            <div className='btn-container'>
                <button className='accept-btn'>Accept</button>
                <button className='reject-btn'>Reject</button>

            </div>
               
            </div>
        </div>
    )
}

export default ExtraClassRequestCard;