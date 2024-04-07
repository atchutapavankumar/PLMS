import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const AdminLeaveRulesItems = (props) => {
    const { data, onUpdateLeave } = props;
    const [leaveCounts, setLeaveCounts] = useState({});

    const handleLeaveCountChange = (e, leaveType) => {
        setLeaveCounts({ ...leaveCounts, [leaveType]: e.target.value });
    };

    const handleLeaveUpdate = () => {
        onUpdateLeave(data._id, leaveCounts);
    };

    return (
        <div className='table-row'>
            <p>{data.sl}</p>
            <p>{data.designation}</p>
            <p>{data.totalCasual}</p>
            <p>{data.totalEarn}</p>
            <p>{data.totalMedical}</p>
            <p>{data.totalMeternity}</p>
            <p>{data.totalSpecialCasual}</p>
            <Popup trigger={<button type="button" className="edit-btn">Edit</button>} position="right center">
                <div className='popup-container'>
                    <h1 className="popup-title">Edit Leave Rules</h1>
                    <br/>
                    <div className='popup-label-input'>
                        <label className="popup-label">Casual Leave</label>
                        <input type="text" value={leaveCounts.casualLeave || ''} className="popup-input" onChange={(e) => handleLeaveCountChange(e, 'casualLeave')} />
                    </div>
                    <div className='popup-label-input'>
                        <label className="popup-label">Earn Leave</label>
                        <input type="text" value={leaveCounts.earnLeave || ''} className="popup-input" onChange={(e) => handleLeaveCountChange(e, 'earnLeave')} />
                    </div>
                    <div className='popup-label-input'>
                        <label className="popup-label">One Hour Leave</label>
                        <input type="text" value={leaveCounts.oneHourLeave || ''} className="popup-input" onChange={(e) => handleLeaveCountChange(e, 'oneHourLeave')} />
                    </div>
                    <div className='popup-label-input'>
                        <label className="popup-label">Medical Leave</label>
                        <input type="text" value={leaveCounts.medicalLeave || ''} className="popup-input" onChange={(e) => handleLeaveCountChange(e, 'medicalLeave')} />
                    </div>
                    <div className='popup-label-input'>
                        <label className="popup-label">Maternity Leave</label>
                        <input type="text" value={leaveCounts.maternityLeave || ''} className="popup-input" onChange={(e) => handleLeaveCountChange(e, 'maternityLeave')} />
                    </div>
                    <div className='popup-label-input'>
                        <label className="popup-label">Special Casual Leave</label>
                        <input type="text" value={leaveCounts.specialCasualLeave || ''} className="popup-input" onChange={(e) => handleLeaveCountChange(e, 'specialCasualLeave')} />
                    </div>
                    <button type="button" className="edit-btn" onClick={handleLeaveUpdate}>Update</button>
                </div>
            </Popup>
        </div>
    );
};

export default AdminLeaveRulesItems;
