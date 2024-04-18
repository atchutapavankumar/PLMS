import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
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

const Login = () => {
  const [password, setPassword] = useState('');
  const [gmail, setGmail] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();




  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeGmail= (event) => {
    setGmail(event.target.value);
  };

  const onSubmitSuccess = (arg) => {
    navigate(`/${arg}`);
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

 
  const submitForm = async (event) => {
    event.preventDefault();
    const apiLogin = "https://leave-ms-server.onrender.com/api/login"
   const testApi = "http://localhost:3030/api/login"
  
    try {
        const response = await fetch(testApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              password: password,
              gmail: gmail,
            }),
            
        });
  
        const data = await response.json();
  
        if (response.ok) {
            console.log('User Logged successfully');
            // Store user details in local storage
            localStorage.setItem('user', JSON.stringify(data));
            if (data.position === 'Faculty'){
              onSubmitSuccess("faculty-main");
            }else if (data.position === 'HOD'){
              onSubmitSuccess("hod-main");
            }else if (data.position === 'Principal'){
              onSubmitSuccess("principal");
            }else if (data.position === 'Admin'){
              onSubmitSuccess("admin")
            }
        } else {
            console.error('Login failed:', data.message);
            onSubmitFailure(data.message);
        }
    } catch (error) {
        console.error('Error registering user:', error.message);
        onSubmitFailure('An error occurred while registering');
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
  


  return (
    <>
        <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>

    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderGmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>

       <Link to="/"  className='link-item'>
        <button type="submit" className="login-button" onClick={submitForm}>
          Login
        </button>
        </Link>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        or
        <Link to="/sign-up" className='link-item'>
        <button type="submit" className="login-button">
          Register
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

export default Login;
