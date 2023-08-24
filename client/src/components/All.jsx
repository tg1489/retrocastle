import React, { useState, useEffect } from 'react';
import all from '../utils/all';
import '../All.css';

export default function All() {
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
          {all.map((image, index) => (
            <a
              key={index}
              href={image.href}
              className='anchor-image no-red-bar'
            >
              <img
                key={index}
                src={image.src}
                className={isMobile ? 'mobile-all' : 'col s3 gallery-image'}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
