import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieSlider from "./components/MovieSlider";
import FeaturedMovie from "./components/FeaturedMovie";
import "./App.css";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //Pegando o featured
      let originals = list.filter(i=>i.slug === 'originals')
      let rabdomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chose = originals[0].items.results[rabdomChosen];
      console.log(chose);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featureData && <FeaturedMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSlider key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
