import HeroSection from "./HeroSection.js";
import React from "react";
import Cards from "./Cards.js";
import DiscussionBoard from "./DiscussionBoard.js";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <DiscussionBoard />
    </>
  );
}

export default Home;
