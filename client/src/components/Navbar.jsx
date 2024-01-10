import React, { useEffect, useState } from 'react';
import '../css/Navbar.css';

export default function Navbar({ currentPage, handlePageChange }) {
  // Declare state variable to track the current navbar item that was clicked on (home is default)
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

  const closeSidenav = () => {
    const sidenavInstance = M.Sidenav.getInstance(
      document.querySelector('.sidenav')
    );
    if (sidenavInstance) {
      sidenavInstance.close();
    }
  };

  useEffect(() => {
    // Initialize the Materialize side navigation (hamburger button)
    const sideNavElem = document.querySelector('.sidenav');
    M.Sidenav.init(sideNavElem);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className='top'>
        <div className='nav-wrapper'>
          <img
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b6ce5ff-f14d-4e64-b03a-556fd184594a/dg56yiu-b3ae2b7d-d2d3-4adc-ac4d-c9a9b24ce474.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiNmNlNWZmLWYxNGQtNGU2NC1iMDNhLTU1NmZkMTg0NTk0YVwvZGc1NnlpdS1iM2FlMmI3ZC1kMmQzLTRhZGMtYWM0ZC1jOWE5YjI0Y2U0NzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aeAvt3016KOSvZext9J18PrQjZ-zwJiME40QDJW0qBI'
            className='brand-logo'
            onClick={() => handleItemClick('home')}
          />

          {/* Hamburger button (Mobile menu) */}
          <a
            href='#'
            data-target='mobile-nav'
            className='sidenav-trigger no-red-bar'
          >
            <i className='material-icons'>menu</i>
          </a>

          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a
                className={
                  activeItem === 'home'
                    ? 'active no-hover-effect red-bar'
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
                    ? 'active no-hover-effect red-bar'
                    : 'no-hover-effect red-bar'
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
                    ? 'active no-hover-effect red-bar'
                    : 'no-hover-effect'
                }
                onClick={() => handleItemClick('gallery')}
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href='#'
                className={
                  activeItem === 'etsy'
                    ? 'active no-hover-effect red-bar'
                    : 'no-hover-effect'
                }
                onClick={() => handleItemClick('etsy')}
              >
                Etsy
              </a>
            </li>

            <li>
              <a
                href='#'
                className={
                  activeItem === 'requests'
                    ? 'active no-hover-effect red-bar'
                    : 'no-hover-effect'
                }
                onClick={() => handleItemClick('requests')}
              >
                Requests
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
            className={
              activeItem === 'home' ? 'active no-red-bar' : 'no-red-bar'
            }
            onClick={() => {
              handleItemClick('home');
              closeSidenav();
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#'
            className={
              activeItem === 'about' ? 'active about no-red-bar' : 'no-red-bar'
            }
            onClick={() => {
              handleItemClick('about');
              closeSidenav();
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#'
            className={
              activeItem === 'gallery' ? 'active no-red-bar' : 'no-red-bar'
            }
            onClick={() => {
              handleItemClick('gallery');
              closeSidenav();
            }}
          >
            Gallery
          </a>
        </li>

        <li>
          <a
            href='#'
            className={
              activeItem === 'etsy' ? 'active no-red-bar' : 'no-red-bar'
            }
            onClick={() => {
              handleItemClick('etsy');
              closeSidenav();
            }}
          >
            Etsy
          </a>
        </li>

        <li>
          <a
            href='#'
            className={
              activeItem === 'requests' ? 'active no-red-bar' : 'no-red-bar'
            }
            onClick={() => {
              handleItemClick('requests');
              closeSidenav();
            }}
          >
            Requests
          </a>
        </li>
      </ul>
    </>
  );
}
