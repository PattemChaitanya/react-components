import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (item) => {
  const { to, title } = item;
  return (
    <div className="card-wrapper">
      <Link to={to}>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Card;
