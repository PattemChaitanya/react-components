import React from "react";

const cardStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "300px",
  },
  image: {
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  title: {
    margin: "20px 0 10px 0",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  description: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#666",
  },
};

const SimpleCard = () => {
  return (
    <div style={cardStyles.container}>
      <img
        style={cardStyles.image}
        src="https://via.placeholder.com/300x200"
        alt="Placeholder"
      />
      <h2 style={cardStyles.title}>Card Title</h2>
      <p style={cardStyles.description}>
        This is a simple card component in React with static data.
      </p>
    </div>
  );
};

export default SimpleCard;
