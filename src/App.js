import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from '../src/components/Dashboard';
import Help from '../src/components/Help';
import Transaction from '../src/components/Transaction';
import Realestate from '../src/components/Realestate';
import Chat from '../src/components/Chat';
import Profile from '../src/components/Profile';
import Notification from '../src/components/Notification';
import Register from "../src/components/Register"; 
import Signin from "../src/components/Signin"; 

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const storedSignedIn = localStorage.getItem('isSignedIn');
    if (storedSignedIn === 'true') {
      setIsSignedIn(true);
    }
  }, []);

  // Update localStorage when the signed-in status changes
  useEffect(() => {
    localStorage.setItem('isSignedIn', isSignedIn);
  }, [isSignedIn]);

  return (
    <BrowserRouter>
      {isSignedIn ? <Header /> : null}
      <Routes>
      {/* <Route index element={<Register />} /> */}
      <Route path="/" element={isSignedIn ? <Dashboard /> : <Signin setIsSignedIn={setIsSignedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/header" element={<Header />} />
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Help />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
