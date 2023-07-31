import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPanel from '../child-components/NavPanel';
import MobileNav from '../child-components/MobileNav';

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
