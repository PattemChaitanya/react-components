import { Chip, ChoiceChips, FilterChips, InputChips } from "./chips-component";

export const chipsData = {
  seoTitle: "Chips Component – A Complete Guide",
  seoDescription:
    "Explore Chips – compact UI elements for actions, inputs, filters, or selections. Learn to design, implement, and enhance user experience with them.",
  seoKeywords: [
    "chips component",
    "UI chips",
    "material design chips",
    "filter chips",
    "action chips",
    "input chips",
    "choice chips",
  ],
  pageTitle: "Chips",
  pageDescription: [
    "Chips are interactive UI components used to represent actions, choices, filters, or inputs in a compact, visually appealing way.",
    "They enhance user experience by enabling intuitive interaction in a minimal and organized format.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Action Chips", "Filter Chips", "Input Chips", "Choice Chips"],
  interactiveDemo: "https://material-web.dev/components/chips#interactive-demo",
  accessibity:
    "Chips are keyboard navigable, accessible via screen readers, and provide clear focus indicators to ensure a great experience for all users.",
  examples: [
    {
      component: (
        <Chip
          label="Apply Discount"
          onClick={() => alert("Discount Applied!")}
        />
      ),
      description:
        "Action chips for performing quick tasks, such as applying a discount code or opening a help dialog.",
      id: "action-chips",
      title: "Action Chips for Quick Tasks",
      usages:
        "Action chips are ideal for actions like toggling a feature or applying a function.",
      purpose:
        "To allow users to perform specific tasks quickly and intuitively.",
      codeBlock: {
        "app.jsx": `import React from "react";
import Chip from "./chip";
      
export const App = () => {
  return (
    <Chip
      label="Apply Discount"
      onClick={() => alert("Discount Applied!")}
    />
  );
},`,
        "chip.jsx": `import React from "react";
import "./chip.css";
        
export default const Chip = ({ label, icon, onClick }) => {
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
};`,
        "chip.css": `.chip {
  display: inline-flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  border: 1px solid #ccc;
}

.chip:hover {
  background: #e0e0e0;
}

.chip-icon {
  margin-right: 6px;
}

.chip-label {
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.8);
}

.chip-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #777;
  padding: 0;
}

.chip-close:hover {
  color: #333;
}`,
      },
      open: false,
    },
    {
      component: <ChoiceChips />,
      description:
        "Choice chips for selecting one option from multiple choices.",
      id: "choice-chips",
      title: "Choice Chips for Preferences",
      usages:
        "Choice chips are used when the user must select a single option from a set, such as themes or delivery options.",
      purpose:
        "To make single-option selections more user-friendly and visually engaging.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
      
export const App = () => {
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
          className={\`choice-chip \${selected === option ? "selected" : ""}\`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};`,
        "app.css": `.choice-chips-container {
  display: flex;
  gap: 8px;
}

.choice-chip {
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  background: #f1f1f1;
  cursor: pointer;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  transition: background 0.3s ease, color 0.3s ease;
}

.choice-chip:hover {
  background: #e0e0e0;
}

.choice-chip.selected {
  background: #007bff;
  color: white;
  border: 1px solid #007bff;
}`,
      },
      open: false,
    },
    {
      component: <FilterChips />,
      description:
        "Filter chips for narrowing down options in a catalog or product list.",
      id: "filter-chips",
      title: "Filter Chips for Product Filters",
      usages:
        "Use filter chips to toggle between different categories, such as color, size, or brand.",
      purpose: "To simplify filtering options in a compact, organized manner.",
      codeBlock: {
        "app.jsx": `import React from "react;
import "./app.css";
        
export const App = () => {
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
          className={\`choice-chip \${
            selectedFilters.includes(option) ? "selected" : ""
          }\`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
        `,
        "app.css": `.filter-chips-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  text-align: center;
}
  
.choice-chip {
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  background: #f1f1f1;
  cursor: pointer;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  transition: background 0.3s ease, color 0.3s ease;
}

.choice-chip:hover {
  background: #e0e0e0;
}

.choice-chip.selected {
  background: #007bff;
  color: white;
  border: 1px solid #007bff;
}`,
      },
      open: false,
    },
    {
      component: <InputChips />,
      description:
        "Input chips to represent user input, like tags or email addresses in a form.",
      id: "input-chips",
      title: "Input Chips for Tagging",
      usages:
        "Use input chips for representing dynamic user input, such as adding or removing tags.",
      purpose:
        "To visually display user-provided data in a structured and editable way.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import Chip from "./chip";
import "./app.css";
      
export const App = () => {
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
};`,
        "chips.jsx": `import React from "react";
        
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
};`,
        "app.css": `/* ---- Chip Component ---- */
.chip {
  display: inline-flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  border: 1px solid #ccc;
}

.chip:hover {
  background: #e0e0e0;
}

.chip-icon {
  margin-right: 6px;
}

.chip-label {
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.8);
}

.chip-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #777;
  padding: 0;
}

.chip-close:hover {
  color: #333;
}

/* ----- Input Chip for tagging ----- */
.input-chip-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.input-chip-text {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 6px;
  font-size: 14px;
  width: min(250px, 100%);
  margin: 0 auto;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Action Chips": "#action-chips",
      "Filter Chips": "#filter-chips",
      "Input Chips": "#input-chips",
      "Choice Chips": "#choice-chips",
    },
    References: "#references",
  },
  references: {
    "Material Design Chips": "https://material.io/components/chips",
    "WAI-ARIA Accessibility": "https://www.w3.org/WAI/ARIA/apg/patterns/chips/",
    "Chips Implementation Guide": "https://material-web.dev/components/chips",
  },
  previousNavigation: { title: "Input", link: "/all-components/input" },
  nextNavigation: {
    title: "FAB",
    link: "/all-components/fab",
  },
};
