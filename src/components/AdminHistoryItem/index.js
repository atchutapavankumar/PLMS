import './index.css'

const HistoryLeave = (props) => {
    const {data} = props
return (
    <div className='table-row'>
        <p>{data.sl}</p>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.availableCasual}/{data.totalCasual}</p>
        <p >{data.availableEarn}/{data.totalEarn}</p>
        <p>{data.availableOneHour}/{data.totalOneHour}</p>
        <p >{data.availableMedical}/{data.totalMedical}</p>
        <p >{data.availableMeternity}/{data.totalMeternity}</p>
        <p >{data.availableSpecialCasual}/{data.totalSpecialCasual}</p>

        



    </div>
)
}


export default HistoryLeave