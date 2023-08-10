import React from 'react';
import '../About.css';

export default function About() {
  return (
    <div className='about'>
      <h2 className='about-title mb-1'>About</h2>
      <div className='container'>
        <div className='row'>
          <img
            className='col s6 about-image'
            src='https://cdn.wallpapersafari.com/59/41/QrqV9t.jpg'
          />

          <div className='col s6 about-border'>
            <p className='about-text'>
              Welcome to Retro Castle, your portal to a nostalgic journey
              through the golden era of video games. As a one-person operation,
              I pour my heart and creativity into crafting exquisite 3D wall
              hanging art and intricate 3D pop-out cubes inspired by the iconic
              titles that defined old school gaming.
              <br />
              <br />
              As the curator, designer, and craftsman behind Retro Castle, I'm
              excited to share my passion with you and help you bring a piece of
              gaming history into your everyday life. Thank you for being part
              of the Retro Castle journey.
              <br />
              <br />
              Your support fuels my creative endeavors, and I'm thrilled to be a
              part of your gaming-inspired decor.
              <br />
              <br />
              Sincerely, <br />
              Tony Guarino
              <br />
              Founder and Artist, Retro Castle 🏰
            </p>
          </div>
          <div>
            <p className='about-mobile-text'>
              Welcome to Retro Castle, your portal to a nostalgic journey
              through the golden era of video games. As a one-person operation,
              I pour my heart and creativity into crafting exquisite 3D wall
              hanging art and intricate 3D pop-out cubes inspired by the iconic
              titles that defined old school gaming.
              <br />
              <br />
              As the curator, designer, and craftsman behind Retro Castle, I'm
              excited to share my passion with you and help you bring a piece of
              gaming history into your everyday life. Thank you for being part
              of the Retro Castle journey.
              <br />
              <br />
              Your support fuels my creative endeavors, and I'm thrilled to be a
              part of your gaming-inspired decor.
              <br />
              <br />
              Sincerely, <br />
              Tony Guarino
              <br />
              Founder and Artist, Retro Castle 🏰
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
