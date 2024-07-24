import React from "react";
import "./drag-and-drop.css";
import { Link } from "react-router-dom";

const DragAndDrop = () => {
  return (
    <p className="homeText">
      <Link to={-1}>Back</Link>
      <br />
      drag and drop
    </p>
  );
};

export default DragAndDrop;
