import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <div className="cards-item-link" to={props.path}>
          <figure
            className="cards-item-pic-wrap-video"
            data-category={props.label}
          >
            <img
              className="cards-item-img-video"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards-item-info">
            <div className="cards-item-text-title">{props.title}</div>
            <div className="cards-item-info-row">
              <div className="cards-item-text-author">Mrs Teacher</div>
              <div className="cards-item-text-duration">7:43</div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
