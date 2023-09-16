import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default ({ title, items }) => {
  return (
    <div className="movieSlider">
      <h2>{title}</h2>
      <div className="movieSlider--left">
        <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:50}}/>
      </div>
      <div className="movieSlider--right">
        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:50}}/>
      </div>

      <div className="movieSlider--linearea">
        <div className="movieSlider--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieSlider--item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}
          `}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
