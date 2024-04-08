import './index.css';

const HistoryLeave = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className='table-row'>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.remaining.casualLeave}/{data.total.casualLeave}</p>
            <p>{data.remaining.earnLeave}/{data.total.earnLeave}</p>
            <p>{data.remaining.medicalLeave}/{data.total.medicalLeave}</p>
            <p>{data.remaining.maternityLeave}/{data.total.maternityLeave}</p>
            <p>{data.remaining.specialCasualLeave}/{data.total.specialCasualLeave}</p>
        </div>
    );
};

export default HistoryLeave;
