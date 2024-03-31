import React, { useState,useEffect} from "react";
import main from "../images/main.jpg";
import logo from "../images/logo.png";
import { Bell, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar"; 
import { useNavigate } from 'react-router-dom';
import { MoveLeft} from "lucide-react";
import Notificationmodal from './Notificationmodal';
import { useSelector} from 'react-redux';
import {ProfilePictureUrls} from './ImageFolder/Resuableimage';

function Header() {
  const navigate = useNavigate();
  const memberData = useSelector(state => state.reducer.memberData.investor);




  const handleBackButtonClick = () => {
    // Go back to the previous location
    navigate(-1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(true);
  };

  const toggleleave = () => {
    setIsModalOpen(false);
  };

  const location = useLocation();
  let moveLeftButton;
  let title;
  switch (location.pathname) {
    case "/dashboard":
      title = "Dashboard";
      break;
    case "/help":
      title = "Get Help";
      break;
    case "/transaction":
      title = "Transaction Report";
      break;
    case "/realestate":
      title = "My Real Estate";
      break;
      case "/inworks":
        title = "In The Works";
        break;
    case "/chat":
      title = "Chats";
      break;
    case "/profile":
      title = "My Profile";
      break;
    case "/notification":
      title = "Notifications";
      break;
      case "/signin":
        // title = "Notifications";
        break;
        case "/carousel":
          // title = "Notifications";
          break;
        case "/realstatestatement":
          title = "Invested Details" ;
          moveLeftButton = <MoveLeft onClick={() => handleBackButtonClick()}  className="w-8 h-8 cursor-pointer" />;
          break;
      case "/propertydetails":
        title = "In Works Properties/Details" ;
        moveLeftButton = <MoveLeft onClick={() => handleBackButtonClick()}  className="w-8 h-8 cursor-pointer" />;
        break;
          case "/investedproperty":
            title = "Invested Properties/Details" ;
            moveLeftButton = <MoveLeft onClick={() => handleBackButtonClick()}  className="w-8 h-8 cursor-pointer" />;
            break;

            case "/transactiondetails":
              title = "Transaction Details" ;
              moveLeftButton = <MoveLeft onClick={() => handleBackButtonClick()}  className="w-8 h-8 cursor-pointer" />;
              break;

              case "/investmentdetails":
                title = "Investment Details" ;
                moveLeftButton = <MoveLeft onClick={() => handleBackButtonClick()}  className="w-8 h-8 cursor-pointer" />;
                break;
    default:
      title = "Dashboard";
      navigate("/dashboard");
  }


  const [hovered, setHovered] = useState(false);

  const scaleFactor = 1.3; // Adjust this value to control the growth rate

  const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.0)',
    borderRadius: '1.2rem',
    width: '40px',
    height: '40px',
    backgroundColor: hovered ? '#C02834' : 'white',
    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out', // Add transform property
    transform: `scale(${hovered ? scaleFactor : 1})`, // Apply the scale transformation
  };


  const [hover, setHover] = useState(false);


  const scaleFactorr = 1.3; // Adjust this value to control the growth rate

  const notificationStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.0)',
    borderRadius: '1.2rem',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    backgroundColor: hover ? '#C02834' : 'white',
    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out', // Add transform property
    transform: `scale(${hover ? scaleFactorr : 1})`, // Apply the scale transformation
  };

const iconStyle = {
  fill: hover ? 'white' : 'gray',
  stroke: hover ? 'white' : 'gray',
};

if (!memberData) {
  return <div>Loading...</div>;
}

  return (
   <>
    <div className="sticky top-0 z-20">
      <div className="bg-white">
        <div className="flex flex-col relative">
          <div className=" border-b-2 border-gray-200">
            <div className="bg-white relative">
              <div className="relative">
                <img src={main} alt="main" className="w-full" />

                <div className="absolute top-0 left-8 text-gray-700 ">
                  <img
                    src={logo}
                    className="relative h-7 xs:h-8 sm:h-8 md:h-14 lg:h-20 xl:h-24 w-auto"
                    alt="Logo"
                  />
                </div>

                <div className="items-center absolute top-0 right-4 sm:right-5 md:right-4 lg:right-3 text-gray-700  sm:p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5 flex space-x-3 sm:space-x-5 ">
                  
                <div
      style={{ ...boxStyle }} // Spread the boxStyle object to retain existing styles
      className={hovered ? 'grow' : ''} // Add 'grow' class when hovered
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
  <Link to="/help">
    <MessageCircle fill={hovered ? 'white' : 'gray'} stroke={hovered ? 'white' : 'gray'} className="h-5 sm:h-2/5 md:h-1/8 lg:h-1/10 xl:h-1/12" />
  </Link>
</div>




<div
     style={{ ...notificationStyle}} // Spread the boxStyle object to retain existing styles
     className={hover ? 'grow' : ''}
      onMouseEnter={() => {
        setHover(true);
        toggleModal(); // Call toggleModal on hover
      }}
      onMouseLeave={() => {
        setHover(false);
        toggleleave();
         // Call toggleModal on mouse leave
      }}
   
    >
                    <div
                    
                    >
                      <Bell style={iconStyle} className="h-5 sm:h-2/5 md:h-1/8 lg:h-1/10 xl:h-1/12"/>
                     
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <Link to="/profile">
                      <img
                        src={ProfilePictureUrls(memberData.profilepicture,'addinvestor\\')}
                        className="object-cover h-7 sm:h-9 w-7 sm:w-9 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl mt-2"
                        alt=""
                      />
                    </Link>
                    <p className="text-xs text-red-600">My Profile</p>
                  </div>
                </div>

                <div className="absolute top-0 right-1/2  flex flex-col justify-center items-end h-full text-black">
               <div className="flex space-x-2 items-center">
               {moveLeftButton}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{title}</p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <Notificationmodal isOpen={isModalOpen} onClose={toggleModal} />
 
    <Sidebar /> 
   
   
    </>
  );
}

export default Header;
