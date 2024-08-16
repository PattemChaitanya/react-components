import React, { useState } from "react";

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#f0f0f0",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: "15px",
      width: "350px",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      position: "relative",
    },
    details: {
      position: "absolute",
      bottom: "10px",
      left: "10px",
      right: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "10px",
      borderRadius: "10px",
      display: "none",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "250px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "20px",
    },
    title: {
      fontWeight: "600",
      fontSize: "1.8rem",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1rem",
      color: "#333",
    },
  };

  return (
    <div
      style={cardStyles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        style={cardStyles.image}
        src="https://via.placeholder.com/350x250"
        alt="Hover Card"
      />
      <div
        style={{ ...cardStyles.details, display: isHovered ? "block" : "none" }}
      >
        <p style={cardStyles.description}>
          This is a hover card. Hover over the card to see this message.
        </p>
      </div>
      {!isHovered && <h2 style={cardStyles.title}>Hover Card</h2>}
    </div>
  );
};

export default HoverCard;
