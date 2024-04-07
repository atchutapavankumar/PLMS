import './index.css'

const WorkloadHistroyCard = (props) => {
    const {data} = props
    console.log(data)

return (
    <div className='table-row'>
        <p>{data.username}</p>
        <p>{data.class}</p>
        <p>{data.date}</p>
        <p>{data.period}</p>
        <p>{data.assign}</p>
        <p>{data.status}</p>

    </div>
)
}


export default WorkloadHistroyCard