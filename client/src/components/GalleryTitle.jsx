import React, { useState } from 'react';
import GalleryImageContainer from './GalleryImageContainer';

export default function GalleryTitle() {
  const [currentPage, setCurrentPage] = useState('all');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className='container'>
        <div className='row center-align'>
          <div
            className='col s4'
            onClick={() => {
              handlePageChange('all');
              handleClick(0);
            }}
          >
            <p className='gallery-link'>All</p>
          </div>
          <div
            className='col s4'
            onClick={() => {
              handlePageChange('wall');
              handleClick(1);
            }}
          >
            <p className='gallery-link'>Wall Art</p>
          </div>
          <div
            className='col s4'
            onClick={() => {
              handlePageChange('cubes');
              handleClick(2);
            }}
          >
            <p className='gallery-link'>3D Cubes</p>
          </div>
        </div>
      </div>
      <GalleryImageContainer
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
