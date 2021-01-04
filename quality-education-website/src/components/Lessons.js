import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import db from "./firebase.js";
import { setState, useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";
import CardItem from "./CardItemVideo";
import Books from "../images/books.jpeg";
import "./Cards.css";

function Lessons(props) {
  const [thisState, setThis] = useState([]);
  let url =
    "http://localhost:8000/api/videos/" + props.subject + "/" + props.tier;
  useEffect(() => {
    let Matches = [];
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setThis(JSON.parse(JSON.stringify(json)).data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);

  return (
    <div>
      <div className="cards">
        <h1 className="title">Lessons here</h1>

        <div className="cards-container">
          <div className="cards-wrapper">
            {thisState.map((number) => (
              <NavLink
                className="cards-items"
                to={"/watch/" + number.VideoLink.split("/")[3]}
              >
                <CardItem
                  src={Books}
                  title={number.Title}
                  subject={number.Subject}
                  tier={number.Tier}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
