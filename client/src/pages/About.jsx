import React, { useState, useEffect } from 'react';
import '../About.css';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className='container about'>
      <h2 className='about-title mb-1'>About</h2>
      <div className='row flex-direction-column'>
        {/* SNES Controller */}
        <img
          className={isMobile ? 'mobile-about-image' : 'col s6 about-image'}
          src='https://i.imgur.com/tBAdsTS.png'
        />

        <div className='col s6 about-border'>
          <p className='about-text'>
            Welcome to RetroCastleNJ, your portal to a nostalgic journey through
            the golden era of video games. As a one-person operation, I pour my
            heart and creativity into crafting exquisite 3D wall hanging art and
            intricate 3D pop-out cubes inspired by the iconic titles that
            defined old school gaming.
            <br />
            <br />
            As the curator, designer, and craftsman behind RetroCastleNJ, I'm
            excited to share my passion with you and help you bring a piece of
            gaming history into your everyday life. Thank you for being part of
            the journey.
            <br />
            <br />
            Your support fuels my creative endeavors, and I'm thrilled to be a
            part of your gaming-inspired decor.
            <br />
            <br />
            Sincerely, <br />
            Tony Guarino
            <br />
            Founder and Artist, RetroCastleNJ 🏰
          </p>
        </div>
        <div>
          <p className='about-mobile-text'>
            Welcome to RetroCastleNJ, your portal to a nostalgic journey through
            the golden era of video games. As a one-person operation, I pour my
            heart and creativity into crafting exquisite 3D wall hanging art and
            intricate 3D pop-out cubes inspired by the iconic titles that
            defined old school gaming.
            <br />
            <br />
            As the curator, designer, and craftsman behind RetroCastleNJ, I'm
            excited to share my passion with you and help you bring a piece of
            gaming history into your everyday life. Thank you for being part of
            the journey.
            <br />
            <br />
            Your support fuels my creative endeavors, and I'm thrilled to be a
            part of your gaming-inspired decor.
            <br />
            <br />
            Sincerely, <br />
            Tony Guarino
            <br />
            Founder and Artist, RetroCastleNJ 🏰
          </p>
        </div>
      </div>
    </div>
  );
}
