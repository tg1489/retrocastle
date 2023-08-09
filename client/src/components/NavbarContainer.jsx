// Parent of NavBar
import React, { useState } from 'react';
import Navbar from './Navbar';
import About from '../pages/About.jsx';
import Etsy from '../pages/Etsy.jsx';
import Home from '../pages/Home.jsx';
import Gallery from '../pages/Gallery.jsx';
import Requests from '../pages/Requests.jsx';

export default function NavbarContainer() {
  // Initialize state for the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Define a function to render the appropriate page based on the current page state
  const render = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'etsy':
        return <Etsy />;
      case 'requests':
        return <Requests />;
      default:
        return <Home />;
    }
  };

  // Define a function to handle page changes
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        {/* Render the NavBar component and pass the current page and the handlePageChange function as props */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

        {/* Render the page based on the current page state */}
        {render()}
      </header>
    </div>
  );
}
