import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import isAuthenticated from './components/auth';
import Admin from './components/IsAdmin';

const AdminRoute = () => {
  const isLoggedIn = isAuthenticated();
  const isAdmin = Admin();
  if (isLoggedIn && isAdmin) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default AdminRoute;
