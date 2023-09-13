import React from "react";
import "./MovieSlider.css";

export default ({ title, items }) => {
  console.log("Resultttttt");
  console.log(items.results[2].poster_path);
  console.log(items.results[2]);
  return (
    <div>
      <h2>{title}</h2>

      <div className="movieSlider--linearea">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}
          `}
              alt={item.original_title}
            />
          ))}
        ;
      </div>
    </div>
  );
};
