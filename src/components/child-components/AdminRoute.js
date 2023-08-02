import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import IsAuthenticated from './IsAuthenticated';
import Admin from './IsAdmin';

const AdminRoute = () => {
  const isLoggedIn = IsAuthenticated();
  const isAdmin = Admin();
  if (isLoggedIn && isAdmin) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default AdminRoute;
