import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieSlider from "./components/MovieSlider";
export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list)
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSlider key={key} title={item.title} items={item.items} />
          
        ))}
      </section>
    </div>
  );
};
