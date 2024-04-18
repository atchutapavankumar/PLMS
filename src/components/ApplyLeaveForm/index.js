import React, { useState, useEffect } from 'react';
import Header from '../Header';
import WorkLoadView from '../WorkLoadView';

const ApplyLeaveForm = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [userName, setUserName] = useState("");
    const [leaveType, setLeaveType] = useState("Casual");
    const [startDate, setStartDate] = useState("");
    const [endDate, setExpiryDate] = useState("");
    const [userId, setUserId] = useState("");
    const [reason, setReason] = useState();
    const [leaveStatus, setleaveStatus] = useState("Pending");

    const [showWorkLoad, setWorkLoad] = useState(true);
    const [workLoadData, setWorkLoadData] = useState({});
    const [applyButtonText, setApplyButtonText] = useState("Adjust Workload & Apply");
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data

    const department = user["department"]
    console.log(department)




    const fetchWorkLoad = async () => {
        try {
            const res = await fetch('http://localhost:3030/api/workload/schedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    startDate,
                    endDate,
                    userId
                }),
            });

            const data = await res.json();
            localStorage.setItem("userId", data.userId);

            if (res.ok) {
                console.log('Workload fetched successfully', data);
                setWorkLoad(!showWorkLoad);
                setWorkLoadData(data);
                setApplyButtonText("Apply");
                alert("Workload fetched successfully");
            } else {
                console.error('Leave fetching failed:');
            }
        } catch (error) {
            console.error('Error fetching workload:', error.message);
        }
    };

    const handleSubmitWOA = async (event) => {
        event.preventDefault();
        const testApi = "http://localhost:3030/api/apply-leave"
        const realApi = 'https://leave-ms-server.onrender.com/api/apply-leave'



        try {
            const response = await fetch(testApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName,
                    leaveType,
                    startDate,
                    endDate,
                    department,
                    leaveStatus,
                    reason,
                    userId
                }),
            });

            const data = await response.json();
            localStorage.setItem("userId", data.userId);

            if (response.ok) {
                console.log('Leave Applied successfully', data);
                setWorkLoad(!showWorkLoad);
                alert("Leave Applied successfully")
            } else {
                console.error('Leave Apply failed:');
            }
        } catch (error) {
            console.error('Error Applying leave user:', error.message);
        }
    };

    const handleSubmitWA = async (event) => {
        event.preventDefault();
    
        const testApi = "http://localhost:3030/api/apply-leave"
        const realApi = 'https://leave-ms-server.onrender.com/api/apply-leave'

        try {
            const response = await fetch(testApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName,
                    leaveType,
                    department,
                    startDate,
                    leaveStatus,
                    endDate,
                    reason,
                    userId
                }),
            });
    
            const data = await response.json();
            localStorage.setItem("userId", data.userId);
    
            if (response.ok) {
                console.log('Leave Applied successfully', data);
                setWorkLoad(!showWorkLoad);
                fetchWorkLoad();
    
                // Save selected ID and name to local storage as leaveData
                const leaveData = {
                    userId,
                    userName
                };
                localStorage.setItem("leaveData", JSON.stringify(leaveData));
    
                alert("Leave Applied successfully");
            } else {
                console.error('Leave Apply failed:');
            }
        } catch (error) {
            console.error('Error Applying leave user:', error.message);
        }
    };
    

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "userName":
                setUserName(value);
                break;
            case "leaveType":
                setLeaveType(value);
                break;
            case "startDate":
                setStartDate(value);
                break;
            case "expiryDate":
                setExpiryDate(value);
                break;
            case "userId":
                setUserId(value);
                break;
            case "reason":
                setReason(value);
                break;
            default:
                break;
        }
    };

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleReason = (event) => {
        setReason(event.target.value);
    };

    const handleLeaveType = (event) => {
        setLeaveType(event.target.value);
    };

    const handleUserId = (event) => {
        setUserId(event.target.value);
    };


    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo" />
            <Header />
            <div className="nav-container">
                <h2 className="nav-bar-title sub-t">Leave <span>Application</span></h2>
                <div className='data-container'>
                    <div className="create-task-popup-container">
                        <h4 className="Form-Title">Apply Leave</h4>
                        <div className="create-task-form-container">
                            <form className="create-task-form" >
                                <div className="create-task-form-input">
                                    <label htmlFor="name">Name</label>
                                   {
                                    department === "IT" ? 
                                    <select
                                        id="name"
                                        name="userName"
                                        value={userName}
                                        onChange ={handleNameChange}
                                        className="task-input-field"
                                    >
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
                                            <option value="BEC071001">N. Sivaram Prasad</option>
                                    </select> : <input id="name" value={userName} onChange={handleNameChange} className='task-input-field'/>}
                                    <label htmlFor="name">User Id</label>
                                    {
                                        department === "IT" ?  <select
                                        id="userid"
                                        name="userid"
                                        value={userId}
                                        onChange ={handleUserId}
                                        className="task-input-field"
                                    >
                                     <option value="BEC071008"> BEC071008</option>
                                            <option value="BEC071010"> BEC071010</option>
                                            <option value="BEC071012"> BEC071012</option>
                                            <option value="BEC071013"> BEC071013</option>
                                            <option value="BEC071017"> BEC071017</option>
                                            <option value="BEC071018"> BEC071018</option>
                                            <option value="BEC071019"> BEC071019</option>
                                            <option value="BEC071020"> BEC071020</option>
                                            <option value="BEC071004"> BEC071004</option>
                                            <option value="BEC071005"> BEC071005</option>
                                            <option value="BEC071007"> BEC071007</option>
                                            <option value="BEC071009"> BEC071009</option>
                                            <option value="BEC071001"> BEC071001</option>
                                            <option value="BEC071002"> BEC071002</option>
                                            <option value="BEC071003"> BEC071003</option>
                                            <option value="BEC071006"> BEC071006</option>

                                    </select>: <input id="userid" value={userId} onChange={handleUserId} className='task-input-field'/>}

                                    
                                   
                                    
                                    <label htmlFor="leaveType">Leave Type</label>
                                    <select
                                        id="leaveType"
                                        name="leaveType"
                                        value={leaveType}
                                        onChange={handleLeaveType}
                                        className="task-input-field"
                                    >
                                         <option value="Casual Leave">Casual Leave</option>
                                            <option value="Earn Leave">Earn Leave</option>
                                            <option value="Medical Leave">Medical Leave</option>
                                            <option value="Maternity">Maternity Leave</option>
                                            <option value="Special">Special Casual Leave</option>
                                    </select>
                                </div>
                                <br />
                                <div className="btn-container-pop">
                                    <div className="create-task-form-input">
                                        <label htmlFor="startDate">Start Date</label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            name="startDate"
                                            value={startDate}
                                            onChange={handleChange}
                                            className="task-input-field"
                                        />
                                    </div>
                                    <br />
                                    <div className="create-task-form-input">
                                        <label htmlFor="expiryDate">End Date</label>
                                        <input
                                            type="date"
                                            id="expiryDate"
                                            name="expiryDate"
                                            value={endDate}
                                            onChange={handleChange}
                                            className="task-input-field"
                                        />
                                    </div>

                                    <div className="create-task-form-input">
                                        <label htmlFor="reason">Reason</label>
                                        <input
                                            type="text"
                                            id="reason"
                                            name="reason"
                                            value={reason}
                                            onChange={handleReason}
                                            className="task-input-field"
                                        />
                                    </div>
                                </div>
                                <div className="btn-container-pop">
                                
                                    <button type="submit" className="create-btn" onClick={handleSubmitWA}>
                                        Apply With Adjustment
                                    </button>
                                    <button type="submit" className="create-btn" onClick={handleSubmitWOA}>
                                        Apply Without Adjustment
                                    </button>
                                    
                                
                                      
                                </div>
                            </form>
                        </div>
                    </div>
                
                </div>
                <div className='work-load-form'>
                 <WorkLoadView workLoadData={workLoadData} />
                 </div>
                
               
            </div>
        </div>
    );

    }
export default ApplyLeaveForm;
