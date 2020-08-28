import React from "react";
import NavBar from './layouts/NavBar';
import Top from './layouts/Top';
import Services from './layouts/Services';


function Landing() {
    return (
      <div>
        <div className="bg-color">
          <NavBar/>
          <Top/>
        </div>
        <Services/>
      </div>
    );
  }
  
  export default Landing;
  