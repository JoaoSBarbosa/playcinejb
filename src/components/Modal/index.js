import React from "react";
import "./index.css";
import Bandeiras from "../Flags";
import { StyledLink } from "../Buttons/button";

const Modal = ({
  isOpen,
  onClose,
  title,
  overview,
  poster_path,
  adult,
  popularity,
  vote_average,
  number_episodes,
  number_of_seasons,
  origin_country,
  firstDate,
  genres,
}) => {
  if (!isOpen) return null;
  let firstAirDate = new Date(firstDate);
  let genresList = [];

  for (let i in genres) {
    genresList.push(genres[i].name);
  }

  console.log(origin_country);
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close" onClick={onClose}>
          x
        </div>
        <div className="modal--infos">
          <div
            className="modal-imagem"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
            }}
          ></div>

          <div className="modal-details">
            <div>
              <h2>{title}</h2>{" "}
              <span>
                {origin_country}
                <Bandeiras flags={origin_country} style={{ heigh: "10px" }} />
              </span>
            </div>
            <div className="modal-details-infos">
              <span style={{ color: "#FF0000" }}>{!adult ? "+18" : ""}</span>
              <span>{firstAirDate.getFullYear()}</span>
              <span>Popularidade: {popularity} </span>
              <span style={{ color: "#46d369" }}>
                Pontos: {vote_average} IMDB
              </span>
              {number_of_seasons && (
                <span>
                  {number_of_seasons
                    ? number_of_seasons > 1
                      ? `${number_of_seasons} temporadas`
                      : `${number_of_seasons} temporada`
                    : ""}
                </span>
              )}
              {number_episodes && (
                <span>
                  {number_episodes
                    ? number_episodes > 1
                      ? `${number_episodes} episodios`
                      : `${number_episodes} episodio`
                    : ""}
                </span>
              )}
              {genresList.length > 0 && (
                <span>Gênero: {genresList.join(", ")}</span>
              )}
            </div>
            <p className="modal--overview">
              {overview
                ? overview
                : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"}
            </p>
            <div className="featured--buttons">
              <StyledLink bgColor="#fff" textColor="#000" href="./">
                ▶️ Assistir
              </StyledLink>
              <StyledLink bgColor="#333" textColor="#fff" href="./">
                + Minha Lista
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
