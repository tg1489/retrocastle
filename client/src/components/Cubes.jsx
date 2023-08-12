import React from 'react';
import cubes from '../utils/cubes';

export default function Cubes() {
  return (
    <div className='container'>
      <div className='row'>
        {cubes.map((image, index) => (
          <img key={index} src={image.src} className='col s3 gallery-image' />
        ))}
      </div>
    </div>
  );
}
