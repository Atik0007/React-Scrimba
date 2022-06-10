import React from 'react';
import data from '../memeData.js';

const Meme = () => {
    function getRandomMeme() {
        const randomMeme =
            data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
        console.log(randomMeme.url);
    }
    return (
        <div className="meme">
            <div className="input-meme">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button onClick={getRandomMeme}>
                <img src={require('../img/GetMem.png')} alt="image of Meme" />{' '}
            </button>
        </div>
    );
};
export default Meme;
