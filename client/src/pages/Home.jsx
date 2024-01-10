import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import '../css/Home.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect runs when the component is rendered & checks if screen is less than 600px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    /*
      This immediately calls the handleResize function once when the component is initially rendered.
      This ensures that the isMobile state is set correctly based on the initial screen width.
      It calls once on load
    */
    handleResize();

    /*
      This adds an event listener to the window's resize event, which will trigger the handleResize 
      function whenever the window is resized. This ensures that the isMobile state remains 
      up-to-date as the window size changes.
    */
    window.addEventListener('resize', handleResize);

    return () => {
      /*
        removes the resize event listener from the window when the component unmounts or if the 
        dependencies of the useEffect change (in this case, there are no dependencies due to the empty 
          array [], so it's really just about component unmounting).

        The purpose of this is to prevent potential memory leaks. If you don't remove event listeners 
        from elements (in this case, the global window object) when they're no longer needed, 
        they might continue to exist even if the component using them has been destroyed.
      */
      window.removeEventListener('resize', handleResize);
    };
    // [] indicates it should only be run once
  }, []);

  return (
    <>
      <div className='container '>
        <div className='row'>
          <p
            className={`${
              isMobile
                ? 'col s12 home-intro push-logo-mobile'
                : 'col s12 m6 home-intro push-logo'
            }`}
          >
            RetroCastleNJ
          </p>
        </div>

        <div
          className={`${isMobile ? 'mobile-style' : 'row align-vertical-row '}`}
        >
          <div
            className={`${isMobile ? 's12 home-info' : 'col s12 home-info '}`}
          >
            RetroCastleNJ is a hub for intricate 3D wall hanging art and pop-out
            cubes inspired by classic Nintendo games. Each piece is a nostalgic
            homage to gaming history, crafted with meticulous detail to bring
            pixelated worlds to life. Explore our offerings by visiting our Etsy
            store or take a look at our gallery, where we proudly showcase our
            craftsmanship.
          </div>
          {/* Space between text and image 1 */}
          <div className={`${isMobile ? 'mobile-col-image' : 'col s12'}`}>
            <img
              src={img1}
              className={`${isMobile ? 'mobile-image' : 'home-image'}`}
            />
          </div>
        </div>

        {/* Some other banner goes here ? */}

        {/* No space in mobile view */}
        {isMobile ? '' : <br />}

        <div className={`${isMobile ? 'mobile-style' : 'row no-reverse'}`}>
          <div className='col s12 price-info'>
            Discover our stunning collection of handcrafted 3D wall hanging art
            and pop-out cubes inspired by beloved Nintendo classics. With most
            items priced around $30 and occasional sales offering a 10%
            discount, you can elevate your space with nostalgic gaming charm
            without breaking the bank.
          </div>
          {/* Space between text and image 2 */}
          <div className={`${isMobile ? 'mobile-col-image' : 'col s12'}`}>
            <img
              src={img2}
              className={`${isMobile ? 'mobile-image' : 'home-image'}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
