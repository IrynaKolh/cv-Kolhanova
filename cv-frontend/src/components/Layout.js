import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <div className="flex flex-col w-full min-h-screen">
          <Header />
          <main className="mx-5 flex-grow">
            <Outlet />
          </main>
          <Footer className="mt-auto" />
        </div>
      </div>
    </>
  );
};

export default Layout;
