import './index.css'
import Popup from 'reactjs-popup';


const AdminLeaveRulesItems = (props) => {
    const {data} = props
    console.log(data)
return (
    <div className='table-row'>
        <p>{data.sl}</p>
        <p>{data.designation}</p>
        <p>{data.totalCasual}</p>
        <p>{data.totalEarn}</p>
        <p>{data.totalOneHour}</p>
        <p>{data.totalMedical}</p>
        <p>{data.totalMeternity}</p>

        <p>{data.totalSpecialCasual}</p>
        <Popup  trigger={<button type="button" class="edit-btn">Edit</button>} position="right center">
    <div className='popup-container'>
        <h1 className="popup-title">Edit Leave Rules</h1>
        <br/>
        <div className='popup-label-input'>
        <label className="popup-label">
            Casual Leave
        </label>
        <input type="text" value="50" className="popup-input"/>
        </div>
        <div className='popup-label-input'>
        <label className="popup-label">
            Earn Leave
        </label>
        <input type="text" value="40" className="popup-input"/>
        </div>
        <div className='popup-label-input'>
        <label className="popup-label">
            One Hour Leave
        </label>
        <input type="text" value="40" className="popup-input"/>
        </div>
        <div className='popup-label-input'>
        <label className="popup-label">
            Medical Leave
        </label>
        <input type="text" value="10" className="popup-input"/>
        </div>
        <div className='popup-label-input'>
        <label className="popup-label">
            Meternity Leave
        </label>
        <input type="text" value="20" className="popup-input"/>
        </div>
        <div className='popup-label-input'>
        <label className="popup-label">
            Special Casual Leave
        </label>
        <input type="text" value="50" className="popup-input"/>
        </div>
        <button type="button" class="edit-btn">Update</button>

    </div>
        </Popup>




    </div>
)
}


export default AdminLeaveRulesItems