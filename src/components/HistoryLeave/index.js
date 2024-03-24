import './index.css'

const HistoryLeave = (props) => {
    const {data} = props
    console.log(data)
return (
    <div className='table-row'>
        <p>{data.sl}</p>
        <p>{data.start}</p>
        <p>{data.end}</p>
        <p>{data.type}</p>
        <p class="approved">Approved</p>
        <p>HOD</p>
        <p>{data.totalDays}</p>
        <p class="cancel">Cancel</p>



    </div>
)
}


export default HistoryLeave