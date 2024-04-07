import React, { useState, useEffect } from 'react';
import './index.css';

const WorkLoadView = ({ workLoadData }) => {
    const [sentData, setSentData] = useState({});
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from local storage when component mounts
        const leaveData = JSON.parse(localStorage.getItem('leaveData'));
        if (leaveData) {
            setUserData(leaveData);
        }
    }, []);

    // Function to send data to the API
    const sendDataToAPI = async (rowData, rowIndex) => {
        try {
            // Perform fetch POST request to your API endpoint
            console.log(rowData)
            const response = await fetch('http://localhost:3030/api/workload/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rowData)
            });

            if (response.ok) {
                console.log('Data sent successfully:', rowData);
                alert("Request sent successfully");
                return true;
            } else {
                console.error('Error sending data:', response.statusText);
                alert("Error in sending Request");
                return false;
            }
        } catch (error) {
            console.error('Error sending data:', error.message);
            alert("Error in sending Request");
            return false;
        }
    };

    // Event handler for the "Send" button
    // Event handler for the "Send" button
const handleSendClick = async (rowData, rowIndex) => {
    if (!userData) {
        console.error('User data not found in local storage');
        return;
    }

    try {
        // Retrieve the selected option value from the dropdown
        const selectedOption = document.getElementById(`select-${rowIndex}`).value;

        // Add the selected option value to the rowData
        rowData.assign = selectedOption;

        const payload = {
            ...rowData,
            userId: userData.userId,
            username: userData.userName // Changed from username to userName
        };

        const isSent = await sendDataToAPI(payload, rowIndex);

        if (isSent) {
            // Update sentData state to mark this row as sent
            setSentData({ ...sentData, [rowIndex]: true });
        }
    } catch (error) {
        console.error('Error handling send click:', error);
    }
};


    return (
        <div className='admin-main-container'>
            <div className="nav-container">
                <h2 className="nav-bar-title sub-t">Workload Management</h2>
                <div className='blue-line-container'>
                    <li className='blue-dot'></li>
                    <li className='blue-dot'></li>
                    <li className='blue-dot'></li>
                    <div className='blue-line'></div>
                </div>
                <div className='work-load-form'>
                    <div className='table-container'>
                        <div className='table-header'>
                            <p>Date</p>
                            <p>Day</p>
                            <p>Period</p>
                            <p>Class</p>
                            <p>Subject</p>
                            <p>Staff</p>
                            <p>Send Request</p>
                        </div>
                        {Object.entries(workLoadData).map(([day, periods], dayIndex) => (
                            <div key={day}>
                                {periods.map((period, periodIndex) => (
                                    <div key={periodIndex} className='table-row'>
                                        <p>{day}</p>
                                        <p>{period.day}</p>
                                        <p>{period.period}</p>
                                        <p>{period.class}</p>
                                        <p>{period.sub}</p>
                                        <select id={`select-${dayIndex}-${periodIndex}`} name="name" className="drop-down">
                                            <option value="BEC071002">K. Srinivasa Rao</option>
                                            <option value="BEC071003">P. A. V Krishna Rao</option>
                                            <option value="BEC071004">G. Prasad</option>
                                            <option value="BEC071005">K. Bhaskara Rao</option>
                                            <option value="BEC071006">B. Krishnaiah</option>
                                            <option value="BEC071007">M. Praveen Kumar</option>
                                            <option value="BEC071008">N. Srinivasa Rao</option>
                                            <option value="BEC071009">K. Sai Prasanth</option>
                                            <option value="BEC071010">P. Ratna Prakash</option>
                                            <option value="BEC071011">P. Ravi Kumar</option>
                                            <option value="BEC071012">K. Suresh Kumar</option>
                                            <option value="BEC071013">S. Ratna Babu</option>
                                            <option value="BEC071017">Mastanaiah Naidu Yasam</option>
                                            <option value="BEC071018">P. Sreedhar</option>
                                            <option value="BEC071019">BBK. Prasad</option>
                                            <option value="BEC071020">Surekha Peravali</option>
                                        </select>
                                        <button
                                            type="button"
                                            className='send-btn'
                                            onClick={() => handleSendClick({
                                                date: day,
                                                day: period.day,
                                                period: period.period,
                                                class: period.class,
                                                sub: period.sub,
                                                assign: period.option,
                                                status: 'Pending'
                                            }, `${dayIndex}-${periodIndex}`)}
                                            disabled={sentData[`${dayIndex}-${periodIndex}`]} // Disable button if already sent
                                        >
                                            {sentData[`${dayIndex}-${periodIndex}`] ? 'Sent' : 'Send'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkLoadView;
