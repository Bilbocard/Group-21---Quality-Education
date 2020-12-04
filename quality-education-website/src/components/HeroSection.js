import { findAllByTitle } from "@testing-library/react";
import React from "react";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="title">EDUQUALITY</h1>
      <p className="content">Providing free education for all</p>
    </div>
  );
}

export default HeroSection;
