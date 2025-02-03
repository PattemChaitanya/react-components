import React, { useState } from "react";
import "./style.css";
import clsx from "clsx";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const SimpleButton = () => {
  const [buttonStates, setButtonStates] = useState(0);
  const [isIconsRequired, setIsIconsRequired] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonMenu = [
    { label: "primary", icon: <AddIcon /> },
    { label: "secondary", icon: <FavoriteBorderIcon /> },
    { label: "success", icon: <ThumbUpAltIcon /> },
    { label: "error", icon: <ReportProblemIcon /> },
  ];

  function styleButton(variant) {
    switch (variant) {
      case 1:
        return "elevated";
      case 2:
        return "filled";
      case 3:
        return "tonal";
      case 4:
        return "outlined";
      default:
        return "text";
    }
  }

  return (
    <div style={{ height: "inherit", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "16px" }}>
        {buttonMenu.map((variant, index) => (
          <button
            key={index}
            className={clsx(
              "base",
              `${variant.label}-${styleButton(buttonStates)}`,
              isDisabled && "disabled"
            )}
            onClick={() =>
              alert(
                `You have clicked a ${variant.label} button ${
                  !isIconsRequired ? "with icons" : ""
                }`
              )
            }
            disabled={isDisabled}
          >
            {!isIconsRequired ? <i> {variant.icon}</i> : null}
            {variant.label}
          </button>
        ))}
      </div>
      <div className="demo-right-container">
        {[
          "Text button",
          "Elevated Button",
          "Filled button",
          "Tonal button",
          "Outlined button",
        ].map((item, index) => (
          <div className="demo-content" onClick={() => setButtonStates(index)}>
            <input
              type="radio"
              checked={buttonStates === index}
              aria-label="button-types"
              label={item}
            />
            <label>{item}</label>
          </div>
        ))}
        <hr />
        {["With Icons", "Without Icons"].map((item, index) => (
          <div
            className="demo-content"
            onClick={() => setIsIconsRequired(index)}
          >
            <input
              type="radio"
              checked={isIconsRequired === index}
              aria-label="button-icons"
              label={item}
            />
            <label>{item}</label>
          </div>
        ))}
        <hr />
        <div
          className="demo-content"
          onClick={() => setIsDisabled(!isDisabled)}
        >
          <input
            type="radio"
            checked={isDisabled}
            aria-label="button-icons"
            label={isDisabled ? "Enabled" : "Disabled"}
          />
          <label>Disabled</label>
        </div>
      </div>
    </div>
  );
};

export default SimpleButton;
