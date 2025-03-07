import {
  IconButtonWithBadge,
  SimpleIconButton,
  ToggleIconButton,
} from "./icon-button-component";

export const iconButtonData = {
  seoTitle: "Icon Button Component – A Complete Guide",
  seoDescription:
    "Learn how to design and implement Icon Buttons for intuitive user actions. A compact and visually rich alternative to traditional buttons.",
  seoKeywords: [
    "icon button",
    "material design icon button",
    "UI buttons",
    "icon-only buttons",
    "floating action button",
    "FAB",
    "toolbar buttons",
    "action buttons",
  ],
  pageTitle: "Icon Button",
  pageDescription: [
    "Icon buttons are compact UI components designed for actions where the meaning is visually represented through an icon.",
    "They are used in toolbars, floating action buttons, and other areas to streamline the user interface.",
  ],
  pageImage: "https://material-web.dev/components/images/icon-button/hero.webp",
  types: [
    "Standard Icon Button",
    "Toggle Icon Button",
    "Icon Button with Badge",
  ],
  interactiveDemo:
    "https://material-web.dev/components/icon-button#interactive-demo",
  accessibity:
    "Icon buttons use ARIA labels to ensure screen readers announce their purpose, and focus indicators are provided for accessibility.",
  examples: [
    {
      component: <SimpleIconButton />,
      description:
        "A simple icon button for actions like refresh, search, or settings.",
      id: "icon-button",
      title: "Standard Icon Button",
      usages:
        "Use for common actions that are visually represented by icons, such as search or delete.",
      purpose:
        "To keep the interface compact and visually intuitive for users.",
      codeBlock: {
        "app.jsx": `import React from "react";
import { Refresh } from "@mui/icons-material";
import IconButton from "./IconButton";

export const App = () => {
  return (
    <div>
      <IconButton
        Icon={Refresh}
        onClick={() => alert("Refresh clicked!")}
        label="Refresh"
      />
    </div>
  );
};`,
        "IconButton.js": `import React from "react";
import "./app.css";
        
export default const IconButton = ({ Icon, onClick, label }) => {
  return (
    <i className="icon-button" onClick={onClick} aria-label={label}>
      <Icon fontSize="inherit" />
    </i>
  );
};`,
        "app.css": `.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  transition: background 0.3s ease, transform 0.2s ease;
  outline: none;
  position: relative;
}

.icon-button:hover {
  background: rgba(0, 0, 0, 0.1);
}`,
      },
      open: false,
    },
    {
      component: <ToggleIconButton />,
      description:
        "An icon button with toggle functionality for actions like 'favorite' or 'like'.",
      id: "toggle-icon-button",
      title: "Toggle Icon Button",
      usages:
        "Use toggle buttons for actions with binary states, like favorite/unfavorite.",
      purpose: "To provide visual feedback for toggled actions.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "./app.css";
        
export const App = () => {
  const [liked, setLiked] = useState(false);

  return (
    <i
      className={\`icon-button \${liked ? "active" : ""}\`}
      onClick={() => setLiked(!liked)}
      aria-label="Toggle favorite"
    >
      {liked ? (
        <Favorite fontSize="inherit" />
      ) : (
        <FavoriteBorder fontSize="inherit" />
      )}
    </i>
  );
};`,
        "app.css": `.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  transition: background 0.3s ease, transform 0.2s ease;
  outline: none;
  position: relative;
}

.icon-button:hover {
  background: rgba(0, 0, 0, 0.1);
}

.icon-button:active {
  transform: scale(0.9);
}

.icon-button.active {
  color: red;
}`,
      },
      open: false,
    },
    {
      component: <IconButtonWithBadge count={5} />,
      description:
        "An icon button with a badge to indicate notifications or item counts.",
      id: "icon-button-badge",
      title: "Icon Button with Badge",
      usages:
        "Use for actions that require a count or notification, like inbox or shopping cart.",
      purpose:
        "To provide actionable icons while also displaying additional context, like counts.",
      codeBlock: {
        "app.jsx": `import React from "react";
import { Notifications } from "@mui/icons-material";
import IconButton from "./IconButton";

export const App = () => {
  return (
    <div>
      <IconButton
        Icon={Notifications}
        count={5}
        label="Notifications"
      />
    </div>
  );
};`,
        "IconButton.js": `import React from "react";
import "./app.css";
        
export default const IconButton = ({ Icon, count, label }) => {
  return (
      <button className="icon-button">
        <i className="icon-button" aria-label={label}>
          <Icon fontSize="inherit" />
        </i>
        {count > 0 && <span className="badge">{count > 99 ? "99+" : count}</span>}
      </button>
    );
};`,
        "app.css": `.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  transition: background 0.3s ease, transform 0.2s ease;
  outline: none;
  position: relative;
}

.icon-button:hover {
  background: rgba(0, 0, 0, 0.1);
}
  
.badge {
  position: absolute;
  top: 2px;
  right: 4px;
  background: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Standard Icon Button": "#icon-button",
      "Toggle Icon Button": "#toggle-icon-button",
      "Icon Button with Badge": "#icon-button-badge",
    },
    References: "#references",
  },
  references: {
    "Material Design Icon Buttons": "https://material.io/components/buttons",
    "SVG Icon Accessibility":
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Accessibility",
    "ARIA Button Patterns": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
  },
  previousNavigation: { title: "FAB", link: "/all-components/fab" },
  nextNavigation: {
    title: "Lists",
    link: "/all-components/list",
  },
};
