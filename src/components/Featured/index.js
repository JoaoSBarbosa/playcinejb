import React from "react";
import "./index.css";
import { StyledLink } from "../Buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let description = item.overview;

  if(description.length > 200){
    description = description.substring(0,200)+"...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured--adults">{!item.adult ? "+18" : ""}</div>
            <div className="featured--description">
              {item.overview === ""
                ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                : description}
            </div>
            <div className="featured--buttons">
              <StyledLink
                bgColor="#fff"
                textColor="#000"
                href={`/watch/${item.id}`}
              >
                <FontAwesomeIcon icon={faPlay} className="featured--icon"/>
                Assistir
              </StyledLink>
              <StyledLink
                bgColor="#333"
                textColor="#fff"
                href={`/list/add/${item.id}`}
              >
                + Minha Lista
              </StyledLink>
            </div>
            <div className="featured--genres">Gêneros: {genres.join(", ")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
