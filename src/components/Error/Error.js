import React from "react";
import "./Error.scss";

function Notfound() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <h2 className="error-oups">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <div>
        <ul className="error-link">
          <ul>
            <a href="/">Retourner sur la page d’accueil</a>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Notfound;
