import React from 'react';
import './index.css'

const WorkLoadView = ({ workLoadData }) => {
    // Function to send data to the API
    const sendDataToAPI = (rowData) => {
        // Here you can implement the logic to send the data to your API
        console.log("Sending data to API:", rowData);
    };

    // Event handler for the "Send" button
    const handleSendClick = (rowData) => {
        sendDataToAPI(rowData);
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
                            <p>Day</p>
                            <p>Period</p>
                            <p>Class</p>
                            <p>Subject</p>
                            <p>Staff</p>
                            <p>Send Request</p>
                        </div>
                        {Object.entries(workLoadData).map(([day, periods]) => (
                            <div key={day}>
                                {periods.map((period, index) => (
                                    <div key={index} className='table-row'>
                                        <p>{day}</p>
                                        <p>{period.period}</p>
                                        <p>{period.class}</p>
                                        <p>{period.sub}</p>
                                        <select id="name" name="name" className="drop-down">
                                            <option value="N. Sivaram Prasad" >N. Sivaram Prasad</option>
                                            <option value="K. Srinivasa Rao" >K. Srinivasa Rao</option>
                                            <option value="P. A. V Krishna Rao" >P. A. V Krishna Rao</option>
                                            <option value="G. Prasad" >G. Prasad</option>
                                            <option value="K. Bhaskara Rao" >K. Bhaskara Rao</option>
                                            <option value="B. Krishnaiah" >B. Krishnaiah</option>
                                            <option value="M. Praveen Kumar" >M. Praveen Kumar</option>
                                            <option value="N. Srinivasa Rao" >N. Srinivasa Rao</option>
                                            <option value="K. Sai Prasanth" >K. Sai Prasanth</option>
                                            <option value="P. Ratna Prakash" >P. Ratna Prakash</option>
                                            <option value="P. Ravi Kumar" >P. Ravi Kumar</option>
                                            <option value="K. Suresh Kumar">K. Suresh Kumar</option>
                                            <option value="S. Ratna Babu" >S. Ratna Babu</option>
                                            <option value="Mastanaiah Naidu Yasam" >Mastanaiah Naidu Yasam</option>
                                            <option value="P. Sreedhar" >P. Sreedhar</option>
                                            <option value="BBK. Prasad" >BBK. Prasad</option>
                                            <option value="Surekha Peravali" >Surekha Peravali</option>
                                        </select>
                                        <button 
                                            type="button" 
                                            className='send-btn'
                                            onClick={() => handleSendClick({
                                                day: day,
                                                period: period.period,
                                                class: period.class,
                                                sub: period.sub,
                                                // Add other data fields here
                                            })}
                                        >
                                            Send
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
