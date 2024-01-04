import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < pictures.length - 1 ? prevSlide + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : pictures.length - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <div key={index} className="slide">
            <img src={picture} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slide-number">
        {currentSlide + 1}/{pictures.length}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
