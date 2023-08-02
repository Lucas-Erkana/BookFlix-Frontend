import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import IsAuthenticated from './IsAuthenticated';

const PrivateRoute = () => {
  const isLoggedIn = IsAuthenticated();
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
