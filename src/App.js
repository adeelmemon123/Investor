import React, { useState} from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from '../src/components/Dashboard';
import Help from '../src/components/Help';
import Transaction from '../src/components/Transaction';
import Realestate from '../src/components/Realestate';
import Chat from '../src/components/Chat';
import Notificationmodal from '../src/components/Notificationmodal';
import Profile from '../src/components/Profile';
import Imagemodal from '../src/components/Imagemodal';
import Notification from '../src/components/Notification';
import Register from "../src/components/Register"; 
import Transactiondetails from "../src/components/Transactiondetails"; 
import Signin from "../src/components/Signin"; 
import Forget from "../src/components/Forget"; 
import Inworks from "../src/components/Inworks"; 
import Carousel from "./components/Carousel"; 
import Nicmodal from "../src/components/Nicmodal"; 
import Successmodal from "../src/components/Successmodal"; 
import PropertyDetails from "../src/components/PropertyDetails"; 
import Investedproperty from "../src/components/Investedproperty"; 
import Realstatestatement from "../src/components/Realstatestatement"; 
import Investmentdetails from "../src/components/Investmentdetails"; 
import WhatsAppButton from "../src/components/Watsapbutton"; 






function App() {

  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  

  const hideHeader = () => {
    setHeaderVisibility(false);
  };

  const showHeader = () => {
    setHeaderVisibility(true);
  };

  return (
    <BrowserRouter>
     {isHeaderVisible && <Header />}
  
 
      <Routes>
        
      <Route
          index
          element={<Signin hideHeader={hideHeader} showHeader={showHeader} />}
        />
        <Route
          path="/signin"
          element={<Signin hideHeader={hideHeader} showHeader={showHeader} />}
        />
       
        <Route path="/notificationmodal" element={<Notificationmodal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/header" element={<Header />} />
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Help />} />
        <Route path="/forget" element={<Forget hideHeader={hideHeader} showHeader={showHeader} />}/>
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/carousel" element={<Carousel/>} />
        <Route path="/transactiondetails" element={<Transactiondetails />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/realstatestatement" element={<Realstatestatement/>} />
        <Route path="/nicmodal" element={<Nicmodal />} />
        <Route path="/successmodal" element={<Successmodal />} />
        <Route path="/inworks" element={<Inworks />} />
        <Route path="/imagemodal" element={<Imagemodal />} />
        <Route path="/propertydetails" element={<PropertyDetails/>} />
        <Route path="/investedproperty" element={<Investedproperty />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/investmentdetails" element={<Investmentdetails/>} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
