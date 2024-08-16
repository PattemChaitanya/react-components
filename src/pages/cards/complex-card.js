import React from "react";

const complexCardStyles = {
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
    textAlign: "center",
  },
};

const ComplexCard = () => {
  const handleClick = () => {
    alert("Card Clicked!");
  };

  return (
    <div style={complexCardStyles.container} onClick={handleClick}>
      <img
        style={complexCardStyles.image}
        src="https://via.placeholder.com/350x250"
        alt="Complex Card"
      />
      <h2 style={complexCardStyles.title}>Complex Card</h2>
      <p style={complexCardStyles.description}>
        This is a complex card component in React that is clickable.
      </p>
    </div>
  );
};

export default ComplexCard;
