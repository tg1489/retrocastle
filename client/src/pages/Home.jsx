import React from 'react';
import '../Home.css';

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <p className='col s12 m6 home-intro'>RetroCastleNJ</p>
        </div>

        <div className='row align-vertical-row'>
          <div className='col s12 home-info'>
            RetroCastleNJ is a hub for intricate 3D wall hanging art and pop-out
            cubes inspired by classic Nintendo games. Each piece is a nostalgic
            homage to gaming history, crafted with meticulous detail to bring
            pixelated worlds to life. Explore our offerings by visiting our Etsy
            store or take a look at our gallery, where we proudly showcase our
            craftsmanship.
          </div>
          <div className='col s12'>
            <img
              src='https://e1.pxfuel.com/desktop-wallpaper/507/810/desktop-wallpaper-high-def-super-mario-bros-3-phone-by-eddieinthecity-on-763x1146-for-your-mobile-tablet-mario-bros-android.jpg'
              className='home-image'
            />
          </div>
        </div>

        <div className='row no-reverse'>
          <div className='col s8 price-info'>
            Discover our stunning collection of handcrafted 3D wall hanging art
            and pop-out cubes inspired by beloved Nintendo classics. With most
            items priced around $30 and occasional sales offering a 10%
            discount, you can elevate your space with nostalgic gaming charm
            without breaking the bank.
          </div>
          <div className='col s12 m6 l4'>
            <img
              src='https://e1.pxfuel.com/desktop-wallpaper/507/810/desktop-wallpaper-high-def-super-mario-bros-3-phone-by-eddieinthecity-on-763x1146-for-your-mobile-tablet-mario-bros-android.jpg'
              className='home-image'
            />
          </div>
        </div>
      </div>
    </>
  );
}
