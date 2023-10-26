// src/ImageSlider.js
import React, { useState, useEffect } from 'react';
import Banner1 from '../assets/img/transportes.png';
import Banner2 from '../assets/img/foto1.png';
import Banner3 from '../assets/img/foto2.png';

const images = [Banner1, Banner2, Banner3];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 7000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Banners"
          style={{ width: '100%' }}
        />
      </div>
    );
  };
  
  export default ImageSlider;