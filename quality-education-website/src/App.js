import React from "react";
import NavbarComponent from "./components/NavbarComponent.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="background">
      <NavbarComponent />
      <div className="home-top">
        <Home />
      </div>
    </div>
  );
}

export default App;
