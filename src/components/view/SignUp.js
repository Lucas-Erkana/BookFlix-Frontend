import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [error] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        user: {
          full_name: formData.fullName,
          email: formData.email,
          password: formData.password,
        },
      });
      localStorage.setItem('token', response.headers.authorization);
      localStorage.setItem('role', response.data.data.role);
      localStorage.setItem('userId', response.data.data.id);
      localStorage.setItem('full_name', response.data.data.full_name);
      navigate('/');
    } catch (error) {
      const { message } = error.response.data;
      document.getElementById('show-error').innerHTML = message;
    }
  };

  return (

    <div className="col-md container-main d-flex flex-row align-items-center login p-0">
      <div className="col-md-12 d-flex flex-column align-items-center session-overlay justify-content-center">
        <div className="input-box col-md d-flex flex-column align-items-center justify-content-center">
          <div className="intro">
            <span className="line" />
            <h4 className="intro__title">Welcome to <span className="book">Book</span>Flix</h4>
            <p className="intro__text">Available For Home Viewing</p>
            <p className="intro__text">Signup to get started!</p>
          </div>
          <form onSubmit={handleSignup} className="sign-form">
            <div className="input-field">
              <input
                className="sign-form__input"
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <input
                className="sign-form__input"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <input
                className="sign-form__input"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 text-light">Signup</button>
          </form>
          <div className="sign-in mt-4">
            <p>
              Already have an account?&nbsp;
              <Link to="/signin" className="session-link-btn">Sign In</Link>
            </p>
            {error === true && <p id="show-error" />}
            {error === false && <p>Please enter valid username and password</p>}
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignUp;