import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaSignInAlt, FaSignOutAlt,
} from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import logo from '../../assets/images/bookflix-logo.png';

const NavPanel = () => {

  const navigate = useNavigate();
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  const Admin = () => {
    const role = localStorage.getItem('role');
    return role === 'admin';
  };
  const isLoggedIn = isAuthenticated();
  const isAdmin = Admin();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <aside className="main-nav">
      <div className="d-flex flex-column flex-shrink-0 bg-light sidebar justify-content-between">
        <div className="d-flex flex-column gap-5 pt-4">
          <a href="/" className="d-flex justify-content-center mb-3">
            <img src={logo} className="site-logo" alt="logo" />
          </a>

          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <NavLink className="nav-link ms-3 p-2" to="/">Movies</NavLink>
            </li>
            {isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link ms-3 p-2" to="/reserve">Reserve</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-3 p-2" to="/reservations">My Reservations</NavLink>
              </li>

            </>
            )}
            {isLoggedIn && isAdmin && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link ms-3 p-2" to="/add-movie">Add Movie</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-3 p-2" to="/delete-movies">Delete Movies</NavLink>
              </li>
            </>
            )}

          </ul>
        </div>
        {/* Social Sharing Links */}
        <div className="social-sharing p-3 d-flex flex-column gap-2">
          <ul className="d-flex justify-content-center gap-4 p-0">
            {isLoggedIn ? (
              <li>
                <button type="button" className="logout btn btn-outline-danger btn-small" onClick={handleLogout}>
                  <FaSignOutAlt />
                  &nbsp;
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/signin" className="login-btn btn btn-small">
                    <FaSignInAlt />
                    &nbsp;
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="signup btn btn-small">
                    <AiOutlineUserAdd />
                    &nbsp;
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="social-link">
              <FaFacebook />
            </Link>
            <Link to="/" className="social-link">
              <FaTwitter />
            </Link>
            <Link to="/" className="social-link">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/Lucash2022/BookFlix-Frontend" className="social-link">
              <FaGithub />
            </Link>
          </div>
          <p className="text-center m-0">
            <small>
              &copy; 2023
              <strong> BookFlix</strong>
            </small>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default NavPanel;
