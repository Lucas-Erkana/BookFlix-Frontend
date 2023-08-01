import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import isAuthenticated from './components/auth';

const PrivateRoute = () => {
  const isLoggedIn = isAuthenticated();
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
