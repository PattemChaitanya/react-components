import ComplexSwitch from "./complex-switch";
import SimpleSwitch from "./simple-switch";
import {
  CustomSwitch,
  MinimalSwitch,
  MultiStateSwitch,
  SwitchWithIcons,
  SwitchWithLabels,
} from "./switch-component";

export const jsonToPageDisplay = {
  pageTitle: "Switch",
  description: "Variety of switch",
  jsonToDisplay: [
    {
      title: "Simple switch",
      subTitle: "Simple switch",
      toDisplay: "",
      component: <SimpleSwitch />,
      open: false,
    },
    {
      title: "Complex switch",
      subTitle: "Complex switch",
      toDisplay: "",
      component: <ComplexSwitch />,
      open: false,
    },
  ],
};

export const switchData = {
  seoTitle: "Switch Component - Modern UI Toggles",
  seoDescription:
    "Explore the Switch component for toggling states in modern UI design. Includes examples, interactive demos, accessibility guidelines, and custom use cases.",
  seoKeywords: [
    "Switch",
    "Toggle",
    "UI Components",
    "State Control",
    "Custom Switch Design",
  ],
  pageTitle: "Switch",
  pageDescription: [
    "The Switch component is a UI element that allows users to toggle between two states, such as ON and OFF.",
    "Switches are commonly used for enabling or disabling features, managing preferences, or controlling real-time settings.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Switch",
    "Switch with Labels",
    "Switch with Icons",
    "Custom-Themed Switch",
    "Multi-State Switch",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "The Switch component should include proper ARIA attributes such as 'aria-checked' for state indication. Ensure it is fully keyboard-accessible (e.g., toggled with Space or Enter). For users with screen readers, the labels or context of the switch should be announced clearly.",
  examples: [
    {
      component: <MinimalSwitch />,
      description:
        "A minimal switch component for toggling between two states.",
      id: "basic",
      title: "Basic Switch Example",
      usages:
        "Ideal for simple ON/OFF controls, such as enabling dark mode or notifications.",
      purpose:
        "Provides an intuitive and space-efficient way to toggle a setting.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider"></span>
    </label>
  );
};`,
        "app.css": `.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 24px;
  transition: 0.3s;
}

.slider::before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

input:checked+.slider {
  background-color: #4caf50;
}

input:checked+.slider::before {
  transform: translateX(20px);
}`,
      },
      open: false,
    },
    {
      component: <SwitchWithLabels />,
      description: "A switch with text labels for its ON and OFF states.",
      id: "labels",
      title: "Switch with Labels Example",
      usages:
        "Useful when it’s important to explicitly indicate the meaning of each state.",
      purpose:
        "Improves clarity and user understanding, especially for accessibility.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch-label">
      <span className="label">{isOn ? "ON" : "OFF"}</span>
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider-label"></span>
    </label>
  );
};`,
        "app.css": `.switch-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  gap: 10px;
}

/* Hide Default Checkbox */
.switch-label input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-label {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: #ccc;
  border-radius: 24px;
  transition: 0.3s;
}

.slider-label::before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

input:checked+.slider-label {
  background-color: #4caf50;
}

input:checked+.slider-label::before {
  transform: translateX(20px);
}

.label {
  min-width: 30px;
  text-align: center;
  color: #555;
}`,
      },
      open: false,
    },
    {
      component: <SwitchWithIcons />,
      description: "A switch that uses icons to represent its states visually.",
      id: "icons",
      title: "Switch with Icons Example",
      usages:
        "Great for applications with visual-heavy designs, like IoT device controls.",
      purpose:
        "Enhances usability and aesthetics by providing clear visual indicators.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
import { WbSunnyRounded, BedtimeRounded } from "@mui/icons-material";

export const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch-icons">
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider-icons">
        {!isOn ? (
          <WbSunnyRounded className="icon sun" />
        ) : (
          <BedtimeRounded className="icon moon" />
        )}
      </span>
    </label>
  );
};`,
        "app.css": `.switch-icons {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
}

.switch-icons input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-icons {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f1f1f1;
  border-radius: 30px;
  transition: background-color 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  box-sizing: border-box;
}

