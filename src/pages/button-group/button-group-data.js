import {
  ButtonGroup,
  // CustomButtonGroup,
  IconButton,
  VariantionButtonGroup,
  VHButtonGroups,
} from "./button-group-component";
import HorizontalButtonGroup from "./horizontal-button-group";
import VerticalButtonGroup from "./vertical-button-group";

export const jsonToPageDisplay = {
  pageTitle: "Button group",
  description: "Grouping of buttons",
  jsonToDisplay: [
    {
      title: "Vertical button group",
      subTitle: "vertical button group",
      toDisplay: `import React from "react";

const buttonStyle = {
  width: "100%",
  border: "1px solid #ccc",
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    marginInline: "auto",
  },
  firstButtonStyle: {
    ...buttonStyle,
    borderRadius: "4px 4px 0 0",
    borderBottom: "none",
  },
  middleButtonStyle: {
    ...buttonStyle,
    borderRadius: "0",
    borderBottom: "none",
  },
  lastButtonStyle: {
    ...buttonStyle,
    borderRadius: "0 0 4px 4px",
  },
};

const VerticalButtonGroup = () => {
  return (
    <div style={styles.containerStyle}>
      <button type="button" style={styles.firstButtonStyle}>
        Button 1
      </button>
      <button type="button" style={styles.middleButtonStyle}>
        Button 2
      </button>
      <button type="button" style={styles.lastButtonStyle}>
        Button 3
      </button>
    </div>
  );
};

export default VerticalButtonGroup;
`,
      component: <VerticalButtonGroup />,
      open: false,
    },
    {
      title: "Horizontal button group",
      subTitle: "Horizontal button group",
      toDisplay: `import React from "react";

const buttonStyle = {
  width: "fit-content",
  border: "1px solid #ccc",
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    marginInline: "auto",
  },
  firstButtonStyle: {
    ...buttonStyle,
    borderRadius: "4px 0 0 4px",
  },
  middleButtonStyle: {
    ...buttonStyle,
    borderRadius: "0",
    borderLeft: "none",
  },
  lastButtonStyle: {
    ...buttonStyle,
    borderRadius: "0 4px 4px 0",
    borderLeft: "none",
  },
};

const HorizontalButtonGroup = () => {
  return (
    <div style={styles.containerStyle}>
      <button type="button" style={styles.firstButtonStyle}>
        Button 1
      </button>
      <button type="button" style={styles.middleButtonStyle}>
        Button 2
      </button>
      <button type="button" style={styles.lastButtonStyle}>
        Button 3
      </button>
    </div>
  );
};

export default HorizontalButtonGroup;
`,
      component: <HorizontalButtonGroup />,
      open: false,
    },
  ],
};

