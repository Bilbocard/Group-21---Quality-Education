import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { setState, useState, useEffect } from "react";
import "./Quiz.css";
import CardItemQuiz from "./CardItemQuiz.js";
import "./CardItemQuiz.css";

function Quiz(props) {
  const [thisState, setThis] = useState([]);
  let url =
    "http://localhost:8000/api/quizzes/get/" + props.subject + "/" + props.tier;
  useEffect(() => {
    let Matches = [];
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setThis(JSON.parse(JSON.stringify(json))[0].data);
        console.log(thisState);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Quizzes</h1>
      <div className="cards">
        <div className="cards-container">
          <div className="cards-wrapper">
            {thisState.map((number) => (
              <NavLink
                key={number.QuizID}
                className="cards-items-quiz"
                to={"/quiz/" + number.QuizID}
              >
                <CardItemQuiz
                  subject={number.Subject}
                  title={number.QuizName}
                  questions={number.Marks}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
