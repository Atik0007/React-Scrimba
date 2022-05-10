import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <img
            className='navbar-logo'
            src={require('../img/Logo.png')}
            alt='logo'
          />{' '}
          <h3> my travel journal</h3>
        </a>
      </div>
    </nav>
  );
}
