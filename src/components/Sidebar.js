import React, { useState } from "react";
import { Check, Home, CreditCard, MonitorCheck,LayoutDashboard,LogOutIcon } from "lucide-react";
import logo from "../images/logo.png";
import { Link ,useNavigate} from "react-router-dom";


function Sidebar() {
  const [selectedItemLabel, setSelectedItemLabel] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    
    // Navigate to the index page (App.js)
    navigate("/signin"); // You need to specify the correct path to your index page
  };

  const handleItemClick = (itemLabel) => {
    setSelectedItemLabel(itemLabel);
 
  };

  const sidebarItems = [
    { path: "/dashboard", label: "Dashboard", iconComponent: (
      <span className="flex-shrink-0 w-6 h-5 mr-4">
        <LayoutDashboard  />
      </span>
    ), },
    { path: "/realestate", label: "My Real Estate", 
     iconComponent: (
      <span className="flex-shrink-0 w-6 h-5 mr-4">
        <Home />
      </span>
    ),},
    { path: "/realestate", label: "In The Works", 
     iconComponent: (
      <span className="flex-shrink-0 w-6 h-5 mr-4">
        <Check />
      </span>
    ),},
    { path: "/transaction", label: "Transaction Report", 
     iconComponent: (
      <span className="flex-shrink-0 w-6 h-5 mr-4">
        <CreditCard />
      </span>
    ),},
    { path: "/help", label: "Get Help", iconComponent: (
      <span className="flex-shrink-0 w-6 h-5 mr-4">
        <MonitorCheck />
      </span>
    ), },
    { path: "/logout", label: "Logout", iconComponent: (
      <span className="flex-shrink-0 w-6 h-5 mr-4" onClick={handleLogout}>
        <LogOutIcon />
      </span>
    ), },
   
  ];

  const logoStyles = {
    width: "20px",
    height: "20px",
    margin: "2px",
    verticalAlign: "middle",
  };
  return (
    <div className="fixed h-screen w-14 xs:w-10 sm:w-40 md:w-62 lg:w-1/5 xl:w-60 shadow-xl  ">
   
      <div className="px-2 pt-16 ">
      <ul >
          {sidebarItems.map((item) => (
            <li key={item.path} className="hover:bg-gray-200 rounded-lg">
              <Link
                className={`text-sm items-center rounded-lg px-2 py-2.5 flex ${
                  selectedItemLabel === item.label ? "text-black" : "text-gray-400"
                }`} 
                to={item.path}
                onClick={() => handleItemClick(item.label)}
                style={{ marginBottom: "10px" }}
              >
                {item.iconComponent}
                <span className="hidden sm:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

           
             <footer class="fixed bottom-0 left-0 z-20  sm:w-40  lg:w-48 xl:w-56 2xl:w-60 p-4 bg-white border-t border-gray-400  items-center ">
       
        <div className="text-black-500 xl:flex  items-center lg:flex">
        <span className="hidden sm:block sm:text-xs xs:text-xxs md:text-xs ">A Product of</span>
          <img src={logo} alt="Company Logo" style={logoStyles} />
          <span className="hidden sm:block sm:text-xs xs:text-xxs md:text-xs">One Capital Limited</span>
        </div>
        <span className=" text-gray-500 hidden sm:block  text-xs mt-2">© 2023 One Capital All Right reserved</span>
      
</footer>
          </div>
        
     
        
      </div>
      
 
  );
}

export default Sidebar;
