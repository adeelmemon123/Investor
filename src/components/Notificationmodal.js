import React from 'react';

const Notificationmodal = ({ isOpen, onClose }) => {
  const modalStyle = {
    width: '20vw',
    height: '100vh',
    right: isOpen ? '0' : '-50vw',
  };

  const messages = [
    { text: "New Property has been added to the Invested Properties", image: 'https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg' },
    { text: "New Property has been added to the Invested Properties", image: 'https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg' },
    { text: "New Property has been added to the Invested Properties", image: 'https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg' },
    { text: "New Property has been added to the Invested Properties", image: 'https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg' },
  ];

  return (
    <div className={`fixed top-50 right-0 shadow-2xl bg-white transition-right duration-100 z-[1000] ${isOpen ? 'right-0' : 'right-[-50vw]'}`} style={modalStyle}>
      <div className="p-4 mt-2 flex items-center justify-between">
        <p className="text-black text-[7px] sm:text-sm md:text-md lg:text-lg xl:text-xl">Notification</p>
        <p className="text-[7px] sm:text-sm md:text-[10px] lg:text-[10px] xl:text-sm text-blue-500 cursor-pointer items-center">Mark as all read</p>
      </div>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <div className="mb-4 flex items-center space-x-3 ml-1">
            <img
              src={message.image}
              alt="New Transaction Image"
              className="object-cover h-6 sm:h-10 w-6 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
            />
            <p className="text-black text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px]">
              {message.text}
            </p>
          </div>
          <hr className="w-full mb-4 border-gray-300" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Notificationmodal;
