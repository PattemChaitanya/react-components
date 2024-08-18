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
  const [selected, setSelected] = useState("home");

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <div style={styles.container}>
      {navItems.map((item) => (
        <div
          key={item.id}
          style={{
            ...styles.textCenter,
            ...(selected === item.id ? styles.selected : styles.notSelected),
          }}
          onClick={() => handleClick(item.id)}
        >
          <svg viewBox="0 0 24 24" style={styles.svgSize}>
            <path fill="currentColor" d={item.iconPath} />
          </svg>
          {selected === item.id && <div>{item.label}</div>}
        </div>
      ))}
    </div>
  );
};

export default SelectNameBottomNav;
