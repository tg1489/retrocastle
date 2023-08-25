import React, { useState, useEffect } from 'react';
import cubes from '../utils/cubes';
import M from 'materialize-css';
import '../All.css';

export default function Cubes() {
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
    setModalVisible(true);
    setSelectedImage(image);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {cubes.map((image, index) => (
            <a
              key={index}
              href='#'
              className='anchor-image no-red-bar modal-trigger'
              data-target='modal1'
              onClick={() => handleClick(image.src)}
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
      <p className='back-to-top'>
        <a href='#top'>Back to Top</a>
      </p>
      {/* Modal */}
      {modalVisible && (
        <div id='modal1' className='modal'>
          <div className='modal-content clickable'>
            <img
              src={selectedImage}
              alt='full-image'
              className='modal-image-resize'
            />
          </div>
        </div>
      )}
    </div>
  );
}
