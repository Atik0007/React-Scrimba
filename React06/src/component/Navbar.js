import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a href='#'>
          <img src={require('../img/logo.png')} alt='logo' />
          Meme Generator
        </a>
      </div>
      <div className='navbar-menu'>
        <a className='navbar-item' href='#'>
          React Course - Project 3
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
