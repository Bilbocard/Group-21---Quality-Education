import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { setState, useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";
import CardItem from "./CardItemVideo";
import "./Cards.css";

function Lessons(props) {
  const [thisState, setThis] = useState([]);
  const [output, setOutput] = useState();
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
      <h1 className="title">Lessons</h1>
      <div className="cards">
        <div className="cards-container">
          <div className="cards-wrapper">
            {thisState.map((number) => (
              <NavLink
                key={number.VideoID}
                className="cards-items-video"
                to={"/watch/" + number.VideoLink.split("=")[1]}
              >
                <CardItem
                  key={number.VideoID}
                  src={number.Thumbnail}
                  title={number.Title}
                  subject={number.Subject}
                  tier={number.Tier}
                  duration={number.Duration}
                  author={number.Author}
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
