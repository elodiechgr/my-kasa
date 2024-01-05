import React from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";
import jsonData from "../annonces.json";

const CardContainer = () => {
  const sixCardsData = jsonData.slice(0, 6);

  return (
    <div className="card-container">
      {sixCardsData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  );
};

export default CardContainer;
