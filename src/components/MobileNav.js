import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import isAuthenticated from './auth';
import logo from '../assets/images/bookflix-logo.png';

const MobileNav = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  const isAdmin = localStorage.getItem('role') === 'admin';

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 mobile-nav"
        >
          <Container className="mobile-nav-container" fluid>
            <Navbar.Toggle
              className="mobile-nav-toggle"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(true)}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleOffcanvasClose}
              placement="start"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
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
                        href="/delete-movies"
                      >
                        Delete Movie
                      </Nav.Link>
                    </>
                  )}
                </Nav>
                <div className="social-sharing p-3 d-flex flex-column mb-2 g-3">
                  <ul className="d-flex justify-content-center g-4 logging p-0">
                    {isLoggedIn ? (
                      <li>
                        <button
                          type="button"
                          className="logout btn btn-outline-danger btn-small"
                          onClick={() => {
                            handleOffcanvasClose();
                            handleLogout();
                          }}
                        >
                          <FaSignOutAlt />
                          &nbsp;
                          Logout
                        </button>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/signin"
                            className="btn btn-small btn-dark"
                            onClick={handleOffcanvasClose}
                          >
                            <FaSignInAlt />
                            &nbsp;
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/signup"
                            className="btn btn-small btn-dark"
                            onClick={handleOffcanvasClose}
                          >
                            <AiOutlineUserAdd />
                            &nbsp;
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                  <div className="d-flex justify-content-center g-4">
                    <Link to="/" className="social-link">
                      <FaFacebook />
                    </Link>
                    <Link to="/" className="social-link">
                      <FaTwitter />
                    </Link>
                    <Link to="/" className="social-link">
                      <FaLinkedin />
                    </Link>
                    <Link
                      to="https://github.com/Lucash2022/BookFlix-Frontend"
                      className="social-link"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <p className="text-center">
                    <small>
                      &copy; 2023 by
                      {' '}
                      <strong>
                        <span>
                          <a href="https://github.com/Lucash2022">L</a>
                        </span>
                        &nbsp;
                        <span>
                          <a href="https://github.com/torobucci">K</a>
                        </span>
                        &nbsp;
                        <span>
                          <a href="https://github.com/SabaAhmad404">A</a>
                        </span>
                        &nbsp;
                        <span>
                          <a href="https://github.com/SamTush">T</a>
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
      ))}
    </>
  );
};

export default MobileNav;
