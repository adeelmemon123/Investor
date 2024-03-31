// Component.js
'use client';
import React from 'react';
import { Carousel } from 'flowbite-react';

const Component = ({ images }) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

      <Carousel slide={false} className="#000000">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Carousel Image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default Component;
