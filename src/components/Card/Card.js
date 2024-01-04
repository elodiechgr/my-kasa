import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <div className="card">
      <Link to={`/fiche/${id}`}>
        <img src={cover} alt={title} className="card-image" />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
