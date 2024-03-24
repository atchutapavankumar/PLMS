import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSuccess = () => {
    navigate('/home');
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (username === 'sample' && password === 'sample') {
      console.log('User credentials are valid');
      onSubmitSuccess();
    } else {
      onSubmitFailure('Invalid username or password');
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
          LOGIN AS
        </label>
        <select class="username-input-field">
            <option value="Faculty">Faculty</option>
            <option value="Faculty">HOD</option>
            <option value="Faculty">Principal</option>
            <option value="Faculty">Admin</option>

        </select>
    </>);};



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

  return (
    <>
        <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" className="clg-logo" alt="logo"/>

    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <div className="input-container">{renderSelectedField()}</div>


        <button type="submit" className="login-button">
          Login
        </button>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
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

export default LoginForm;