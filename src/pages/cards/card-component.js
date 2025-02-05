import React from "react";
import "./card.css";

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

const ImageCardWithActions = () => {
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

export default ImageCardWithActions;
