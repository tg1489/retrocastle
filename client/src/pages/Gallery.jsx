import React from 'react';
import GalleryImageContainer from '../components/GalleryImageContainer';
import GalleryTitle from '../components/GalleryTitle.jsx';
import '../Gallery.css';

export default function Gallery() {
  return (
    <>
      <br />
      <GalleryTitle />
      <GalleryImageContainer />
    </>
  );
}
