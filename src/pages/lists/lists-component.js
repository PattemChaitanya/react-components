import React, { useState } from "react";
import "./lists.css";

export const OrderedList = () => {
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
};

export const UnorderedList = () => {
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
};

export const NestedList = () => {
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
        <NestedListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const NestedListItem = ({ item }) => {
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
            <NestedListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

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
};
