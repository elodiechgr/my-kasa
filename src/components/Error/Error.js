import React from "react";
import "./Error.scss";

function Notfound() {
  return (
    <div className="error-container">
      <h1 class="error-title">404</h1>
      <h2 class="error-oups">Oups! La page que vous demandez n'existe pas.</h2>
      <div>
        <ul class="error-link">
          <li>
            <a href="/">Retourner sur la page d’accueil</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notfound;