export const buttonGroupData = {
  seoTitle: "Modern Button Group for Web Applications",
  seoDescription:
    "A sleek and modern button group designed for intuitive navigation in web applications.",
  seoKeywords: [
    "button group",
    "web application",
    "modern design",
    "CSS buttons",
    "navigation",
  ],
  pageTitle: "Button Group",
  pageDescription: [
    "This button group component offers a clean, modern look ideal for web applications.",
    "It supports customizable styles, interactive demos, and accessibility features.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Primary Button Group",
    "Custom Button Group",
    "Vertical & Horizonal Button Group",
    "Icon Button Group",
  ],
  interactiveDemo: "",
  accessibity:
    "Designed with ARIA roles and keyboard navigation support for better accessibility.",
  examples: [
    {
      component: <ButtonGroup />,
      description: "A basic button group with primary and secondary buttons.",
      id: "basic-button-group",
      title: "Basic Button Group",
      usages:
        "Used for grouping related actions together in a toolbar or navigation.",
      purpose:
        "To create a cohesive set of buttons that provide quick access to different actions.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
      
export const ButtonGroup = () => {
  return (
    <div className="button-group">
      <button className="btn">ONE</button>
      <button className="btn">TWO</button>
      <button className="btn">THREE</button>
    </div>
  );
};`,
        "app.css": `.button-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  background-color: #90caf9;
  width: fit-content;
  border: 1px solid #64b5f6;
}

.btn {
  background: transparent;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  outline: none;
  transition: background 0.3s ease;
  flex: 1;
  text-transform: uppercase;
  font-size: 14px;
}

/* Add separator lines between buttons */
.btn:not(:last-child) {
  border-right: 1px solid #64b5f6;
}

/* Hover effect */
.btn:hover {
  background-color: #64b5f6;
}

/* Active state */
.btn:active {
  background-color: #42a5f5;
  color: white;
}`,
      },
      open: false,
    },
    {
      component: <VariantionButtonGroup />,
      description:
        "A customizable button group with various color themes and sizes for diverse UI needs.",
      id: "custom-button-group",
      title: "Custom Button Group",
      usages:
        "Used for secondary actions that complement primary buttons or for grouped navigation actions.",
      purpose:
        "To provide flexible button options with different sizes and color variations, enhancing UI consistency without overpowering primary actions.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
import ButtonGroup from "./button-group";

export const App = () => {
  return (
    <div className="container">
      <ButtonGroup
        buttons={["Alpha", "Beta", "Gamma"]}
        color="green"
        size="small"
        variant="outlined"
      />
      <ButtonGroup
        buttons={["One", "Two", "Three"]}
        color="blue"
        size="medium"
        variant="filled"
      />
      <ButtonGroup
        buttons={["First", "Second", "Third"]}
        color="red"
        size="large"
        variant="text"
      />
    </div>
  );
};`,
        "button-group.jsx": `import React from "react";
import "./app.css";

export default const ButtonGroup = ({
  buttons,
  color = "blue",
  size = "medium",
  variant = "filled",
}) => {
  return (
    <div className={\`button-group \${color} \${size} \${variant}\`}>
      {buttons.map((btn, index) => (
        <button key={index} className="btn">
          {btn}
        </button>
      ))}
    </div>
  );
};`,
        "app.css": `.container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding: 20px;
};

.button-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  width: fit-content;
  border: 1px solid transparent;
}

.btn {
  background: transparent;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease, color 0.3s ease;
  flex: 1;
  text-transform: uppercase;
  font-size: 14px;
  border-right: 1px solid transparent;
}

.btn:last-child {
  border-right: none;
}

/* === Sizes === */
.button-group.small .btn {
  padding: 6px 12px;
  font-size: 12px;
}

.button-group.medium .btn {
  padding: 10px 20px;
  font-size: 14px;
}

.button-group.large .btn {
  padding: 14px 28px;
  font-size: 16px;
}

/* === Variants === */
.button-group.filled .btn:hover {
  filter: brightness(90%);
}

.button-group.outlined {
  border: 1px solid currentColor;
}

.button-group.outlined .btn {
  background: transparent;
  border: 1px solid transparent;
}

.button-group.outlined .btn:not(:last-child) {
  border-right: 1px solid currentColor;
}

.button-group.filled .btn:not(:last-child) {
  border-right: 1px solid #64b5f6;
}

.button-group.text .btn:not(:last-child) {
  border-right: 1px solid currentColor;
}

.button-group.text .btn {
  background: none;
}

/* === Color Themes === */
.button-group.blue {
  background-color: #90caf9;
  color: #0d47a1;
  border-color: #64b5f6;
}

.button-group.green {
  color: #1b5e20;
  border-color: #1b5e20;
}

.button-group.red {
  color: #b71c1c;
}

.button-group.filled .btn:active {
  filter: brightness(80%);
}

.button-group.outlined .btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.button-group.text .btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}`,
      },
      open: false,
    },
    {
      component: <VHButtonGroups />,
      description:
        "A versatile button group that supports both vertical and horizontal orientations for flexible layouts.",
      id: "vertical-horizontal-button-group",
      title: "Vertical and Horizontal Button Group",
      usages:
        "Used in toolbars, navigation panels, or forms where grouping related actions is required.",
      purpose:
        "To provide a clean, organized layout for buttons, adaptable to both vertical and horizontal directions for better UI responsiveness.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
import ButtonGroup from "./ButtonGroup";

export const App = () => {
  return (
    <div className="container">
      <div>
        <ButtonGroup
          buttons={["Home", "About", "Contact"]}
          direction="horizontal"
          size="medium"
          color="blue"
        />
      </div>
      <div>
        <ButtonGroup
          buttons={["Dashboard", "Settings", "Profile"]}
          direction="vertical"
          size="medium"
          color="green"
        />
      </div>
    </div>
  );
};`,
        "button-Group.jsx": `import React from 'react';
import "./app.css";

export default const ButtonGroup = ({
  buttons,
  direction = "horizontal", // 'horizontal' or 'vertical'
  size = "small",
  color = "blue",
}) => {
  return (
    <div className={\`button-group \${direction} \${size} \${color}\`}>
      {buttons.map((btn, index) => (
        <button key={index} className="btn">
          {btn}
        </button>
      ))}
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  padding: 20px;
};

.button-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  width: fit-content;
}

.btn {
  background: none;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease, color 0.3s ease;
  flex: 1;
  text-transform: uppercase;
  font-size: 14px;
  border-bottom: 1px solid transparent;
  border-right: 1px solid transparent;
}

.btn:last-child {
  border: none;
}

/* === Layout Directions === */
.button-group.horizontal {
  flex-direction: row;
}

.button-group.horizontal .btn:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.button-group.vertical {
  flex-direction: column;
}

.button-group.vertical .btn:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* === Sizes === */
.button-group.small .btn {
  padding: 6px 12px;
  font-size: 12px;
}

.button-group.medium .btn {
  padding: 10px 20px;
  font-size: 14px;
}

.button-group.large .btn {
  padding: 14px 28px;
  font-size: 16px;
}

/* === Colors === */
.button-group.blue .btn {
  color: #0d47a1;
}

.button-group.green .btn {
  color: #1b5e20;
}

.button-group.red .btn {
  color: #b71c1c;
}

/* === Hover Effects === */
.button-group .btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.button-group .btn:active {
  background-color: rgba(0, 0, 0, 0.1);
}`,
      },
      open: false,
    },
    {
      component: <IconButton />,
      description:
        "A button group with icons for quick visual identification of actions.",
      id: "icon-button-group",
      title: "Icon Button Group",
      usages:
        "Ideal for toolbars where space is limited, and icons enhance usability.",
      purpose:
        "To provide visually distinct buttons using icons for better user recognition.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
import IconButtonGroup from "./icon-button-group";
import { HomeIcon, SettingsIcon, ProfileIcon } from "./icons";
      
export const App = () => {
  const buttons = [
    { icon: HomeIcon, onClick: () => alert("Home clicked") },
    { icon: SettingsIcon, onClick: () => alert("Settings clicked") },
    { icon: ProfileIcon, onClick: () => alert("Profile clicked") },
  ];

  return (
    <div>
      <IconButtonGroup buttons={buttons} size="medium" color="blue" />
    </div>
  );
};`,
        "icon-button-Group.jsx": `import React from "react";
import "./app.css";

const IconButtonGroup = ({ buttons, size = "medium", color = "blue" }) => {
  return (
    <div className={\`icon-button-group \${size} \${color}\`}>
      {buttons.map((btn, index) => (
        <button key={index} className="icon-btn" onClick={btn.onClick}>
          {btn.icon}
        </button>
      ))}
    </div>
  );
};`,
        "icons.jsx": `const HomeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const SettingsIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94a7.48 7.48 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.91-3.3a.5.5 0 00-.61-.22l-2.39.96a7.55 7.55 0 00-1.63-.95l-.36-2.54A.5.5 0 0014.5 2h-5a.5.5 0 00-.49.41l-.36 2.54a7.55 7.55 0 00-1.63.95l-2.39-.96a.5.5 0 00-.61.22l-1.91 3.3a.5.5 0 00.12.64l2.03 1.58a7.48 7.48 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.64l1.91 3.3a.5.5 0 00.61.22l2.39-.96a7.55 7.55 0 001.63.95l.36 2.54a.5.5 0 00.49.41h5a.5.5 0 00.49-.41l.36-2.54a7.55 7.55 0 001.63-.95l2.39.96a.5.5 0 00.61-.22l1.91-3.3a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z" />
  </svg>
);

const ProfileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
  </svg>
);

export { HomeIcon, SettingsIcon, ProfileIcon };`,
        "app.css": `.icon-button-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);
}

.icon-btn {
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.icon-btn:last-child {
  border-right: none;
}

/* === Sizes === */
.icon-button-group.small .icon-btn {
  padding: 6px 12px;
  font-size: 16px;
}

.icon-button-group.medium .icon-btn {
  padding: 10px 20px;
  font-size: 20px;
}

.icon-button-group.large .icon-btn {
  padding: 14px 28px;
  font-size: 24px;
}

/* === Colors === */
.icon-button-group.blue .icon-btn {
  color: #0d47a1;
}

.icon-button-group.green .icon-btn {
  color: #1b5e20;
}

.icon-button-group.red .icon-btn {
  color: #b71c1c;
}

/* === Hover Effects === */
.icon-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.icon-btn:active {
  background-color: rgba(0, 0, 0, 0.2);
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Button Group": "#basic-button-group",
      "Custom Button Group": "#custom-button-group",
      "vertical and Horizontal Button Group":
        "#vertical-horizontal-button-group",
      "Icon Button Group": "#icon-button-group",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
    WAI: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
  },
};
