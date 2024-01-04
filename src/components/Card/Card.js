import React from "react";
import "./Card.scss";

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
