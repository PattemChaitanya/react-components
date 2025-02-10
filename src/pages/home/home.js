import React from "react";
import "./home.css";
import { homeScreenCards } from "../../constants/sidebarConstants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigationTo = (to) => {
    navigate(to);
  };
  return (
    <div className="gallery-container">
      {Object.values(homeScreenCards).map((card) => (
        <>
          <h2 className="gallery-title">{card.title}</h2>
          <div className="gallery-grid">
            {card.components.map((comp, index) => (
              <div
                key={index}
                className="gallery-card"
                onClick={() => navigationTo(comp.path)}
              >
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="gallery-icon"
                />
                <p className="gallery-name">{comp.title}</p>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
