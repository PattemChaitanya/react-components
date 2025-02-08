import React, { useState } from "react";
import "./radio-button.css";

export const RadioButton = ({ options, name }) => {
  const [selected, setSelected] = useState("option1");
  return (
    <div className="radio-group" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => setSelected(option.value)}
            className="radio-input"
            aria-checked={selected === option.value}
          />
          <span className="custom-radio"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export const DescriptiveRadioButton = ({ options, name }) => {
  const [selected, setSelected] = useState("option1");
  return (
    <div className="radio-group" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => setSelected(option.value)}
            className="radio-input"
            aria-checked={selected === option.value}
          />
          <span className="custom-radio"></span>
          <div className="radio-text">
            <span className="radio-title">{option.label}</span>
            <span className="radio-description">{option.description}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export const CustomRadioButton = ({
  options,
  name,
  size = "medium",
  color = "#007bff",
}) => {
  const [selected, setSelected] = useState("option1");
  return (
    <div className="radio-group" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label key={option.value} className={`radio-label ${size}`}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => setSelected(option.value)}
            className="radio-input"
            aria-checked={selected === option.value}
          />
          <span className="custom-radio" style={{ borderColor: color }}>
            <span
              className="radio-inner"
              style={{
                backgroundColor:
                  selected === option.value ? color : "transparent",
              }}
            ></span>
          </span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export const IconRadioButton = ({ options, name }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <div className="radio-group" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => setSelectedValue(option.value)}
            className="radio-input"
            aria-checked={selectedValue === option.value}
          />
          <span className="custom-icon">
            {selectedValue === option.value ? option.selectedIcon : option.icon}
          </span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export const RadioButtonGroup = ({ options, name }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <div className="radio-group" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => setSelectedValue(option.value)}
            className="radio-input"
            aria-checked={selectedValue === option.value}
          />
          <span className="custom-radio"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};
