import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

function Subjects() {
  var urlPieces = window.location.href.split("/");
  var titles = ["Primary School", "Secondary School", "Sixth Form/College"];
  return (
    <div className="hero-container">
      <h1 className="title">TEST</h1>
      <h className="title">
        {urlPieces[5].charAt(0).toUpperCase() + urlPieces[5].slice(1)} -{" "}
        {titles[urlPieces[6] - 1]}
      </h>
    </div>
  );
}

export default Subjects;
