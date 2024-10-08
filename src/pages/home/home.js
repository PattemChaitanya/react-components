import React from "react";
import "./home.css";
import Card from "../../components/cards/card";
import { newMenu } from "../../constants/sidebarConstants";

const Home = () => {
  return (
    <div className="homeText">
      <div className="card-box">
        {newMenu.map((item, index) => (
          <Card to={item.path} key={index} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
