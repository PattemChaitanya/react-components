import FixedBottomNav from "./fixed-bottom-nav";
import FixedBottomSelectNav from "./fixed-bottom-selection";
import SelectNameBottomNav from "./select-name-bottom-nav";
import SimpleBottomNav from "./simple-bottom-nav";

export const jsonToPageDisplay = {
  pageTitle: "Bottom Navbar",
  description: "Variety of Bottom Navbar",
  jsonToDisplay: [
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
  ],
};

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

export const bottomNavData = {
  seoTitle: "Bottom Navigation Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create a responsive and accessible bottom navigation bar with Material Design principles, optimized for mobile-first user experiences.",
  seoKeywords: [
    "bottom navigation",
    "mobile navigation",
    "bottom navbar",
    "material design bottom navigation",
    "responsive navbar",
  ],
  pageTitle: "Bottom Navigation",
  pageDescription: [
    "Bottom navigation bars are essential for mobile applications, providing easy access to key sections with just a thumb's reach. They are ideal for mobile-first designs, ensuring minimal clutter while maximizing usability.",
    "When creating a bottom navigation bar, prioritize key sections and ensure that actions are clear, accessible, and intuitive. Limit the number of primary links to no more than 5 to avoid overcrowding and to enhance clarity.",
    "Responsive design should always be considered, as bottom navigation should adapt to both small and large screen sizes, providing a consistent user experience across devices.",
    "Ensure keyboard and screen reader accessibility by properly utilizing `aria-label` and `aria-current` for the active state. Additionally, make all navigation links easily navigable via keyboard shortcuts, particularly for mobile-first web applications.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Simple Bottom Navigation",
    "Bottom Navigation with Icons",
    "Bottom Navigation with Label",
  ],
  interactiveDemo: "",
  accessibity:
    "Incorporate `aria-current` for indicating the active navigation item. Use `aria-label` on the navigation container and individual items for clarity. Ensure that all buttons are keyboard accessible and that focus is correctly managed between them. Provide visual feedback for active states and transitions.",
  examples: [
    {
      component: <SimpleBottomNav />,
      description:
        "A basic bottom navigation bar with three key links for quick access to the primary sections of the app.",
      id: "simple-bottom-nav",
      title: "Simple Bottom Navigation",
      usages:
        "Use for mobile-first websites or apps where there are only a few sections to navigate through.",
      purpose:
        "This simple example emphasizes clear visual cues and touch-friendly navigation for users with smaller screens.",
      codeBlock: `
<div style="position: fixed; bottom: 0; width: 100%; background-color: #6200ea; display: flex; justify-content: space-around; padding: 10px 0; border-top: 1px solid #ccc;">
  <a href="#home" style="color: white; text-decoration: none; font-size: 1.2rem;">Home</a>
  <a href="#search" style="color: white; text-decoration: none; font-size: 1.2rem;">Search</a>
  <a href="#profile" style="color: white; text-decoration: none; font-size: 1.2rem;">Profile</a>
</div>
      `,
      open: false,
    },
    {
      component: <FixedBottomNav />,
      description:
        "A bottom navigation bar with icons for easy recognition of sections, designed for mobile applications.",
      id: "bottom-nav-with-icons",
      title: "Bottom Navigation with Icons",
      usages:
        "Ideal for applications where users need quick, visual access to key sections. Icons help enhance the usability by providing an intuitive visual language.",
      purpose:
        "This example uses Material Icons to make the navigation bar more visually appealing and intuitive for mobile users.",
      codeBlock: `
<div style="position: fixed; bottom: 0; width: 100%; background-color: #6200ea; display: flex; justify-content: space-around; padding: 10px 0; border-top: 1px solid #ccc;">
  <a href="#home" aria-label="Home" style="color: white; text-decoration: none; font-size: 1.5rem;"><i class="material-icons">home</i></a>
  <a href="#search" aria-label="Search" style="color: white; text-decoration: none; font-size: 1.5rem;"><i class="material-icons">search</i></a>
  <a href="#profile" aria-label="Profile" style="color: white; text-decoration: none; font-size: 1.5rem;"><i class="material-icons">account_circle</i></a>
</div>
      `,
      open: false,
    },
    {
      component: <SelectNameBottomNav />,
      description:
        "A bottom navigation bar that combines icons with text labels for better clarity.",
      id: "bottom-nav-with-label",
      title: "Bottom Navigation with Label",
      usages:
        "Use for applications where clarity is a priority and users benefit from both visual cues and text.",
      purpose:
        "This version includes both icons and text, offering a more descriptive navigation system for users unfamiliar with the app's features.",
      codeBlock: `
<div style="position: fixed; bottom: 0; width: 100%; background-color: #6200ea; display: flex; justify-content: space-around; padding: 10px 0; border-top: 1px solid #ccc;">
  <a href="#home" aria-label="Home" style="color: white; text-decoration: none; text-align: center;">
    <i class="material-icons">home</i>
    <p style="margin: 0; font-size: 0.8rem;">Home</p>
  </a>
  <a href="#search" aria-label="Search" style="color: white; text-decoration: none; text-align: center;">
    <i class="material-icons">search</i>
    <p style="margin: 0; font-size: 0.8rem;">Search</p>
  </a>
  <a href="#profile" aria-label="Profile" style="color: white; text-decoration: none; text-align: center;">
    <i class="material-icons">account_circle</i>
    <p style="margin: 0; font-size: 0.8rem;">Profile</p>
  </a>
</div>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Simple Bottom Navigation": "#simple-bottom-nav",
      "Bottom Navigation with Icons": "#bottom-nav-with-icons",
      "Bottom Navigation with Label": "#bottom-nav-with-label",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "Material Design": "https://material.io/components/bottom-navigation",
    "CSS Tricks": "https://css-tricks.com/almanac/properties/f/flex/",
  },
};
