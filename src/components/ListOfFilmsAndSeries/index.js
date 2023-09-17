import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal/index";
import Tmdb from "../Tmdb";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    overview: "",
    poster: "",
    adult: "",
    popularity: "",
    vote_average: "",
    poster_path: "",
    production: "",
    number_seasons: "",
    number_episodes: "",
    origin_country: "",
    firstDate: "",
    genres: [],
  });

  const handleModal = async (item) => {
    const itemId = item.id;
    let mediaT;

    if (item.first_air_date) {
      mediaT = "tv";
    } else if (item.release_date) {
      mediaT = "movie";
    }

    console.log(itemId);
    console.log(mediaT);
    const itemInfo = await Tmdb.getMovieInfo(itemId, mediaT);
    let nameOrTitle;
    let releaseDate;
    let coutry;
    console.log(itemInfo);

    if (itemInfo.name) {
      nameOrTitle = itemInfo.name;
    } else {
      nameOrTitle = itemInfo.title;
    }
    if (itemInfo.first_air_date) {
      releaseDate = itemInfo.first_air_date;
    } else {
      releaseDate = itemInfo.release_date;
    }

    if (itemInfo.origin_country) {
      coutry = itemInfo.origin_country;
    } else {
      coutry = itemInfo.production_countries[0].iso_3166_1;
    }
    console.log(releaseDate);
    setModalInfo({
      title: nameOrTitle,
      overview: itemInfo.overview,
      adult: itemInfo.adult,
      popularity: itemInfo.popularity,
      vote_average: itemInfo.vote_average,
      poster_path: itemInfo.poster_path,
      production: itemInfo.in_production,
      number_seasons: itemInfo.number_of_seasons,
      number_episodes: itemInfo.number_of_episodes,
      origin_country: coutry,
      firstDate: releaseDate,
      genres: itemInfo.genres,
    });
    setModalOpen(true);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);

    let listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  return (
    <div className="movieSlider">
      <h2>{title}</h2>
      <div className="movieSlider--left" onClick={handleLeftArrow}>
        <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
      </div>
      <div className="movieSlider--right" onClick={handleRightArrow}>
        <FontAwesomeIcon icon={faChevronRight} className="arrow" />
      </div>

      <div className="movieSlider--linearea">
        <div
          className="movieSlider--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div
                className="movieSlider--item"
                key={key}
                onClick={() => handleModal(item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_name}
                />
              </div>
            ))}
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalInfo.title}
        overview={modalInfo.overview}
        poster_path={modalInfo.poster_path}
        adult={modalInfo.adult}
        popularity={modalInfo.popularity}
        vote_average={modalInfo.vote_average}
        production={modalInfo.production}
        number_episodes={modalInfo.number_episodes}
        number_of_seasons={modalInfo.number_seasons}
        origin_country={modalInfo.origin_country}
        firstDate={modalInfo.firstDate}
        genres={modalInfo.genres}
      />
    </div>
  );
};
