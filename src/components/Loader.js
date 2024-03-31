import React from 'react';
import { DNA } from 'react-loader-spinner';

const FullScreenLoader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
      zIndex: 9999,
    }}>
      <DNA
         visible={true}
         height="80"
         width="80"
         ariaLabel="dna-loading"
         wrapperStyle={{
            color: 'green' // Change the color here
          }}
         wrapperClass="dna-wrapper"
        // You can adjust other props as needed
      />
    </div>
  );
};

export default FullScreenLoader;
