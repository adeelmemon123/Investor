import React from 'react';
import download from "../images/download.png";


const Transaction = () => {
  const handleSendMessage = () => {
    // Add your logic here to send the message
  };

  return (
    <>
   <div class="mx-auto w-2/3 ml-72">
      <div className="flex justify-end p-5"> {/* Use justify-end to move content to the right */}
        <a href="https://wa.me/1234567890">
          <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-xl">
            <img
              src={download}
              alt="Image"
              className="mr-2 w-6 h-6"
            />
            Download Transaction Report
          </button>
        </a>
      </div>
    </div>
    <div class="space-y-5 ">
    <div class="mx-auto w-2/3 ml-72 shadow-xl">
  <form class="bg-white p-4 shadow-xl rounded-lg">
    <div class="mb-4 flex items-center space-x-3">
      <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" alt="New Transaction Image" class="object-cover h-8 sm:h-10 w-8 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl" />
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">New Transaction</p>
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Has Been Added</p>
      
    </div><div  class="text-left ml-14 ">
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm ">October 17, 2023</p></div>
    <div class="text-right "> 
      <button variant="primary" class="rounded-xl p-2 shadow-xl bg-red-500 text-white h-10 w-1/12 sm:text-xs xs:text-xxs">View</button>
    </div>
  </form>
</div>


<div class="mx-auto w-2/3 ml-72 shadow-xl">
  <form class="bg-white p-4 shadow-xl rounded-lg">
    <div class="mb-4 flex items-center space-x-3">
      <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" alt="New Transaction Image" class="object-cover h-8 sm:h-10 w-8 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl" />
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">New Transaction</p>
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Has Been Added</p>
      
    </div><div  class="text-left ml-14 ">
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm ">October 17, 2023</p></div>
    <div class="text-right "> 
      <button variant="primary" class="rounded-xl p-2 shadow-xl bg-red-500 text-white h-10 w-1/12  sm:text-xs xs:text-xxs ">View</button>
    </div>
  </form>
</div>

<div class="mx-auto w-2/3 ml-72 shadow-xl">
  <form class="bg-white p-4 shadow-xl rounded-lg">
    <div class="mb-4 flex items-center space-x-3">
      <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" alt="New Transaction Image" class="object-cover h-8 sm:h-10 w-8 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl" />
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">New Transaction</p>
      <p class="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg">Has Been Added</p>
      
    </div><div  class="text-left ml-14 ">
      <p class="text-sm md:text-sm sm:text-xxs xs:text-xxxs lg:text-sm xl:text-sm ">October 17, 2023</p></div>
    <div class="text-right "> 
      <button variant="primary" class="rounded-xl p-2 shadow-xl bg-red-500 text-white h-10 w-1/12 sm:text-xs xs:text-xxs">View</button>
    </div>
  </form>
</div>
</div>

    </>
  );
};

export default Transaction;
