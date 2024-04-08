import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const settings = {
  dots: true,
  slidesToScroll: 1,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gmail, setGmail] = useState('');
  const [userId, setUserId] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [position, setPosition] = useState('Faculty');
  const [leaveCountsDataset, setLeaveCountsData] = useState({});

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangeUserId = (event) => {
    setUserId(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeGmail = (event) => {
    setGmail(event.target.value);
  };

  const onSelectField = (event) => {
    setPosition(event.target.value);
    // Reset leave counts when position changes
    setLeaveCountsData({});
  };

  useEffect(() => {
    // Fetch leave counts only if position is Faculty or HOD
    const fetchLeaveCounts = async () => {
      try {
        if (position === 'Faculty' || position === 'HOD') {
          const leaveCountsResponse = await fetch('http://localhost:3030/api/designations/leave', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ position: position }),
          });

          if (!leaveCountsResponse.ok) {
            const errorData = await leaveCountsResponse.json();
            console.error('Failed to fetch leave counts:', errorData.message);
            setShowSubmitError(true);
            setErrorMsg(errorData.message);
            return;
          }

          const leaveCountsData = await leaveCountsResponse.json();

          setLeaveCountsData({
            totalCasual: leaveCountsData.totalCasual || 0,
            totalEarn: leaveCountsData.totalEarn || 0,
            totalMedical: leaveCountsData.totalMedical || 0,
            totalMaternity: leaveCountsData.totalMaternity || 0,
            totalSpecialCasual: leaveCountsData.totalSpecialCasual || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching leave counts:', error.message);
        setShowSubmitError(true);
        setErrorMsg('An error occurred while fetching leave counts');
      }
    };

    fetchLeaveCounts();
  }, [position]);

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("Submit Form");

    try {
      // Proceed with user registration
      const response = await fetch('http://localhost:3030/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          gmail: gmail,
          userId: userId,
          position: position,
          casualLeave: leaveCountsDataset.totalCasual || 0,
          earnLeave: leaveCountsDataset.totalEarn || 0,
          medicalLeave: leaveCountsDataset.totalMedical || 0,
          maternityLeave: leaveCountsDataset.totalMaternity || 0,
          specialCasualLeave: leaveCountsDataset.totalSpecialCasual || 0,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully');
        localStorage.setItem("user", JSON.stringify(data))
        localStorage.setItem("userId", userId)
        if (data.position === 'Faculty'){
          navigate("/faculty-main");
        }else if (data.position === 'HOD'){
          navigate("/hod");
        }else if (data.position === 'Principal'){
          navigate("/principal");
        }else if (data.position === 'Admin'){
          navigate("/admin")
        }

      } else {
        console.error('Registration failed:', data.message);
        setShowSubmitError(true);
        setErrorMsg(data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
      setShowSubmitError(true);
      setErrorMsg('An error occurred while registering');
    }
  };

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  const renderSelectedField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          REGISTER AS
        </label>
        <select className="username-input-field" onChange={onSelectField}>
          <option value="Faculty">Faculty</option>
          <option value="HOD">HOD</option>
          <option value="Principal">Principal</option>
          <option value="Admin">Admin</option>
        </select>
      </>
    );
  };

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
        />
      </>
    );
  };

  const renderGmailField = () => {
    return (
      <>
        <label className="input-label" htmlFor="gmail">
          Gmail
        </label>
        <input
          type="text"
          id="gmail"
          className="username-input-field"
          value={gmail}
          onChange={onChangeGmail}
          placeholder="Gmail"
        />
      </>
    );
  };

  const renderUserId = () => {
    return (
      <>
        <label className="input-label" htmlFor="userid">
          User Id
        </label>
        <input
          type="text"
          id="userid"
          className="username-input-field"
          value={userId}
          onChange={onChangeUserId}
          placeholder="UserId"
        />
      </>
    );
  };

  return (
    <>
      <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo" />

      <div className="login-form-container">
        <form className="form-container" >
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderGmailField()}</div>
          <div className="input-container">{renderUserId()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <div className="input-container">{renderSelectedField()}</div>
          <Link>
          <button type="submit" className="login-button" onClick={submitForm}>
            Register
          </button>
          </Link>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          or
          <Link to="/" className="link-item">
            <button type="button" className="login-button">
              Login
            </button>
          </Link>
        </form>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src="https://res.cloudinary.com/dh1qxhpf9/image/upload/v1711253100/main_zgwdxo.jpg" alt="slide image2" className="slide-image" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/dh1qxhpf9/image/upload/v1711253161/research_yz61ui.jpg" alt="slide image3" className="slide-image" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/dh1qxhpf9/image/upload/v1711253211/GEB_ndc23e.jpg" alt="slide image4" className="slide-image" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Register;
