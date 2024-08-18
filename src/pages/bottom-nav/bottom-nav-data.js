import FixedBottomNav from "./fixed-bottom-nav";
import FixedBottomSelectNav from "./fixed-bottom-selection";
import SelectNameBottomNav from "./select-name-bottom-nav";
import SimpleBottomNav from "./simple-bottom-nav";

export const jsonToDisplay = [
  {
    title: "Simple bottom navbar",
    subTitle: "Basic bottom navbar which consists of name and icons",
    component: <SimpleBottomNav />,
    open: false,
    toDisplay: `import React from "react";

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
  return (
    <div style={styles.container}>
      <div style={styles.textCenter}>
        <svg viewBox="0 0 24 24" style={styles.svgSize}>
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <div>Home</div>
      </div>
      <div style={styles.textCenter}>
        <svg viewBox="0 0 24 24" style={styles.svgSize}>
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <div>Search</div>
      </div>
      <div style={styles.textCenter}>
        <svg viewBox="0 0 24 24" style={styles.svgSize}>
          <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
        <div>Profile</div>
      </div>
    </div>
  );
};

export default SimpleBottomNav;
`,
  },
  {
    title: "Name on select",
    subTitle:
      "Name on select which consists of name and icons and otherwise icons",
    component: <SelectNameBottomNav />,
    open: false,
    toDisplay: `import React, { useState } from "react";
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
`,
  },
  {
    title: "Fixed bottom navbar",
    subTitle:
      "Fixed bottom navbar which sits on bottom of the screen when scroll",
    component: <FixedBottomNav />,
    open: false,
    toDisplay: `import React from "react";
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
`,
  },
  {
    title: "Fixed bottom navbar with selection",
    subTitle:
      "Fixed bottom navbar which sits on bottom of the screen when scroll",
    component: <FixedBottomSelectNav />,
    open: false,
    toDisplay: `import React, { useState } from "react";
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
  selected: {
    color: "#4CAF50",
  },
  notSelected: {
    color: "#000000",
  },
  contentContainer: {
    overflowY: "auto",
    height: "200px",
    position: "relative",
    width: "70%",
    marginInline: "auto",
  },
};

const FixedBottomSelectNav = () => {
  const [selected, setSelected] = useState("home");

  const handleClick = (id) => {
    setSelected(id);
  };

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
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedBottomSelectNav;`,
  },
];

export const navItems = [
  {
    id: "home",
    iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    label: "Home",
  },
  {
    id: "search",
    iconPath:
      "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    label: "Search",
  },
  {
    id: "profile",
    iconPath:
      "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    label: "Profile",
  },
];
