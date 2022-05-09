import React from "react";
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() {
  return (
    <header>
      <nav>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          width='40'
          alt='React logo'
        ></img>
      </nav>
    </header>
  );
}

function MainPage() {
  return (
    <div>
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

function Page() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default Page;

/* 
Quiz!

1. What is a React component?
answer:
    Components are independent and reusable bits of code

2. What's wrong with this code?

function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
answer:
    function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}

3. What's wrong with this code?

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
answer:
    ReactDOM.render(<Header/ >, document.getElementById("root"))
    
*/
