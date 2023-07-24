import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPanel from './NavPanel';
import MobileNav from './MobileNav';

function LayOut() {
  return (
    <>
      <NavPanel />
      <MobileNav />
      <Outlet />
    </>
  );
}
export default LayOut;
