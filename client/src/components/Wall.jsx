import React, { useEffect, useState } from 'react';
import wall from '../utils/wall';
import '../All.css';

export default function Wall() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {wall.map((image, index) => (
            <img key={index} src={image.src} className='col s3 gallery-image' />
          ))}
        </div>
      </div>
    </div>
  );
}
