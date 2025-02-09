import React from "react";
import "./cards.css";

const imageCards = [
  {
    id: 1,
    title: "Sunset Bliss",
    description: "A beautiful sunset view.",
    imageUrl: "https://via.placeholder.com/200?text=Sunset",
  },
  {
    id: 2,
    title: "Mountain Peak",
    description: "Snow-covered mountain peak.",
    imageUrl: "https://via.placeholder.com/200?text=Mountain",
  },
  {
    id: 3,
    title: "City Lights",
    description: "Vibrant city skyline at night.",
    imageUrl: "https://via.placeholder.com/200?text=City",
  },
];

export const ImageCardWithActions = () => {
  const handleAction = (action, title) => {
    alert(`${action} clicked for "${title}"`);
  };

  return (
    <div className="card-container">
      {imageCards.map((card) => (
        <div key={card.id} className="image-card">
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="action-buttons">
              <button onClick={() => handleAction("Like", card.title)}>
                👍 Like
              </button>
              <button onClick={() => handleAction("Share", card.title)}>
                🔗 Share
              </button>
              <button onClick={() => handleAction("Delete", card.title)}>
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CarCard = () => {
  return (
    <div className="car-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ferrari_SF-75_%284%29_%28cropped%29.jpg/800px-Ferrari_SF-75_%284%29_%28cropped%29.jpg"
        alt="Ferrari SF-75"
        className="car-image"
      />
      <div className="card-car-content">
        <h2 className="car-title">FERRARI SF-75</h2>
        <p className="car-description">
          The Ferrari SF-75 is a Formula 1 car designed for the 2022 season,
          known for its aerodynamic efficiency and cutting-edge technology.
        </p>
        <div className="button-group">
          <button className="details-btn">DETAILS</button>
          <button className="buy-btn">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
