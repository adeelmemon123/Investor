import React from 'react';
import { Mail} from 'lucide-react';
import whatsapp from "../images/whatsapp.png";
import call from "../images/call.png";

const Help = () => {
  const handleSendMessage = () => {
    // Add your logic here to send the message
  };

  return (
    <div className="flex flex-col ml-16  sm:ml-52 lg:ml-72 p-2 space-x-3.5  ">
      <div className="text-2xl text-left p-4">Contact Us</div>

      <div className="flex space-x-2 lg:space-x-4 p-4  ">
      <div className="text-center">
      <a href="mailto:your@email.com">
            <button
              className="flex btn-contact bg-red-500 hover:bg-red-600 text-white  py-2 px-4 rounded-xl" 
            
            >
              <Mail size={24} fill="white" color="black"  className="mr-2 w-3 h-3 lg:w-6 lg:h-6" />
              <p className="mr-3 lg:ml-3 text-xs sm:text-base md:text-lg lg:text-xl ">Adeel@gmail.com</p>
            </button></a>
          </div>
          
          <div className="text-center">
          <a href="tel:+1234567890">
        <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-xl ">
        <img
        src={call} // Replace with your image source
        alt="Image"
        className="mr-2 w-6 h-6" // Adjust the width and height as needed
      />
              +923002630498
            </button></a>
          </div>


          <div className="text-center">
          <a href="https://wa.me/1234567890">
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-xl ">
        <img
        src={whatsapp} // Replace with your image source
        alt="Image"
        className="mr-2 w-6 h-6" // Adjust the width and height as needed
      />
              Watsapp
            </button></a>
          </div>



       
      </div>
      <div className="text-lg text-left p-4">Reach Out and We'll Get In louch With In 24 Hours</div>
      <div className="mx-auto w-3/4  ml-72 shadow-xl">
        <form className="bg-white p-4 shadow-xl rounded-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded" 
              style={{ borderColor: 'gray', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = '#0096FF'}
              onBlur={(e) => e.target.style.borderColor = '#D3D3D3'}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded"
              style={{ borderColor: 'gray', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = '#0096FF'}
              onBlur={(e) => e.target.style.borderColor = '#D3D3D3'}
            />
          </div>
          <div className="text-center">
            <button
              className="btn-contact bg-red-500 hover:bg-red-600 text-white  py-2 px-4 rounded-xl"
              onClick={handleSendMessage}
            >
              Send Us Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Help;
