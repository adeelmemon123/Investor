// Modal.js
import React from 'react';
import { CheckCircle, MoveLeft } from 'lucide-react';

const Successmodal = ({ closeModal, successText }) => {

  const iconStyle = {
    width: '4rem', // Adjust the width as needed
    height: '4rem', // Adjust the height as needed
    stroke: "white", // Adjust the stroke color as needed
  };

  const iconStyle2 = {
    width: '1rem', // Adjust the width as needed
    height: '1rem', // Adjust the height as needed
  };

  const modalStyle = {
    zIndex: 9999, // Set a high z-index value
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={modalStyle}>
        <div className="bg-white rounded-xl flex flex-col items-center w-96">
          <div className="bg-green-800 w-full p-6 rounded-t-xl">
            <CheckCircle style={iconStyle} alt="Property" className="object-cover mx-auto" />
          </div>
          <div className="text-center text-xl text-black p-6">
            <p>Success!</p>
            <p className="text-lg mt-2"> {successText}</p>
          </div>
          <button className="flex bg-green-800 text-white px-6 py-2 mt-4 rounded-lg mb-6 items-center justify-center" onClick={closeModal}>
            <MoveLeft style={iconStyle2} className="mr-2" />
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Successmodal;
