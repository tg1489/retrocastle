import React from 'react';
import all from '../utils/all';

export default function All() {
  return (
    <div className='container'>
      <div className='row'>
        {all.map((image, index) => (
          <img key={index} src={image.src} className='col s3 gallery-image' />
        ))}
      </div>
    </div>
  );
}
