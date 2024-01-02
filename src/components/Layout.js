import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Help from './Help';
import Transaction from './Transaction';
import Realestate from './Realestate';
import Chat from './Chat';
import Profile from './Profile';
import Notification from './Notification';

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/realstate" element={<Realestate />} />
            <Route path="/transaction" element={<Transaction/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/notification" element={<Notification/>} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
   
  );
};

export default Layout;
