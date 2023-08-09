import React, { useEffect, useState } from 'react';
import '../Navbar.css';

export default function Navbar({ currentPage, handlePageChange }) {
  // Declare state variable to track the current navbar item that was clicked on
  const [activeItem, setActiveItem] = useState('');

  // Update the activeItem state when the currentPage prop changes
  useEffect(() => {
    setActiveItem(currentPage);
  }, [currentPage]);

  // Handle click on a menu item
  const handleItemClick = (item) => {
    // Set the activeItem state to the clicked item
    setActiveItem(item);

    // Call the handlePageChange prop function to update the current page
    handlePageChange(item);
  };

  useEffect(() => {
    // Initialize the Materialize side navigation (hamburger button)
    const sideNavElem = document.querySelector('.sidenav');
    M.Sidenav.init(sideNavElem);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav>
        <div class='nav-wrapper'>
          <a href='#!' class='brand-logo'>
            Logo
          </a>

          {/* Hamburger button (Mobile menu) */}
          <a href='#' data-target='mobile-nav' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>

          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a
                className={
                  activeItem === 'home'
                    ? 'active no-hover-effect'
                    : 'no-hover-effect'
                }
                onClick={() => handleItemClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className={
                  activeItem === 'about'
                    ? 'active no-hover-effect'
                    : 'no-hover-effect'
                }
                onClick={() => handleItemClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className={
                  activeItem === 'gallery'
                    ? 'active no-hover-effect'
                    : 'no-hover-effect'
                }
                onClick={() => handleItemClick('gallery')}
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <ul className='sidenav' id='mobile-nav'>
        <li>
          <a
            href='#'
            className={activeItem === 'home' ? 'active' : ''}
            onClick={() => handleItemClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#'
            className={activeItem === 'about' ? 'about' : ''}
            onClick={() => handleItemClick('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#'
            className={activeItem === 'gallery' ? 'active' : ''}
            onClick={() => handleItemClick('gallery')}
          >
            Gallery
          </a>
        </li>
      </ul>
    </>
  );
}
