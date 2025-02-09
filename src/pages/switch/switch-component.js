import React, { useState } from "react";
import "./switch.css";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";

export const MinimalSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider"></span>
    </label>
  );
};

export const SwitchWithLabels = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch-label">
      <span className="label">{isOn ? "ON" : "OFF"}</span>
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider-label"></span>
    </label>
  );
};

export const SwitchWithIcons = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch-icons">
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider-icons">
        {!isOn ? (
          <WbSunnyRoundedIcon className="icon sun" />
        ) : (
          <BedtimeRoundedIcon className="icon moon" />
        )}
      </span>
    </label>
  );
};

export const CustomSwitch = ({ checkedColor, uncheckedColor }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="custom-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        aria-label="Toggle switch"
      />
      <span
        className="custom-slider"
        style={{
          background: isChecked
            ? checkedColor || "linear-gradient(135deg, #1b60da, #00c6ff)"
            : uncheckedColor || "linear-gradient(135deg, #ff8a00, #da1b60)",
        }}
      ></span>
    </label>
  );
};

export const MultiStateSwitch = () => {
  const states = ["Low", "Medium", "High"];
  const [stateIndex, setStateIndex] = useState(0);

  const nextState = () => {
    setStateIndex((prevIndex) => (prevIndex + 1) % states.length);
  };

  return (
    <div
      className="multi-switch"
      onClick={nextState}
      tabIndex={0}
      role="button"
      aria-label={`Current state: ${states[stateIndex]}`}
    >
      <div className="multi-slider" data-state={stateIndex}>
        <span className="multi-thumb">{states[stateIndex]}</span>
      </div>
    </div>
  );
};
