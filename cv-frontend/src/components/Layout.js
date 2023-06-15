import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>    
      <div className="flex flex-row">
        <SideBar />
        <div className="text-center w-full" >  
          <Header />      
          <Outlet />
          <Footer />
        </div>     
      </div>         
    </>
  );
};

export default Layout