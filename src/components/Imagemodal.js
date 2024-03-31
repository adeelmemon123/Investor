import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Imagemodal = ({ closeModal, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const iconStyle = {
    width: '3rem',
    height: '3rem',
    stroke: 'white',
  };

  const modalStyle = {
    zIndex: 1000, // Adjust the value as needed to make it higher than your main content
  };

  const imageStyle = {
    width: '500px', // Set fixed width
    height: '300px', // Set fixed height
    maxHeight: '80vh', // Set max height to 80% of viewport height
    maxWidth: '80vw', // Set max width to 80% of viewport width
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen" style={modalStyle}>
          <div className="rounded-xl flex items-center w-auto p-4">
            <ChevronLeft style={iconStyle} alt="Previous" className="object-cover cursor-pointer mr-40" onClick={handlePrevClick} />
            <div className="relative">
              <img src={currentImage} className="object-cover" style={imageStyle} alt={`Image ${currentImageIndex + 1}`} />
            </div>
            <ChevronRight style={iconStyle} alt="Next" className="object-cover cursor-pointer ml-40" onClick={handleNextClick} />
          </div>
          <X style={iconStyle} alt="Close" className="absolute top-24 right-20 cursor-pointer" onClick={closeModal} />
        </div>
      </div>
    </>
  );
};

export default Imagemodal;
