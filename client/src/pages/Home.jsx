import React, { useState, useEffect } from 'react';
import '../Home.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Call once on load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='container border-container'>
        <div className='row border-row'>
          <p
            className={`${
              isMobile ? 'col s12 home-intro' : 'col s12 m6 home-intro'
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
              src='https://e1.pxfuel.com/desktop-wallpaper/507/810/desktop-wallpaper-high-def-super-mario-bros-3-phone-by-eddieinthecity-on-763x1146-for-your-mobile-tablet-mario-bros-android.jpg'
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
              src='https://e1.pxfuel.com/desktop-wallpaper/507/810/desktop-wallpaper-high-def-super-mario-bros-3-phone-by-eddieinthecity-on-763x1146-for-your-mobile-tablet-mario-bros-android.jpg'
              className={`${isMobile ? 'mobile-image' : 'home-image'}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
