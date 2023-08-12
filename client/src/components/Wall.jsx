import React from 'react';
import wall from '../utils/wall';

export default function Wall() {
  return (
    <div className='container'>
      <div className='row'>
        {wall.map((image, index) => (
          <img key={index} src={image.src} className='col s3 gallery-image' />
        ))}
      </div>
    </div>
  );
}
