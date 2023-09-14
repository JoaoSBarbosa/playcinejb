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
      let list = await Tmdb.getHomeList(); //Pegando a lista
      setMovieList(list); // adicionando no states
      //Pegando na lista o filme para usar como destaque,desde que slug for originais
      let originals = list.filter((i) => i.slug === "originals");
      //Gerando um numero aleatorio
      let rabdomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      //pegando um filme aleatório baseado ao número gerado
      let chose = originals[0].items.results[rabdomChosen];
      //Pegando mais informação do item específico
      let choseInfo = await Tmdb.getMovieInfo(chose.id, "tv");
      //Enviando essas informações para state
      setFeatureData(choseInfo);
      console.log(choseInfo);
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
