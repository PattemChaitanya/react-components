import ComplexCard from "./complex-card";
import HoverCard from "./display-hover-card";
import SimpleCard from "./simple-card";

export const jsonToPageDisplay = {
  pageTitle: "Cards",
  description: "Variety of Cards",
  jsonToDisplay: [
    {
      title: "Simple Cards",
      subTitle: "Simple Cards",
      toDisplay: `import React from "react";

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
`,
      component: <SimpleCard />,
      open: false,
    },
    {
      title: "Complex Cards",
      subTitle: "Complex Cards",
      toDisplay: `import React from "react";

const complexCardStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
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
`,
      component: <ComplexCard />,
      open: false,
    },
    {
      title: "Display on hover",
      subTitle: "Display on hover",
      toDisplay: `import React, { useState } from "react";

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
`,
      component: <HoverCard />,
      open: false,
    },
  ],
};
