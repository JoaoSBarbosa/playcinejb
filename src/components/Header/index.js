import React from "react";
import "./index.css";
export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="/logo.png" alt="PlayCineJB"></img>
        </a>
      </div>
      <div className="header--user">
        <a
          href="https://joaosbarbosa.com.br/"
          target="_blank"
          title="Portfólio"
        >
          <img src="./user.png"></img>
        </a>
      </div>
    </header>
  );
};
