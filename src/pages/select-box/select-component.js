import React, { useEffect, useRef, useState } from "react";
import "./select.css";

export const BasicSelect = ({ options, label }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <select className="select-list" value={selected} onChange={handleChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export const MultiSelect = ({ options, label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <div className="multi-select-container">
      <label className="multi-select-label">{label}</label>
      <select
        className="multi-select"
        multiple
        value={selectedOptions}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="selected-values">
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "No option selected"}
      </div>
      <p>
        Inorder to select multiple from select component use{" "}
        <strong>ctrl(win)</strong> or <strong>cmd(mac)</strong> and then click
        on the option.
      </p>
    </div>
  );
};

export const SearchableDropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setSearchTerm(option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(filteredOptions[highlightedIndex]);
    }
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <label className="dropdown-label">{label}</label>
      <input
        ref={inputRef}
        type="text"
        className="dropdown-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsOpen(true);
          setHighlightedIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && (
        <ul className="dropdown-menu">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className={`dropdown-item ${
                  index === highlightedIndex ? "highlighted" : ""
                }`}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="dropdown-item disabled">No results found</li>
          )}
        </ul>
      )}
      {selected && <div className="selected-value">Selected: {selected}</div>}
    </div>
  );
};

export const CategorizedDropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  const flatOptions = options.flatMap((group) =>
    group.items.map((item) => ({ category: group.category, name: item }))
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < flatOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(flatOptions[highlightedIndex]);
    }
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <label className="dropdown-label">{label}</label>
      <div className="dropdown-input" onClick={() => setIsOpen(!isOpen)}>
        {selected ? selected.name : "Select an option"}
      </div>
      {isOpen && (
        <ul className="dropdown-menu" onKeyDown={handleKeyDown}>
          {options.map((group, groupIndex) => (
            <li key={groupIndex}>
              <div className="dropdown-category">{group.category}</div>
              {group.items.map((item, index) => {
                const flatIndex = flatOptions.findIndex(
                  (opt) => opt.name === item
                );
                return (
                  <div
                    key={index}
                    className={`dropdown-item ${
                      flatIndex === highlightedIndex ? "highlighted" : ""
                    }`}
                    onMouseEnter={() => setHighlightedIndex(flatIndex)}
                    onClick={() =>
                      handleSelect({ category: group.category, name: item })
                    }
                  >
                    {item}
                  </div>
                );
              })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const options = [
  { label: "One Piece", emoji: "🏴‍☠️" },
  { label: "Hunter x Hunter", emoji: "🥋" },
  { label: "Black Clover", emoji: "✨" },
  { label: "Naruto Shippūden", emoji: "🍜" },
  { label: "Bleach", emoji: "🌀" },
  { label: "Boruto", emoji: "⚡" },
  { label: "Dragon Ball Z", emoji: "🐉" },
  { label: "Fullmetal Alchemist", emoji: "⚙️" },
  { label: "My Hero Academia", emoji: "💥" },
];

export const CustomMultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    options[0],
    options[1],
    options[2],
  ]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    if (!selectedOptions.some((item) => item.label === option.label)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setIsOpen(false);
    setSearch("");
  };

  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-box" onClick={() => setIsOpen(!isOpen)}>
        {selectedOptions.map((option, index) => (
          <span key={index} className="chip">
            {option.emoji} {option.label}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(option);
              }}
              className="remove-btn"
            >
              ×
            </button>
          </span>
        ))}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />
          <ul>
            {options
              .filter((option) =>
                option.label.toLowerCase().includes(search.toLowerCase())
              )
              .map((option, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSelect(option)}
                >
                  {option.emoji} {option.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
