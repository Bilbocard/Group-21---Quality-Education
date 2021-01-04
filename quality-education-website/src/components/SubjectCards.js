import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Notebook from "../images/notebook.png";
import { Route, NavLink, HashRouter } from "react-router-dom";

function SubjectCards(props) {
  return (
    <div className="cards">
      <h1>Choose an option!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <NavLink
            className="cards-items"
            to={window.location.href.split("/")[6] + "/lessons"}
          >
            <CardItem src={Notebook} text="Lessons" />
          </NavLink>
          <ul className="cards-items">
            <CardItem src={Notebook} text="Tests" />
          </ul>
          <ul className="cards-items">
            <CardItem src={Notebook} text="Quizzes" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubjectCards;
