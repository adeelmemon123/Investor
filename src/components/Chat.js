import React from "react";
import logo from "../images/logo.png";
import { FiSearch } from "react-icons/fi"; // Import the search icon from a suitable library
<link rel="stylesheet" type="text/css" href="Chat.css" />

const Chat = () => {
  const chatMessages = [
    {
      name: "Open Capital",
      image: "https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg",
      message: "Hello this is capital one!",
      timestamp: "Now",
    },
    // Add more chat messages as needed
  ];

  return (
    <div className="flex ml-16  sm:ml-52 lg:ml-72 mt-10 " style={{ height: "650px" }}>
      <div className="w-1/3 p-4 bg-white shadow-2xl rounded-3xl">
        <div className="flex items-center">
          <img
            src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
            className="object-cover h-6 lg:h-12 w-6 lg:w-12 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
            alt="Profile Image"
            
          />
          <p className="mr-3 lg:ml-3 text-xxs sm:text-xs xs:text-xxs lg:text-base xl:text-lg  ">Adeel Memon</p>
        </div>
        <div className="mt-4 relative  items-center flex">
          <div className="absolute left-1 sm:left-2 lg:left-3 text-gray-400">
            <FiSearch  className="h-2 w-2 sm:h-5 sm:w-5 lg:h-5 lg:w-5" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border pl-3 sm:pl-8 lg:pl-10 p-2 rounded-full border-2 text-xxs sm:text-base md:text-md  focus:outline-none focus:border-gray-400"
          />
        </div>

        <div className="mt-6">
  {/* Chat List */}
  <div className="overflow-y-auto max-h-96 ">
    {chatMessages.map((message, index) => (
      <div key={index} className="flex items-center mt-4 ">
        <img
          src={message.image}
          className="object-cover h-5 lg:h-10 w-5 lg:w-10 rounded-full mr-4"
          alt={`${message.name}'s Profile`}
        />
        <div className="flex flex-col">
          <div>
            <p className="font-semibold text-left sm:text-xs xs:text-xxs lg:text-base xl:text-lg ">
              {message.name}
            </p>
          </div>
          <div className="flex md:flex-row md:items-center md:justify-between  space-x-1 md:space-x-4">
  <p className="text-gray-500 text-xxs sm:text-xs xs:text-xxs lg:text-base xl:text-lg  whitespace-nowrap overflow-ellipsis">
    {message.message}
  </p>
  <p className="text-gray-500 text-xxs sm:text-xs xs:text-xxs lg:text-base xl:text-lg  xl:text-right">
    {message.timestamp}
  </p>
</div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>

      <div className="w-2/3 p-4 bg-white ml-4 mr-10 shadow-2xl rounded-3xl flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Centered Image"
            style={{ maxWidth: "15%", maxHeight: "15%" }}
          />
          <button className="text-white bg-red-700 hover:bg-red-800 rounded-full py-0.5 lg:py-2 px-3 lg:px-8 border-2 text-xs sm:text-xs xs:text-xxs lg:text-base xl:text-md " >
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
