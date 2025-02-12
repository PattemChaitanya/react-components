import React, { useState } from "react";
import "./style.css";

const SimpleDropDowns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menu = ["Dashboard", "Profile", "Settings"];

  const handleHoveredState = () => {
    setTimeout(() => {
      isHovered ? setIsHovered(false) : setIsHovered(true);
    }, 500);
  };

  const renderedMenu = () => {
    return menu.map((item) => <p>{item}</p>);
  };

  return (
    <div className="drop-down-container">
      <div className="clickAndHoverContainer">
        <div>
          <button
            className="buttonContainer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Click me
          </button>
          <div
            className="renderedMenu"
            style={{
              visibility: isOpen ? "visible" : "hidden",
            }}
          >
            {renderedMenu()}
          </div>
        </div>
        <div>
          <button
            className="buttonContainer"
            onMouseEnter={() => handleHoveredState()}
            onMouseLeave={() => handleHoveredState()}
          >
            Hover me
          </button>
          <div
            className="renderedMenu"
            style={{
              visibility: isHovered ? "visible" : "hidden",
            }}
          >
            {renderedMenu()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDropDowns;
