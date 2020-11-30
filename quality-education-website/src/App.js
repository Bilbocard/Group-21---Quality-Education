import React, { useState } from "react";

import NavbarComponent from "./components/NavbarComponent.js";

import classroom from "./images/classroom.jpg";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="background">
        <img src={classroom} className="stretchy" />
      </div>
    </div>
  );
}

export default App;
