import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Books from "../images/books.jpeg";
import Classroom from "../images/classroom.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Get started below!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem src={Books} text="Explore the lessons" />
          </ul>
          <ul className="cards-items">
            <CardItem src={Classroom} text="Take some tests" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
