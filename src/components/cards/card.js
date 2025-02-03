import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (item) => {
  const { to, title, image } = item;
  return (
    <div className="card-wrapper">
      <Link to={to}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Card;
