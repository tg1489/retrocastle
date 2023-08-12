import React from 'react';
import images from '../utils/images';

export default function GalleryImageContainer() {
  return (
    <div className='container'>
      <div className='row'>
        {images.map((image, index) => (
          <img key={index} src={image.src} className='col s3 gallery-image' />
        ))}
      </div>
    </div>
  );
}
