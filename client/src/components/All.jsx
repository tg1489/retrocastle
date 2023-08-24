import React, { useState, useEffect } from 'react';
import all from '../utils/all';
import M from 'materialize-css'; // Import Materialize CSS library
import '../All.css';

export default function All() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    // Initialize the Materialize modal
    M.Modal.init(document.querySelectorAll('.modal'));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleClick = (image) => {
    console.log(image);
    setModalVisible(true);
    setSelectedImage(image);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {all.map((image, index) => (
            <a
              key={index}
              href='#'
              className='anchor-image no-red-bar modal-trigger'
              data-target='modal1'
              onClick={() => handleClick(image.href)}
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
      {modalVisible && (
        <div id='modal1' className='modal'>
          <div className='modal-content'>
            <h2>Modal</h2>
            <img src={selectedImage} alt='full-image' />
          </div>
          <div className='modal-footer'>
            <button
              className='modal-close waves-effect waves-green btn-flat'
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
