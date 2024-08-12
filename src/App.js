import React from 'react';
import EmbeddedHomePage from './Components/homepage';
import Banner from './Components/banner';

function App() {
  return (
    <div className="App">
    <Banner 
        message="Hurry Up Limited Offer Upto 45% for the TakeUForward Plus"
        duration={300}  // Duration in seconds (e.g., 300 seconds = 5 minutes)
        link="https://takeuforward.org/plus"
      />
      <EmbeddedHomePage />
         {/* If you have a navbar, it would be included here */}
        
    </div>
  );
}

export default App;
