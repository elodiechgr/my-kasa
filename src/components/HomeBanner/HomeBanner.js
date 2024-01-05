import React from "react";
import "./HomeBanner.scss";

function Banner() {
  return (
    <div className="image-container">
      <div className="background-image">
        <h1 className="desktop-title">Chez vous, partout et ailleurs</h1>
        <h1 className="mobile-title">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
    </div>
  );
}

export default Banner;
