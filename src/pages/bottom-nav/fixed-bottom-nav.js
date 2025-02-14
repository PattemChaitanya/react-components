import React from "react";
import { navItems } from "./bottom-nav-data";

const styles = {
  container: {
    position: "sticky",
    bottom: 0,
    zIndex: 1000,
  },
  textCenter: {
    textAlign: "center",
  },
  svgSize: { width: "24px", height: "24px" },
  contentContainer: {
    overflowY: "auto",
    height: "200px",
    position: "relative",
    width: "100%",
    marginInline: "auto",
  },
};

const FixedBottomNav = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <div style={styles.contentContainer}>
      <div>
        <h1>
          {selected === 0 ? "home" : selected === 1 ? "Search" : "Profile"}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
      </div>
      <div className="bottom-nav" style={styles.container}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            <svg viewBox="0 0 24 24" style={styles.svgSize}>
              <path fill="currentColor" d={item.iconPath} />
            </svg>
            {selected === index && <div>{item.label}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedBottomNav;
