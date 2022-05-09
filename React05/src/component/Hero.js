import React from 'react';

export default function Hero() {
  return (
    <div className='Hero'>
      <div className='img--Hero'>
        <img src={require('../img/HeroImg.png')} alt='image of activities' />
      </div>
      <div className='text--Hero'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
