import React, { useState } from "react";
import { navItems } from "./bottom-nav-data";

const styles = {
  container: {
    width: "80%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "10px 0",
    marginInline: "auto",
    borderRadius: "4px",
    cursor: "pointer",
  },
  textCenter: {
    textAlign: "center",
  },
  svgSize: { width: "24px", height: "24px" },
  selected: {
    color: "#4CAF50",
  },
  notSelected: {
    color: "#000000",
  },
};

const SelectNameBottomNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bottom-nav">
      {navItems.map((item, index) => (
        <div
          key={item.id}
          className={`nav-item ${selected === index ? "active" : ""}`}
          onClick={() => setSelected(index)}
        >
          <svg viewBox="0 0 24 24" style={styles.svgSize}>
            <path fill="currentColor" d={item.iconPath} />
          </svg>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SelectNameBottomNav;
