import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import IsAdmin from './IsAdmin';
import IsAuthenticated from './IsAuthenticated';
import logo from '../../assets/images/bookflix-logo.png';

const MobileNav = () => {
  const navigate = useNavigate();
  const isLoggedIn = IsAuthenticated();
  const isAdmin = IsAdmin();

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleOffcanvasClose();
    navigate('/signin');
  };

  return (
    <>
      <Navbar
        bg="light"
        expand={false}
        className="mb-3 mobile-nav"
      >
        <Container className="mobile-nav-container" fluid>
          <Navbar.Toggle
            className="mobile-nav-toggle"
            aria-controls={`offcanvasNavbar-expand-${false}`}
            onClick={() => setShowOffcanvas(true)}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            placement="start"
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <img src={logo} className="site-logo" alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column justify-content-between">
              <Nav className="justify-content-start flex-grow-1 px-4 mt-5">
                <Nav.Link
                  className="nav-link"
                  onClick={handleOffcanvasClose}
                  href="/"
                >
                  Movies
                </Nav.Link>
                {isLoggedIn && (
                  <>
                    <Nav.Link
                      className="nav-link"
                      onClick={handleOffcanvasClose}
                      href="/reserve"
                    >
                      Reserve
                    </Nav.Link>
                    <Nav.Link
                      className="nav-link"
                      onClick={handleOffcanvasClose}
                      href="/reservations"
                    >
                      My Reservations
                    </Nav.Link>
                  </>
                )}
                {isLoggedIn && isAdmin && (
                  <>
                    <Nav.Link
                      className="nav-link"
                      onClick={handleOffcanvasClose}
                      href="/add-movie"
                    >
                      Add Movie
                    </Nav.Link>
                    <Nav.Link
                      className="nav-link"
                      onClick={handleOffcanvasClose}
                      href="/delete-movie"
                    >
                      Delete Movies
                    </Nav.Link>
                  </>
                )}
              </Nav>
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
                        <NavLink to="/signin" className="login-btn btn btn-small" onClick={handleOffcanvasClose}>
                          <FaSignInAlt />
                          &nbsp;
                          Log In
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/signup" className="signup btn btn-small" onClick={handleOffcanvasClose}>
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
                    {' '}
                    <strong>
                      <span>
                        <a href="https://github.com/Lucash2022" className="intialsL">L</a>
                      </span>
                      &nbsp;
                      <span>
                        <a href="https://github.com/torobucci" className="intialsK">K</a>
                      </span>
                      &nbsp;
                      <span>
                        <a href="https://github.com/SabaAhmad404" className="intialsA">S</a>
                      </span>
                      &nbsp;
                      <span>
                        <a href="https://github.com/SamTush" className="intialsT">S</a>
                      </span>
                      &nbsp;
                    </strong>
                    {' '}
                    Group
                  </small>
                </p>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MobileNav;
