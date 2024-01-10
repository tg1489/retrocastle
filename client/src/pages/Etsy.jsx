import React from 'react';
import '../css/Etsy.css';
import logo from '../assets/logo-old.png';

export default function Etsy() {
  return (
    <div className='container border-container-etsy'>
      <div className='row'>
        <div className='col'>
          <img src={logo} className='logo-old' />
          <p className='etsy-paragraph'>
            Explore a world of unique and handmade products that makes a perfect
            gift for any occasion. Each item is crafted with passion and
            attention to detail.
          </p>
          <a
            href='https://retrocastlenj.etsy.com'
            className='btn btn-primary no-red-bar'
            target='_blank'
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
