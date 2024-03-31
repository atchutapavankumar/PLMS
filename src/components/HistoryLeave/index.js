import './index.css'

const HistoryLeave = (props) => {
    const {data} = props
return (
    <div className='table-row'>
        <p>{data.startDate}</p>
        <p>{data.endDate}</p>
        <p>{data.leaveType}</p>
        <p class="approved">{data.leaveStatus}</p>
        <p class="">{data.reason}</p>
        <p class="cancel">Cancel</p>




    </div>
)
}


export default HistoryLeave