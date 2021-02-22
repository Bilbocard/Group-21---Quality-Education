import React from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import SubjectCards from "./SubjectCards.js";
import Lessons from "./Lessons.js";
import Quiz from "./Quiz.js";
function Subjects() {
  var urlPieces = window.location.href.split("/");
  var titles = ["Primary School", "Secondary School", "Sixth Form/College"];
  return (
    <div className="hero-container">
      <h1 className="title"></h1>
      <h1 className="title">
        {urlPieces[5].charAt(0).toUpperCase() + urlPieces[5].slice(1)} -{" "}
        {titles[urlPieces[6] - 1]}
      </h1>
      <Switch>
        <Route
          path="/subjects/*/*/quizzes"
          render={(props) => (
            <Quiz subject={urlPieces[5]} tier={urlPieces[6]} />
          )}
        />
        <Route
          path="/subjects/*/*/lessons"
          render={(props) => (
            <Lessons subject={urlPieces[5]} tier={urlPieces[6]} />
          )}
        />
        <Route path="/subjects/*/*" component={SubjectCards} />
      </Switch>
    </div>
  );
}

export default Subjects;
