import React, { useState } from "react";
import "./style.css";
import Avatar from "../../components/avatar/avatar";

const ComplexDropDowns = () => {
  const [isOpen, setIsOpen] = useState(true);

  const renderedMenu = () => {
    return ["Dashboard", "Profile", "Settings"].map((item) => <p>{item}</p>);
  };

  return (
    <div className="drop-down-container">
      <div className="profileCardContainer">
        <div
          className="profileAvatar"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          <Avatar url="" name="adam" sx={{ color: "inherit" }} />
        </div>
        <div
          className="profileMenu"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <p>
            Signed in as
            <br />
            <span>Adam Greece</span>
          </p>
          <hr />
          {renderedMenu()}
          <hr />
          <p>Signout</p>
        </div>
      </div>
    </div>
  );
};

export default ComplexDropDowns;
