import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  function pad(num, size) {
    return ("000" + num).slice(size * -1);
  }
  return (
    <>
      <li className="cards-item-video">
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
              <div className="cards-item-text-author">{props.author}</div>
              <div className="cards-item-text-duration">
                {props.duration < 3600
                  ? Math.floor(props.duration / 60) +
                    ":" +
                    pad(props.duration % 60, 2)
                  : Math.floor(props.duration / 3600) +
                    ":" +
                    pad(Math.floor(props.duration / 60) % 60, 2) +
                    ":" +
                    pad(props.duration % 60, 2)}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