.icon {
  font-size: 18px;
  transition: opacity 0.4s ease, transform 0.5s ease;
}

.sun {
  color: #ffcc00;
  transform: translateX(-10px);
}

.moon {
  color: #ccc;
  transform: translateX(10px);
}

.switch-icons input:checked+.slider-icons {
  background-color: #555;
}

.switch-icons input:checked+.slider-icons .moon {
  opacity: 1;
  transform: translateX(28px);
}

.switch-icons input:checked+.slider-icons .sun {
  opacity: 0;
  transform: translateX(-10px);
}

.switch-icons input:not(:checked)+.slider-icons .moon {
  opacity: 0;
  transform: translateX(-10px);
}

.switch-icons input:not(:checked)+.slider-icons .sun {
  opacity: 1;
  transform: translateX(0px);
}`,
      },
      open: false,
    },
    {
      component: <CustomSwitch />,
      description:
        "A switch styled with custom colors and animations to match brand identity.",
      id: "custom-theme",
      title: "Custom-Themed Switch Example",
      usages: "Perfect for branded applications or unique design systems.",
      purpose:
        "Allows for creative expression while maintaining core functionality.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = ({ checkedColor, uncheckedColor }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="custom-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        aria-label="Toggle switch"
      />
      <span
        className="custom-slider"
        style={{
          background: isChecked
            ? checkedColor || "linear-gradient(135deg, #1b60da, #00c6ff)"
            : uncheckedColor || "linear-gradient(135deg, #ff8a00, #da1b60)",
        }}
      ></span>
    </label>
  );
};`,
        "app.css": `.custom-switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
  cursor: pointer;
}

.custom-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  transition: background 0.4s ease-in-out;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.custom-slider::before {
  content: "";
  position: absolute;
  height: 26px;
  width: 26px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  transition: transform 0.4s ease, background 0.4s ease;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.custom-switch input:checked+.custom-slider::before {
  transform: translate(36px, -50%);
  background: #f1f1f1;
}`,
      },
      open: false,
    },
    {
      component: <MultiStateSwitch />,
      description:
        "A switch with more than two states for extended functionality.",
      id: "multi",
      title: "Multi-State Switch Example",
      usages:
        "Ideal for controls with multiple settings, such as fan speed or volume levels.",
      purpose:
        "Provides more granular control without taking up additional space.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const states = ["Low", "Medium", "High"];
  const [stateIndex, setStateIndex] = useState(0);

  const nextState = () => {
    setStateIndex((prevIndex) => (prevIndex + 1) % states.length);
  };

  return (
    <div
      className="multi-switch"
      onClick={nextState}
      tabIndex={0}
      role="button"
      aria-label={\`Current state: \${states[stateIndex]}\`}
    >
      <div className="multi-slider" data-state={stateIndex}>
        <span className="multi-thumb">{states[stateIndex]}</span>
      </div>
    </div>
  );
};`,
        "app.css": `.multi-switch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  outline: none;
  border: 2px solid #ccc;
  transition: border-color 0.3s ease-in-out;
}

.multi-switch:focus {
  border-color: #4caf50;
}

.multi-slider {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: background 0.3s ease-in-out;
}

.multi-slider[data-state="0"] {
  background: #ff5722;
  color: white;
}

.multi-slider[data-state="1"] {
  background: #ff9800;
  color: white;
}

.multi-slider[data-state="2"] {
  background: #4caf50;
  color: white;
}

.multi-thumb {
  position: relative;
  text-align: center;
  padding: 6px 12px;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Switch": "#basic",
      "Switch with Labels": "#labels",
      "Switch with Icons": "#icons",
      "Custom-Themed Switch": "#custom-theme",
      "Multi-State Switch": "#multi",
    },
    References: "#references",
  },
  references: {
    "ARIA Roles for Toggles":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_Role",
    "Switch Design Patterns":
      "https://uxdesign.cc/designing-effective-switches-for-ui-8d4d61fddf9",
    "Keyboard Accessibility for Controls":
      "https://webaim.org/techniques/keyboard/",
  },
  previousNavigation: { title: "Select", link: "/all-components/select" },
  nextNavigation: null,
};
