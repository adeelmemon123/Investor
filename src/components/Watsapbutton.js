import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [showTopButton, setShowTopButton] = useState(true);
  const [showBottomButton, setShowBottomButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bottomThreshold = 100; // Adjust this threshold as needed
      const scrollTop = window.scrollY;

      setShowTopButton(scrollTop <= windowHeight / 2);
      setShowBottomButton(scrollTop <= windowHeight - bottomThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    // Replace 'your-phonenumber' with the phone number you want to open WhatsApp chat with
    window.open('https://api.whatsapp.com/send?phone=your-phonenumber', '_blank');
  };

  return (
    <div>
      <p>text</p>
      {showTopButton && (
        <button
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '9999'
          }}
          onClick={openWhatsApp}
        >
          WhatsApp
        </button>
      )}

      {showBottomButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999'
          }}
          onClick={openWhatsApp}
        >
          WhatsApp
        </button>
      )}
    </div>
  );
};

export default WhatsAppButton;
