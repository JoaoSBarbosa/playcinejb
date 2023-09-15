import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import "./index.css";
export default () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer--contato">
          <p>
            <FontAwesomeIcon icon={faMapMarker} /> Itaquaquecetuba
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Telefone: (11) 994**74**
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:contato.jsbarbosa@gmail.com">
              contato.jsbarbosa@gmail.com
            </a>
          </p>
        </div>

        <div className="footer--about-icons">
          <a href="https://github.com/JoaoSBarbosa" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href="https://www.joaosbarbosa.com.br" target="_blank">
            <FontAwesomeIcon icon={faDiagramProject} />
          </a>

          <a href="https://www.linkedin.com/in/devjbarbosa/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </div>
      </div>
      <div className="footer-credits">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://github.com/JoaoSBarbosa/playcinejb"
            target="_blank"
            className="footer--link"
            id="dev"
          >
            João Barbosa
          </a>
        </p>
        <p>
          Créditos de layout inspirados na{" "}
          <a
            href="https://www.netflix.com/br/"
            target="_blank"
            className="footer--link"
            id="netflix"
          >
            Netflix
          </a>
        </p>
        <p>
          Utilização de dados provenientes do site{" "}
          <a
            href="https://www.themoviedb.org/?language=pt-BR"
            target="_blank"
            className="footer--link"
            id="tmdb"
          >
            TMDB
          </a>
        </p>
        <p>
          Créditos pela ideia do projeto e aulas{" "}
          <a
            href="https://alunos.b7web.com.br/"
            target="_blank"
            className="footer--link"
            id="b7web"
          >
            Bonieky Lacerda
          </a>
        </p>
      </div>
    </footer>
  );
};
