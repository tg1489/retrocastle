import React from 'react';
import '../Home.css';

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <p className='home-intro'>Hi! Welcome to RetroCastle!</p>
      </div>
      <div className='row'>
        <div className='col s8 home-info'>
          Text on what the website is about
        </div>
        <div className='col'>Image Block</div>
      </div>
      <div className='row'>
        Talk about what products I make the most and how I offer personal custom
        ones. (Link to Gallery too)
      </div>
    </div>
  );
}
