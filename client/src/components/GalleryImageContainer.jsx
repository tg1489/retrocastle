import React, { useState } from 'react';
import Wall from './Wall.jsx';
import All from './All.jsx';
import Cubes from './Cubes.jsx';

export default function GalleryImageContainer({
  currentPage,
  handlePageChange,
}) {
  const [activeItem, setActiveItem] = useState('');
  let content;

  if (currentPage === 'all') {
    content = <All />;
  } else if (currentPage === 'wall') {
    content = <Wall />;
  } else if (currentPage === 'cubes') {
    content = <Cubes />;
  } else {
    content = <All />;
  }

  return <>{content}</>;
}
