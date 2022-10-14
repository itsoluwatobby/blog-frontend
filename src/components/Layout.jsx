import React from 'react';
import Header from '../pages/Header';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='h-[94vh] bg-gray-400 overflow-scroll w-full overflow-x-hidden mad:w-[82vw] nest-hub:w-full small:w-[100vw]'>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
