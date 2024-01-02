import React, { useState } from 'react';

const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-900 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-gray-100"
        id="options-menu"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        When device is locked: {options[selectedIndex]}
      </button>
      {isOpen && (
        <div className="z-10 absolute right-0 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleMenuItemClick(index)}
                type="button"
                className={`${
                  index === selectedIndex ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                } block w-full text-left px-4 py-2 text-sm focus:outline-none hover:bg-indigo-100`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
