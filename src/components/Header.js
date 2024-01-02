import React, { useState ,useEffect} from "react";
import main from "../images/main.jpg";
import logo from "../images/logo.png";
import { Bell, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar"; 

function Header() {
  const location = useLocation();

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
    case "/chat":
      title = "Chats";
      break;
    case "/profile":
      title = "My Profile";
      break;
    case "/notification":
      title = "Notifications";
      break;
    default:
      title = "Dashboard";
  }
  return (
   <>
    <div className="sticky top-0 z-20">
      <div className="bg-white">
        <div className="flex flex-col relative">
          <div className=" border-b-2 border-gray-200">
            <div className="bg-white relative">
              <div className="relative">
                <img src={main} alt="Main Image" className="w-full" />

                <div className="absolute top-0 left-8 text-gray-700 ">
                  <img
                    src={logo}
                    className="relative h-7 xs:h-8 sm:h-8 md:h-14 lg:h-20 xl:h-24 w-auto"
                    alt="Logo"
                  />
                </div>

                <div className="items-center absolute top-0 right-4 sm:right-5 md:right-4 lg:right-3 text-gray-700  sm:p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5 flex space-x-3 sm:space-x-5 ">
                  
                <div
                    className="shadow-2xl"
                    style={{
                      borderRadius: "50%",
                      width: "30px", // Adjust the width to your desired size
                      height: "30px", // Adjust the height to your desired size
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link to="/chat" >
                      <MessageCircle fill="gray"  className="h-5 sm:h-2/5 md:h-1/8 lg:h-1/10 xl:h-1/12" />
                    
                    </Link>
                  </div>

                  <div
                    className="shadow-2xl"
                    style={{
                      borderRadius: "50%",
                      width: "30px", // Adjust the width to your desired size
                      height: "30px", // Adjust the height to your desired size
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                    
                    >
                      <Bell fill="gray"   className="h-5 sm:h-2/5 md:h-1/8 lg:h-1/10 xl:h-1/12"/>
                     
                    </div>
                  </div>

                  <div>
                    <Link to="/profile">
                      <img
                        src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                        className="object-cover h-7 sm:h-9 w-7 sm:w-9 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-0 right-1/2 sm:right-3/4 flex flex-col justify-center items-end h-full text-black">
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Sidebar /> 
    </>
  );
}

export default Header;
