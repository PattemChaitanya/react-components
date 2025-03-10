import {
  BasicSelect,
  CategorizedDropdown,
  CustomMultiSelect,
  MultiSelect,
  SearchableDropdown,
} from "./select-component";

const selectMenu = {
  options: ["Option 1", "Option 2", "Option 3"],
  multiOptions: ["Apple", "Banana", "Cherry", "Date", "Grapes"],
  categorizedOptions: [
    { category: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
    { category: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
  ],
};

export const selectData = {
  seoTitle: "Select Component - Intuitive Dropdown Menus",
  seoDescription:
    "Discover the Select component for creating dropdowns, multi-select menus, and custom list-based inputs. Includes examples, accessibility tips, and demos.",
  seoKeywords: [
    "Select",
    "Dropdown Menu",
    "UI Design",
    "Form Elements",
    "Custom Inputs",
  ],
  pageTitle: "Select",
  pageDescription: [
    "The Select component is a form element that enables users to choose one or more options from a dropdown menu.",
    "It can be used in a variety of contexts, from simple single-option selectors to multi-select menus with advanced customization.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Dropdown",
    "Multi-Select Dropdown",
    "Searchable Dropdown",
    "Grouped Options",
    "Customizable Select",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "The Select component should be fully keyboard-navigable and screen-reader friendly. Ensure ARIA roles like 'listbox' and 'option' are used. Provide visual focus indicators and announce selected or filtered options dynamically. For multi-select, ensure that selections are announced properly to assistive technologies.",
  examples: [
    {
      component: (
        <BasicSelect options={selectMenu.options} label="Choose an option:" />
      ),
      description: "A simple dropdown menu for selecting one option.",
      id: "basic",
      title: "Basic Dropdown Example",
      usages:
        "Used for scenarios where users need to pick one option from a predefined list.",
      purpose:
        "Simplifies forms by reducing input options to a manageable dropdown.",
      codeBlock: {
        "app.jsx": `import React from "react";
import options from "./data.json";
import Select from "./select";
        
export const App = () => {
  return (
    <div>
      <Select options={options} label="Choose an option:" />
    </div>
  );
};`,
        "select.jsx": `import React, { useState } from "react";
import "./select.css";
        
export default const Select = ({ options, label }) => {
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
};`,
        "select.css": `.select-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Arial, sans-serif;
}

.select-label {
  font-size: 14px;
  font-weight: bold;
}

.select-list {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}

.select-list:focus {
  border-color: #007bff;
  outline: none;
}`,
        "data.json": `["Option 1", "Option 2", "Option 3"];`,
      },
      open: false,
    },
    {
      component: (
        <MultiSelect options={selectMenu.multiOptions} label="Select fruits:" />
      ),
      description: "A dropdown menu allowing selection of multiple options.",
      id: "multi",
      title: "Multi-Select Dropdown Example",
      usages: "Ideal for selecting tags, categories, or multiple preferences.",
      purpose:
        "Gives users the flexibility to choose more than one option in a single input.",
      codeBlock: {
        "app.jsx": `import React from "react";
import options from "./data.json";
import MultiSelect from "./multiSelect";
        
export const App = () => {
  return (
    <div>
      <MultiSelect options={options} label="Select fruits:" />
    </div>
  );
}`,
        "multiSelect.jsx": `import React, { useState } from "react";
import "./select.css";

export default const MultiSelect = ({ options, label }) => {
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
        Inorder to select multiple from select component use <strong>ctrl(win)</strong> or <strong>cmd(mac)</strong> and then click on the option.
      </p>
    </div>
  );
};`,
        "app.css": `.multi-select-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
}

.multi-select-label {
  font-size: 14px;
  font-weight: bold;
}

.multi-select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  height: 100px;
}

.multi-select:focus {
  border-color: #007bff;
  outline: none;
}

.selected-values {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
}`,
        "data.json": `["Apple", "Banana", "Cherry", "Date", "Grapes"]`,
      },
      open: false,
    },
    {
      component: (
        <SearchableDropdown
          options={selectMenu.multiOptions}
          label="Select a fruit:"
        />
      ),
      description: "A dropdown menu with a search bar for filtering options.",
      id: "searchable",
      title: "Searchable Dropdown Example",
      usages:
        "Perfect for large lists where users need to quickly find their selection.",
      purpose: "Enhances usability by making long lists easier to navigate.",
      codeBlock: {
        "app.jsx": `import React from "react";
import options from "./data.json";
import SearchableDropdown from "./searchableDropdown";
        
export const App = () => {
  return (
    <div>
      <SearchableDropdown options={options} label="Select a fruit:" />
    </div>
  );
};`,
        "searchableDropDown.jsx": `import React, { useEffect, useRef, useState } from "react";
import "./searchableDropdown.css";

export default const SearchableDropdown = ({ options, label }) => {
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
                className={\`dropdown-item \${
                  index === highlightedIndex ? "highlighted" : ""
                }\`}
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
};`,
        "searchableDropdown.css": `.dropdown-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Arial, sans-serif;
  width: 250px;
  height: 250px;
  position: relative;
}

.dropdown-label {
  font-size: 14px;
  font-weight: bold;
}

.dropdown-input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 80px;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-item:hover,
.dropdown-item.highlighted {
  background: #007bff;
  color: white;
}

.dropdown-item.disabled {
  color: gray;
  cursor: not-allowed;
}

.selected-value {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
}`,
        "data.json": `["Apple", "Banana", "Cherry", "Date", "Grapes"]`,
      },
      open: false,
    },
    {
      component: (
        <CategorizedDropdown
          options={selectMenu.categorizedOptions}
          label="Select an item:"
        />
      ),
      description: "A dropdown menu with categorized options.",
      id: "grouped",
      title: "Grouped Options Example",
      usages: "Useful for grouping related options, like country and region.",
      purpose: "Organizes complex lists for better readability.",
      codeBlock: {
        "app.jsx": `import React from "react";
import GroupedCategory from "./groupedCategory";
import options from "./data.json";
        
export const App = () => {
  return (
    <div>
      <GroupedCategory options={options} label="Select an item:" />
    </div>
  );
};`,
        "groupedCategory.jsx": `import React, { useState, useRef, useEffect } from "react";
import "./groupedCategory.css";

export default const GroupedCategory = ({ options, label }) => {
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
                    className={\`dropdown-item \${
                      flatIndex === highlightedIndex ? "highlighted" : ""
                    }\`}
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
        `,
        "groupedCategory.css": `.dropdown-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Arial, sans-serif;
  width: 250px;
  height: 250px;
  position: relative;
}

.dropdown-label {
  font-size: 14px;
  font-weight: bold;
}

.dropdown-input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 80px;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-item:hover,
.dropdown-item.highlighted {
  background: #007bff;
  color: white;
}

.dropdown-item.disabled {
  color: gray;
  cursor: not-allowed;
}`,
        "data.json": `[
  { category: "Fruits", items: ["Apple", "Banana", "Cherry"] },
  { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
  { category: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
]`,
      },
      open: false,
    },
    {
      component: <CustomMultiSelect />,
      description: "A select component with custom icons, colors, or layouts.",
      id: "custom",
      title: "Customizable Select Example",
      usages:
        "Great for branded designs or applications that require unique visuals.",
      purpose:
        "Improves visual appeal and aligns with custom UI/UX requirements.",
      codeBlock: {
        "app.jsx": `import React from "react";
import CustomMultiSelect from "./customMultiSelect";

export const App = () => {
  return (
    <div>
      <CustomMultiSelect />
    </div>
  );
};`,
        "customMultiSelect.jsx": `import React, { useState, useRef, useEffect } from "react";
import "./customMultiSelect.css";
import options from "./data.json";

export default const CustomMultiSelect = () => {
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
};`,
        "customMultiSelect.css": `.dropdown-container {
  position: relative;
  width: 320px;
  margin: 20px auto;
}

.dropdown-box {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  min-height: 40px;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  background: white;
  overflow: auto;
}

.chip {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 14px;
  width: fit-content;
  color: #393939;
}

.remove-btn {
  margin-left: 8px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: red;
}

.arrow {
  margin-left: auto;
  font-size: 14px;
  color: #555;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.search-box {
  width: calc(100% - 16px);
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
}

.dropdown-item:hover {
  background: #f0f0f0;
}`,
        "data.json": `[
  { label: "One Piece", emoji: "🏴‍☠️" },
  { label: "Hunter x Hunter", emoji: "🥋" },
  { label: "Black Clover", emoji: "✨" },
  { label: "Naruto Shippūden", emoji: "🍜" },
  { label: "Bleach", emoji: "🌀" },
  { label: "Boruto", emoji: "⚡" },
  { label: "Dragon Ball Z", emoji: "🐉" },
  { label: "Fullmetal Alchemist", emoji: "⚙️" },
  { label: "My Hero Academia", emoji: "💥" },
]`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Dropdown": "#basic",
      "Multi-Select Dropdown": "#multi",
      "Searchable Dropdown": "#searchable",
      "Grouped Options": "#grouped",
      "Customizable Select": "#custom",
    },
    References: "#references",
  },
  references: {
    "ARIA Roles for Select Menus":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Listbox_Role",
    "Dropdown Best Practices":
      "https://uxdesign.cc/designing-effective-dropdowns-best-practices-5a9f9f39908d",
    "Keyboard Navigation in Forms":
      "https://webaim.org/techniques/forms/controls",
  },
  previousNavigation: {
    title: "Radio Buttons",
    link: "/all-components/radio-buttons",
  },
  nextNavigation: {
    title: "Switch",
    link: "/all-components/switch",
  },
};
