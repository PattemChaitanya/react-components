import React from "react";
import "./bottom-nav.css";
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
};

const SimpleBottomNav = () => {
  const [selected, setSelected] = React.useState(0);
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
        </div>
      ))}
    </div>
  );
};

export default SimpleBottomNav;
