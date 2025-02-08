import React, { useState } from "react";
import "./chips.css";

export const Chip = ({ label, icon, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className="chip">
      {icon && <span className="chip-icon">{icon}</span>}
      <span className="chip-label">{label}</span>
      <button className="chip-close" onClick={handleClick}>
        ✕
      </button>
    </div>
  );
};

export const InputChips = () => {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
      event.preventDefault();
    } else if (event.key === "Backspace" && !input && chips.length > 0) {
      setChips(chips.slice(0, -1));
    }
  };

  const removeChip = (index) => {
    setChips(chips.filter((_, i) => i !== index));
  };

  return (
    <div className="input-chip-container">
      <input
        type="text"
        className="input-chip-text"
        placeholder="Type and press Enter..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <section className="input-chips">
        {chips.map((chip, index) => (
          <Chip label={chip} onClick={() => removeChip(index)} />
        ))}
      </section>
    </div>
  );
};

export const ChoiceChips = () => {
  const options = ["Small", "Medium", "Large"];
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="choice-chips-container">
      {options.map((option, index) => (
        <button
          key={index}
          className={`choice-chip ${selected === option ? "selected" : ""}`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export const FilterChips = () => {
  const options = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Toys",
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleToggle = (option) => {
    let updatedFilters = [...selectedFilters];
    if (updatedFilters.includes(option)) {
      updatedFilters = updatedFilters.filter((item) => item !== option);
    } else {
      updatedFilters.push(option);
    }
    setSelectedFilters(updatedFilters);
  };

  return (
    <div className="filter-chips-container">
      {options.map((option, index) => (
        <button
          key={index}
          className={`choice-chip ${
            selectedFilters.includes(option) ? "selected" : ""
          }`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
