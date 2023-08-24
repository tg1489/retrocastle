import React, { useState, useEffect } from 'react';
import all from '../utils/all';
import '../All.css';

export default function All() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const btn = document.getElementById('myBtn');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = 'block';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

    return () => {};
  });

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
