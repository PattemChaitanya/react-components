// need to refactor this file
import React from "react";
import "./button-group.css";

// Button group
export const ButtonGroup = () => {
  return (
    <div className="button-group">
      <button className="btn">ONE</button>
      <button className="btn">TWO</button>
      <button className="btn">THREE</button>
    </div>
  );
};

// trail button group
const Button = ({
  label,
  size = "medium",
  color = "default",
  variant = "filled",
}) => {
  return <button className={`btn ${size} ${color} ${variant}`}>{label}</button>;
};

export const CustomButtonGroup = () => {
  return (
    <div className="button-group">
      <Button label="Small Gray" size="small" color="gray" />
      <Button label="Medium Indigo" size="medium" color="indigo" />
      <Button label="Large Orange" size="large" color="orange" />
      <Button
        label="Outlined Green"
        size="medium"
        color="green"
        variant="outlined"
      />
      <Button label="Filled Blue" size="large" color="blue" variant="filled" />
    </div>
  );
};

// custom button group
export const VariantionButtonGroup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <TrailButtonGroup
        buttons={["Alpha", "Beta", "Gamma"]}
        color="green"
        size="small"
        variant="outlined"
      />
      <TrailButtonGroup
        buttons={["One", "Two", "Three"]}
        color="blue"
        size="medium"
        variant="filled"
      />
      <TrailButtonGroup
        buttons={["First", "Second", "Third"]}
        color="red"
        size="large"
        variant="text"
      />
    </div>
  );
};
const TrailButtonGroup = ({
  buttons,
  color = "blue",
  size = "medium",
  variant = "filled",
}) => {
  return (
    <div className={`trail-button-group ${color} ${size} ${variant}`}>
      {buttons.map((btn, index) => (
        <button key={index} className="trail-btn">
          {btn}
        </button>
      ))}
    </div>
  );
};

// vertical and horizontal button groups
export const VHButtonGroups = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "30px",
        padding: "20px",
      }}
    >
      <div>
        <VHButtonGroup
          buttons={["Home", "About", "Contact"]}
          direction="horizontal"
          size="medium"
          color="blue"
        />
      </div>

      <div>
        <VHButtonGroup
          buttons={["Dashboard", "Settings", "Profile"]}
          direction="vertical"
          size="medium"
          color="green"
        />
      </div>
    </div>
  );
};
const VHButtonGroup = ({
  buttons,
  direction = "horizontal", // 'horizontal' or 'vertical'
  size = "small",
  color = "blue",
}) => {
  return (
    <div className={`v-h-button-group ${direction} ${size} ${color}`}>
      {buttons.map((btn, index) => (
        <button key={index} className="v-h-btn">
          {btn}
        </button>
      ))}
    </div>
  );
};

// button group with icons
const IconButtonGroup = ({ buttons, size = "medium", color = "blue" }) => {
  return (
    <div className={`icon-button-group ${size} ${color}`}>
      {buttons.map((btn, index) => (
        <button key={index} className="icon-btn" onClick={btn.onClick}>
          {btn.icon}
        </button>
      ))}
    </div>
  );
};

export const IconButton = () => {
  const buttons = [
    { icon: HomeIcon, onClick: () => alert("Home clicked") },
    { icon: SettingsIcon, onClick: () => alert("Settings clicked") },
    { icon: ProfileIcon, onClick: () => alert("Profile clicked") },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <IconButtonGroup buttons={buttons} size="medium" color="blue" />
    </div>
  );
};

const HomeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const SettingsIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94a7.48 7.48 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.91-3.3a.5.5 0 00-.61-.22l-2.39.96a7.55 7.55 0 00-1.63-.95l-.36-2.54A.5.5 0 0014.5 2h-5a.5.5 0 00-.49.41l-.36 2.54a7.55 7.55 0 00-1.63.95l-2.39-.96a.5.5 0 00-.61.22l-1.91 3.3a.5.5 0 00.12.64l2.03 1.58a7.48 7.48 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.64l1.91 3.3a.5.5 0 00.61.22l2.39-.96a7.55 7.55 0 001.63.95l.36 2.54a.5.5 0 00.49.41h5a.5.5 0 00.49-.41l.36-2.54a7.55 7.55 0 001.63-.95l2.39.96a.5.5 0 00.61-.22l1.91-3.3a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z" />
  </svg>
);

const ProfileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
  </svg>
);
