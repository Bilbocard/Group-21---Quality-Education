import React from "react";
import { Link } from "react-router-dom";
import "./CardItemQuiz.css";

function CardItemQuiz(props) {
  return (
    <>
      <li className="cards-item-quiz">
        <div className="cards-item-link-quiz" to={props.path}>
          <div className="cards-item-info-quiz">
            <div className="cards-item-text-title-quiz">{props.title}</div>
            <div className="cards-item-text-title-quiz">
              Total Questions: {props.questions}
            </div>

            <div className="cards-item-info-row-quiz"></div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItemQuiz;
