import React, { useEffect, useState } from "react";
import Tmdb from "./components/Tmdb";
import MovieSlider from "./components/ListOfFilmsAndSeries";
import FeaturedMovie from "./components/Featured";
import Header from "./components/Header";
import "./App.css";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeaturedMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieSlider key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
