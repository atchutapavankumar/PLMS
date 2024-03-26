import React, { useState, useEffect } from 'react';
import Header from '../Header'

const ApplyLeaveForm = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        leavetype: "",
        startDate: "",
        expiryDate: ""
    });

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

    const formatTime = (date) => {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleTimeString('en-US', options);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="hod-main-container">
            <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo" />
            <Header/>
            <div className="nav-container">
                <h2 className="nav-bar-title sub-t">Leave <span>Application</span></h2>
                <div className='data-container'>
                    <div className="create-task-popup-container">
                        <h4 className="Form-Title">Apply Leave</h4>
                        <div className="create-task-form-container">
                            <form className="create-task-form" onSubmit={handleSubmit}>
                                <div className="create-task-form-input">
                                    <label htmlFor="name">Name</label>
                                    <select
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    >
                                    <option value="N. Sivaram Prasad" selected={formData.name === "N. Sivaram Prasad"}>N. Sivaram Prasad</option>
<option value="K. Srinivasa Rao" selected={formData.name === "K. Srinivasa Rao"}>K. Srinivasa Rao</option>
<option value="P. A. V Krishna Rao" selected={formData.name === "P. A. V Krishna Rao"}>P. A. V Krishna Rao</option>
<option value="G. Prasad" selected={formData.name === "G. prasad"}>G. Prasad</option>
<option value="K. Bhaskara Rao" selected={formData.name === "K. Bhaskara Rao"}>K. Bhaskara Rao</option>
<option value="B. Krishnaiah" selected={formData.name === "B. Krishnaiah"}>B. Krishnaiah</option>
<option value="M. Praveen Kumar" selected={formData.name === "M. Praveen Kumar"}>M. Praveen Kumar</option>
<option value="N. Srinivasa Rao" selected={formData.name === "N. Srinivasa Rao"}>N. Srinivasa Rao</option>
<option value="K. Sai Prasanth" selected={formData.name === "K. Sai Prasanth"}>K. Sai Prasanth</option>
<option value="P. Ratna Prakash" selected={formData.name === "P. Ratna Prakash"}>P. Ratna Prakash</option>
<option value="P. Ravi Kumar" selected={formData.name === "P. Ravi Kumar"}>P. Ravi Kumar</option>
<option value="K. Suresh Kumar" selected={formData.name === "K. Suresh Kumar"}>K. Suresh Kumar</option>
<option value="S. Ratna Babu" selected={formData.name === "S. Ratna Babu"}>S. Ratna Babu</option>
<option value="Mastanaiah Naidu Yasam" selected={formData.name === "Mastanaiah Naidu Yasam"}>Mastanaiah Naidu Yasam</option>
<option value="P. Sreedhar" selected={formData.name === "P. Sreedhar"}>P. Sreedhar</option>
<option value="BBK. Prasad" selected={formData.name === "BBK. Prasad"}>BBK. Prasad</option>
<option value="Surekha Peravali" selected={formData.name === "Surekha Peravali"}>Surekha Peravali</option>

                                        {/* Options for name */}
                                    </select>
                                    <label htmlFor="leavetype">Leave Type</label>
                                    <select
                                        id="leavetype"
                                        name="leavetype"
                                        value={formData.leavetype}
                                        onChange={handleChange}
                                        className="task-input-field"
                                    >
                                       <option value="Casual Leave" selected={formData.category === "Casual Leave"}>Casual Leave</option>
<option value="Earn Leave" selected={formData.category === "Earn Leave"}>Earn Leave</option>
<option value="One Hour" selected={formData.category === "One Hour"}>One Hour</option>
<option value="Medical Leave" selected={formData.category === "Medical Leave"}>Medical Leave</option>
<option value="Meternity Leave" selected={formData.category === "Meternity Leave"}>Meternity Leave</option>
<option value="Special Casual Leave" selected={formData.category === "Special Casual Leave"}>Special Casual Leave</option>

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
                                            value={formData.startDate}
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
                                            value={formData.expiryDate}
                                            onChange={handleChange}
                                            className="task-input-field"
                                        />
                                    </div>
                                </div>
                                <div className="btn-container-pop">
                                    <button type="submit" className="create-btn">
                                        Apply Self
                                    </button>
                                    <button type="submit" className="create-btn">
                                        Apply For Others
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyLeaveForm;
