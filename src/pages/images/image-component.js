import React, { useState } from "react";
import "./image.css";
import { imageCards } from "../../utils/data";

export const ResponsiveImageGrid = () => {
  return (
    <div className="responsive-grid">
      {imageCards.slice(3).map((src, index) => (
        <div key={index} className="grid-item">
          <img src={src.imageUrl} alt={imageCards.description} />
        </div>
      ))}
    </div>
  );
};

export const RoundedImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageCards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left" onClick={prevSlide}>
        ⟨
      </button>

      <img
        src={imageCards[currentIndex].imageUrl}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      <button className="nav-btn right" onClick={nextSlide}>
        ⟩
      </button>
    </div>
  );
};

export const ImageCardWithOverlay = () => {
  return (
    <div className="overlay-card-container">
      {imageCards.slice(0, 3).map((card) => (
        <div key={card.id} className="overlay-card">
          <img src={card.imageUrl} alt={card.title} className="overlay-image" />
          <div className="overlay-text">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const BackgroundImageCard = () => {
  return (
    <div className="background-card-container">
      {imageCards.slice(3).map((card) => (
        <div
          key={card.id}
          className="background-card"
          style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>{card.buttonLabel}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ImageGrid = () => {
  return (
    <div className="image-grid-container">
      {imageCards.map((src, index) => (
        <div key={index} className="image-card">
          <img src={src.imageUrl} alt={imageCards.description} />
          <div className="overlay">
            <p>Image {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
