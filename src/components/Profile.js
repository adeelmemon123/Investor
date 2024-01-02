import React, { useState } from 'react';
import appart from "../images/appart.png";
import develop from "../images/develop.png";
import modern from "../images/modern.png";
import front from "../images/front.jpg";
import back from "../images/back.jpg";
import user from "../images/user.jpg";
import left from "../images/left.png";
import right from "../images/right.png";
import close from "../images/close.png";



const Profile = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImage, setCurrentImage] = useState(back); // Initialize with the first image

  const openCarousel = (image) => {
    setCurrentImage(image);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  const handlePrev = () => {
    // Implement logic to show the previous image
    if (currentImage === back) {
      setCurrentImage(front); // If at the first image, go to the last
    } else {
      setCurrentImage(back); // Otherwise, go to the first
    }
  };

  const handleNext = () => {
    // Implement logic to show the next image
    if (currentImage === back) {
      setCurrentImage(front); // If at the first image, go to the last
    } else {
      setCurrentImage(back); // Otherwise, go to the first
    }
  };
 
  return (
    <>
    <div className="flex justify-center items-start  mt-10">
      <div className="grid justify-items-center grid-flow-col shadow-xl w-1/2 ml-32 lg:ml-72 rounded-3xl w-full">
        <div className="flex flex-col justify-center items-center ml-2">
          <div>
            <img
              src={user}
              className="object-cover h-8 sm:h-20 w-8 sm:w-20 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
              alt=""
            />
          </div>
          <div className="text-black mt-2 sm:text-sm lg:text-base xl:text-xl">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Adeel Memon</p>
          </div>
          <div className="mb-2 text-blue-700 text-black sm:text-sm lg:text-base xl:text-xl">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg whitespace-nowrap overflow-ellipsis">"Individual Investor"</p>
          </div>
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="text-left ">
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Address:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Karachi</p>
          </div>
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg whitespace-nowrap">Mobile Number:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg whitespace-nowrap overflow-ellipsis">03002630498</p>
          </div>
          <div className="mb-2 flex ">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Office Address:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg">L-12</p>
          </div>
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Email:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Adeel@gmail.com</p>
          </div>
        </div>
        <div className="border-r border-gray-300 "></div>
        <div className="text-left ">
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Document Type:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Passport</p>
          </div>
          <div className="mb-2 flex">
  <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg whitespace-nowrap">Document Number:</p>
  <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg whitespace-nowrap overflow-ellipsis">ABC123456</p>
</div>


          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg"> Issuing Authority:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Pakistan</p>
          </div>
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Expiry Date:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-lg truncate">12-05-2020</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-16 shadow-xl ml-72 rounded-2xl flex-col">
        <form className="bg-white p-4 flex justify-between items-center rounded-2xl">
          <div className="flex items-center">
            <p className="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg text-blue-700">
              Profile Documents
            </p>
          </div>
          <div className="flex items-center">
            <img src={front} alt="Image 1" className="object-cover w-20 sm:w-20" />
            <img src={back} alt="Image 2" className="object-cover w-20 sm:w-20 ml-2" />
          </div>
          <button
          type="button" 
            className="rounded-xl p-2 shadow-xl bg-red-500 text-white h-10 w-1/12 sm:text-xs xs:text-xxs"
            onClick={() => openCarousel(front)}
          >
            View
          </button>
        </form>
      </div>
      {showCarousel && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
   
     
      <div className="carousel relative flex items-center">
      <img
        src={close}
        alt="Close"
        style={{ width: '32px', height: '32px' }}  // Adjust the size as needed
        className="absolute top-0 right-0 cursor-pointer"
        onClick={closeCarousel}
      />
        <img src={currentImage} alt="Image 2" className="object-cover rounded-lg shadow-xl w-1/2 mx-auto" />
        <img
          src={left}
          alt="Left"
          style={{ width: '32px', height: '32px' }}  // Adjust the size as needed
          className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer"
          onClick={handlePrev}
        />
        <img
          src={right}
          alt="Right"
          style={{ width: '32px', height: '32px' }}  // Adjust the size as needed
          className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>

)}

   
    <div className="flex flex-col mt-16 " >
  <div className="p-2 text-left ml-72 text-2xl font-semibold"> My Investment</div>
<div class="flex ml-72 p-2 max-h-full space-x-4 h-56">
  <form class="bg-white p-4 shadow-2xl rounded-lg  w-1/2 ">
    <div class="mb-4 flex items-center space-x-3">
      <img src={modern} alt="New Transaction Image" 
    class="object-cover h-8 sm:h-16  w-8 sm:w-16  rounded-lg shadow-xl" />
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Square One Appartments</p>
     
    </div><div  class="text-left ml-14 flex  space-x-3">
    <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm">Ownership Percentage:</p>
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm text-gray-400">14%</p>
      </div>
      <div class="text-center mt-5">
    <button class="bg-red-600 hover:bg-red-700 text-white  py-2 px-4 rounded-lg">
      View Statement
    </button>
  </div>
  </form>
  <form class="bg-white p-4 shadow-xl rounded-lg w-1/2 ">
    <div class="mb-4 flex items-center space-x-3">
      <img src={develop} alt="New Transaction Image" 
      class="object-cover h-8 sm:h-16  w-8 sm:w-16  rounded-lg shadow-xl" />
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">OutFiters Outlet(Square One Mall)</p>
     
    </div><div  class="text-left ml-14 flex  space-x-3">
    <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm">Ownership Percentage:</p>
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm text-gray-400">14%</p>
      </div>
      <div class="text-center mt-5">
    <button class="bg-red-600 hover:bg-red-700 text-white  py-2 px-4 rounded-lg">
      View Statement
    </button>
  </div>
  </form>
 
  </div>
</div>

<div class="flex ml-72 p-2 max-h-full space-x-4 h-56">
  <form class="bg-white p-4 shadow-2xl rounded-lg w-1/2 ">
    <div class="mb-4 flex items-center space-x-3 ">
      <img src={appart} alt="New Transaction Image" class="object-cover h-8 sm:h-16  w-8 sm:w-16  rounded-lg shadow-xl" />
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg ">Lucky One Appartments</p>
    </div>
    <div class="text-left ml-14 flex space-x-3">
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm">Ownership Percentage:</p>
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm text-gray-400">14%</p>
    </div>
    <div class="text-center mt-5">
    <button class="bg-red-600 hover:bg-red-700 text-white  py-2 px-4 rounded-lg">
      View Statement
    </button>
  </div>
  </form>
  
</div>


    </>
  );
};

export default Profile;
