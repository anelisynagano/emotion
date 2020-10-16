/** @jsx jsx */
import React from "react";
// import here jsx and css from @emotion/core library
// import here styled from @emotion/styled library


// create a variable list and apply the properties: display: flex; list-style-type: none;
// create a variable title and apply the properties: color: #39424e;

function App() {

  return (
    // add the attribute imported from the library to the html tags
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Emotion!</h1>
      <p>This is an example of Emotion</p>
    </div>
  );
}

// don't forget to wrap your component with the imported injectSheet!
export default App;
