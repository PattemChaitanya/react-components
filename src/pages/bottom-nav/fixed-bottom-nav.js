import React from "react";
import { navItems } from "./bottom-nav-data";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "10px 0",
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
    width: "70%",
    marginInline: "auto",
  },
};

const FixedBottomNav = () => {
  return (
    <div style={styles.contentContainer}>
      <div>
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
      <div style={styles.container}>
        {navItems.map((item) => (
          <div key={item.id} style={styles.textCenter}>
            <svg viewBox="0 0 24 24" style={styles.svgSize}>
              <path fill="currentColor" d={item.iconPath} />
            </svg>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedBottomNav;
