import React, { useState, useEffect } from 'react';
import GalleryImageContainer from './GalleryImageContainer';
import $ from 'jquery';

export default function GalleryTitle() {
  const [currentPage, setCurrentPage] = useState('all');

  const handlePageChange = (page) => setCurrentPage(page);

  const handleClick = (index) => {
    $('.gallery-link').removeClass('no-scale'); // Remove no-scale from all p tags
    $('.gallery-link').eq(index).toggleClass('no-scale'); // Toggle no-scale on the clicked p tag
  };

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
            <p
              className={`gallery-link ${
                currentPage === 'all' ? 'no-scale' : ''
              }`}
            >
              All
            </p>
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
