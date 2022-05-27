import React from 'react';
import data from '../memeData.js';

const Meme = () => {
  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */
  function getRandomMeme() {
    const randomMeme =
      data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
    console.log(randomMeme.url);
  }
  return (
    <div className='meme'>
      <div className='input-meme'>
        <input type='text' placeholder='Top Text' />
        <input type='text' placeholder='Bottom Text' />
      </div>
      <button onClick={getRandomMeme}>
        <img src={require('../img/GetMem.png')} alt='image of Meme' />{' '}
      </button>
    </div>
  );
};
export default Meme;
