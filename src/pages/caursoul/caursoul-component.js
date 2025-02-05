import React, { useEffect, useState } from "react";
import "./carousel.css";
import { imageCards } from "../../utils/data";

export const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { ...imageCards[2], buttonText: "Learn More" },
    { ...imageCards[3], buttonText: "Discover" },
    { ...imageCards[4], buttonText: "Read More" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={handlePrev}>
        &#10094;
      </button>

      <div className="carousel-card">
        <img
          src={cards[currentIndex].imageUrl}
          alt={cards[currentIndex].title}
        />
        <div className="card-content">
          <h2>{cards[currentIndex].title}</h2>
          <p>{cards[currentIndex].description}</p>
          <button className="action-button">
            {cards[currentIndex].buttonText}
          </button>
        </div>
      </div>

      <button className="nav-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % imageCards.slice(0, 4).length
      );
    }, 3000); // Changes slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="auto-carousel-container">
      {imageCards.slice(0, 4).map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.imageUrl} alt={slide.title} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="dots-container">
        {imageCards.slice(0, 4).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export const FullScreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % imageCards.slice(2, 5).length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="fullscreen-carousel">
      {imageCards.slice(2, 5).map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="slide-overlay">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="carousel-dots">
        {imageCards.slice(2, 5).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
