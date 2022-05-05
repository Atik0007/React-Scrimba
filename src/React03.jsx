import React from "react";
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

function Header() {
  return (
    <header>
      <nav className='nav'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          alt='React logo'
          className="logo"
        ></img>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainPage() {
  return (
    <div className="mainSection">
      <h1>reasons why im excited to learn React</h1>
      <ol>
        <li>PERFORMANCE</li>
        <li>SPEED & USER EXPERIENCE</li>
        <li>BACKWARD COMPATIBILITY</li>
        <li>DEVELOPMENT SPEED</li>
        <li>EFFECTIVE TESTING</li>
      </ol>
    </div>
  );
}

function Footer() {
  return <footer>© 2022 Atik development. All rights reserved.</footer>;
}

export default function Page() {
  return (
    <div className="body">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

