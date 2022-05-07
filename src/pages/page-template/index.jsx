import React from 'react';
import Logo from '../../components/logo';
import { Outlet } from 'react-router-dom';

const MainWindow = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <Logo
              title="Woo pizza"
              subtitle="самая вкусная пицца во вселенной"
              buttonActive={true}/>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWindow;
