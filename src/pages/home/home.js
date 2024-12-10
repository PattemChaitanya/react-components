import React from "react";
import "./home.css";
import Card from "../../components/cards/card";
import { homeScreenCards } from "../../constants/sidebarConstants";

const Home = () => {
  return (
    <div className="homeText">
      {/* {newMenu.map((item, index) => (
          <Card to={item.path} key={index} title={item.title} />
        ))} */}
      {Object.values(homeScreenCards).map((card) => (
        <>
          <h2>{card.title}</h2>
          <div className="card-box">
            {card.components.map((component, index) => (
              <Card to={component.path} key={index} title={component.title} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
