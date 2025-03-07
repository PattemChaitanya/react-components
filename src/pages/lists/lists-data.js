import {
  ActionableList,
  NestedList,
  OrderedList,
  UnorderedList,
} from "./lists-component";

export const listsData = {
  seoTitle: "Lists Component – A Complete Guide",
  seoDescription:
    "Discover the versatility of lists – an essential UI element for displaying items, data, and navigation. Learn to design, implement, and enhance user experience with lists.",
  seoKeywords: [
    "lists component",
    "UI lists",
    "material design lists",
    "ordered lists",
    "unordered lists",
    "nested lists",
    "actionable lists",
  ],
  pageTitle: "Lists",
  pageDescription: [
    "Lists are foundational UI components used to display data, navigation items, or actionable content in a structured and easy-to-read manner.",
    "They play a key role in enhancing clarity and organization in user interfaces.",
  ],
  pageImage: "https://material-web.dev/components/images/lists/hero.webp",
  types: [
    "Ordered Lists",
    "Unordered Lists",
    "Nested Lists",
    "Actionable Lists",
  ],
  interactiveDemo: "https://material-web.dev/components/lists#interactive-demo",
  accessibity:
    "Lists are fully accessible, supporting screen readers and proper hierarchical structure using semantic HTML and ARIA roles.",
  examples: [
    {
      component: <OrderedList />,
      description:
        "An ordered list to display steps in a process or a sequence of actions.",
      id: "ordered-lists",
      title: "Ordered List for Steps",
      usages:
        "Use ordered lists for processes, instructions, or steps requiring sequential order.",
      purpose: "To convey order or priority in a structured way.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
      
export const App = () => {
  const steps = [
    "Select your product",
    "Add to cart",
    "Enter shipping details",
    "Make payment",
    "Receive confirmation",
  ];

  return (
    <div className="ordered-list-container">
      <ol className="ordered-list">
        {steps.map((step, index) => (
          <li key={index} className="ordered-list-item">
            <span className="step-number">{index + 1}</span>
            <span className="step-text">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};`,
        "app.css": `.ordered-list-container {
  max-width: 400px;
  padding: 16px;
}

.ordered-list {
  list-style: none;
  counter-reset: step-counter;
  padding-left: 0;
}

.ordered-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  padding: 8px 0;
}

.step-number {
  background: #007bff;
  color: white;
  font-weight: bold;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.step-text {
  flex: 1;
}`,
      },
      open: false,
    },
    {
      component: <UnorderedList />,
      description: "An unordered list to display items with no specific order.",
      id: "unordered-lists",
      title: "Unordered List for Features",
      usages:
        "Use unordered lists for displaying general items, such as features or options.",
      purpose: "To present non-sequential information in a readable format.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";

export const App = () => {
  const steps = [
    "Select your product",
    "Add to cart",
    "Enter shipping details",
    "Make payment",
    "Receive confirmation",
  ];

  return (
    <div className="unordered-list-container">
      <ul className="unordered-list">
        {steps.map((item, index) => (
          <li key={index} className="unordered-list-item">
            <span className="bullet">•</span>
            <span className="item-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
        "app.css": `.unordered-list-container {
  max-width: 400px;
  padding: 16px;
}

.unordered-list {
  list-style: none;
  padding-left: 0;
}

.unordered-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  padding: 6px 0;
}

.bullet {
  font-size: 18px;
  color: #007bff;
}

.item-text {
  flex: 1;
}`,
      },
      open: false,
    },
    {
      component: <NestedList />,
      description: "A nested list for hierarchical or grouped information.",
      id: "nested-lists",
      title: "Nested List for Categories",
      usages:
        "Use nested lists for representing tree structures, categories, or grouped data.",
      purpose: "To organize content in a hierarchical structure.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
import { ListItem } from "./list-item";

export default const App = () => {
  const nestedData = [
    { label: "Fruits", children: [{ label: "Apple" }, { label: "Banana" }] },
    {
      label: "Vegetables",
      children: [
        {
          label: "Leafy",
          children: [{ label: "Spinach" }, { label: "Lettuce" }],
        },
        { label: "Root", children: [{ label: "Carrot" }, { label: "Potato" }] },
      ],
    },
  ];
  return (
    <ul className="nested-list">
      {nestedData.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};`,
        "list-item.jsx": `import React, { useState } from "react";
import "./app.css";

export const ListItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="nested-list-item">
      <div
        className="list-item-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {item.children && (
          <span className="toggle-btn">{isExpanded ? "▼" : "▶"}</span>
        )}
        <span className="item-text">{item.label}</span>
      </div>
      {isExpanded && item.children && (
        <ul className="nested-sublist">
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};`,
        "app.css": `:root {
  --background-hover: rgba(255, 255, 255, 0.7);
}

[data-theme="dark"] {
  --background-hover: rgba(0, 0, 0, 0.7);
}
  
.nested-list {
  list-style: none;
  padding-left: 0;
}

.nested-list-item {
  margin: 4px 0;
}

.list-item-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.list-item-header:hover {
  background: var(--background-hover);
}

.toggle-btn {
  margin-right: 8px;
  font-size: 12px;
  cursor: pointer;
  color: currentColor !important;
}

.item-text {
  font-size: 16px;
}

.nested-sublist {
  list-style: none;
  padding-left: 16px;
}`,
      },
      open: false,
    },
    {
      component: <ActionableList />,
      description:
        "An actionable list with items that trigger actions or navigation.",
      id: "actionable-lists",
      title: "Actionable List for Navigation",
      usages:
        "Use actionable lists for navigation menus or lists with clickable items.",
      purpose: "To provide interactive elements in a structured list format.",
      codeBlock: {
        "app.jsx": `import React from "react;
import "./app.css";
        
export const ActionableList = () => {
  const listItems = [
    { label: "Profile", icon: "👤", onClick: () => alert("Go to Profile") },
    { label: "Settings", icon: "⚙️", onClick: () => alert("Open Settings") },
    { label: "Logout", icon: "🚪", onClick: () => alert("Logging out...") },
  ];

  return (
    <ul className="actionable-list">
      {listItems.map((item, index) => (
        <li key={index} className="actionable-list-item" onClick={item.onClick}>
          {item.icon && <span className="list-icon">{item.icon}</span>}
          <span className="list-text">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};`,
        "app.css": `.actionable-list {
  list-style: none;
  padding-left: 0;
}

.actionable-list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.actionable-list-item:hover {
  background: var(--background-hover);
}

.list-icon {
  font-size: 18px;
}

.list-text {
  font-size: 16px;
  flex: 1;
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
      "Ordered Lists": "#ordered-lists",
      "Unordered Lists": "#unordered-lists",
      "Nested Lists": "#nested-lists",
      "Actionable Lists": "#actionable-lists",
    },
    References: "#references",
  },
  references: {
    "Material Design Lists": "https://material.io/components/lists",
    "HTML Lists Documentation":
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
    "WAI-ARIA Accessibility for Lists":
      "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",
  },
  previousNavigation: {
    title: "Icon Buttons",
    link: "/all-components/icon-buttons",
  },
  nextNavigation: {
    title: "Menu",
    link: "/all-components/menu",
  },
};
