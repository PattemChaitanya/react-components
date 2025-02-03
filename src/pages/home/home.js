import React from "react";
import "./home.css";
import Card from "../../components/cards/card";
import { homeScreenCards } from "../../constants/sidebarConstants";

const Home = () => {
  return (
    <div className="homeText">
      {Object.values(homeScreenCards).map((card) => (
        <>
          <h2>{card.title}</h2>
          <div className="card-box">
            {card.components.map((component, index) => (
              <Card
                to={component.path}
                key={index}
                title={component.title}
                image={component.image}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
